var butonrep = $("#reposit").click(buscarRepositorio)

function buscarRepositorio(event) {
    event.preventDefault()
    var nome = $("#search").val();
    var api =`https://api.github.com/users/${nome}`;
    var repoapi = api + "/repos";
    $.get(repoapi, informacosRep);
}
function informacosRep(data) {
    var rep = $("#repo");
    rep.html('<p></p> ');
    var informacoes = data;
    respostaRep(informacoes)
  
}
 
function respostaRep(informacosRep) {
  informacosRep.forEach(repo => {
    var rep = $("#repo");
    rep.append(`<div class="car car-body mb-2">
          <div class="row">
              <div class="col-md-6"><a href="${repo.html_url}" target="_black">${repo.name}</a>
                  <span class="badge bodge-warning">Forks: ${repo.repos_url}</span>
                  <span class="badge bodge-primary">Starts: ${repo.stargazers_count}</span>
                  <span class="badge bodge-success">Watch: ${repo.watchers_count}</span>
                  <span class="badge bodge-warning">Forks: ${repo.starred_url}</span>
              </div>
          </div>
      </div>`);
  });
}