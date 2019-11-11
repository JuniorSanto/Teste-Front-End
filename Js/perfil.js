var butao = $("#botao").click(buscarUser);
var perfil = $("#perfil");

/*Buscar user*/
function buscarUser(event) {
  event.preventDefault()
  var nome = $("#search").val();
  var api = "https://api.github.com/users/";
  let buscarApi = api + nome;
  $.get(buscarApi, Informacos);
}
function buscarRepositorio() {
  var nome = $("#search").val();
  
  let buscarRep = rep + nome;
  $.get(`https://api.github.com/${nome}/repos`, informacosRep);
}

/*data e json */
function Informacos(data) {
  var informacoes = data;
  console.log(informacoes);
  respApi(informacoes);
}

/*resposta ao user da api*/
if (Informacos.length > 0) {
  function respApi(Informacos) {
    perfil.html(`<div class="row" mt -3>
      <div class="col-md-4">
          <div class="card " style="width: 20rem;">
              <img clas="card-img-top avatar" src="${Informacos.avatar_url}"/>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Id:<span class="badge badge-success">${Informacos.id}</span></li>
                  <li class="list-group-item">Repositórios: <span class="badge badge-dark">${Informacos.public_repos}</span></li>
                  <li class="list-group-item">Seguidores: <span class="badge badge-primary">${Informacos.followers}</span></li>
                  <li class="list-group-item">Seguindo: <span class="badge badge-info">${Informacos.following}</span></li>
              </ul>
                <a href="${Informacos.html_url}" target ="blank" class="btn btn-dark btn-block ">Ver Perfil</a>
     </div>
     <div class="col-d-8">
     </div>
     `);
  }
}

