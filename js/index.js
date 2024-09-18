let carga = document.querySelector(".container");
 async function cargarAlumnos(e) {
  await fetch('http://localhost:80/ProyectoListas/server/peticiones/alumnos.php', {
    method: "POST",
    body: JSON.stringify({
      "solicitud": 1
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(function (json) {
      window.localStorage.setItem("alumnos",JSON.stringify(json));
      let div = document.querySelector(".row");
      let html = ``;
    for (let i = 0; i < json.length; i++) {

      html += `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="img/alumno.jpg" alt="Card image cap">
  <div class="card-header">
    ${json[i].apellido} ${json[i].nombre}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">DNI: ${json[i].dni}</li>
    <li class="list-group-item">Curso Asignado: ${json[i].curso}</li>
    <li class="list-group-item">Mail: ${json[i].mail}</li>
    <li class="list-group-item">Telefono: ${json[i].telefono}</li>
  </ul>
  <br>
  <form action="server/perfil.php" method="post">
  <input name="idAlumno" value="${json[i].id}" style="display:none">
  <button type="submit" class="btn btn-outline-danger">Perfil del Alumno</button>
  </form>
  <br>
</div>`;
    
  }
  div.innerHTML = html;
    });
}

let selectedModificar = document.querySelector("#busqueda");
selectedModificar.addEventListener("keyup", async function (e) {
  let alumnos = JSON.parse(localStorage.getItem("alumnos"));
  let div = document.querySelector(".row");
  let busqueda = e.target.value;
  let html = ``;
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].apellido.toLowerCase().startsWith(busqueda.toLowerCase())) {

      html += `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="img/alumno.jpg" alt="Card image cap">
  <div class="card-header">
    ${alumnos[i].apellido} ${alumnos[i].nombre}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">DNI: ${alumnos[i].dni}</li>
    <li class="list-group-item">Curso Asignado: ${alumnos[i].curso}</li>
    <li class="list-group-item">Mail: ${alumnos[i].mail}</li>
    <li class="list-group-item">Telefono: ${alumnos[i].telefono}</li>
  </ul>
  <br>
  <form action="server/perfil.php" method="post">
  <input name="idAlumno" value="${alumnos[i].id}" style="display:none">
  <button type="submit" class="btn btn-outline-danger">Perfil del Alumno</button>
  </form>
  <br>
</div>`;
    }
  }
  div.innerHTML = html;
});

