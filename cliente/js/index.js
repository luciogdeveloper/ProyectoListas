let selectedModificar = document.querySelector(".selectMateria");
selectedModificar.addEventListener("change", function (e) {
  let id_materia = e.target.selectedOptions[0].value;
  fetch("../../server/peticiones/alumnosMaterias.php", {
    method: "POST",
    body: JSON.stringify({
      solicitud: id_materia,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(function (json) {
        let div = document.querySelector("#lista")
        let html = ``;
        for (let i = 0; i < json.length; i++) {
            html += `<div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-6 col-sm-3">
                <img src="img/alumno.jpg" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${json[i].apellido} ${json[i].nombre}</h5>
                  <p class="card-text">Curso asignado ${json[i].curso}</p>
                  <h5 class="card-title">Materias</h5>
                  <?php 
                  echo listarMateriasAlu(${json[i].id})
                  ?>
                </div>
              </div>
            </div>
          </div>`;
        }
        div.innerHTML = html;
    });
});