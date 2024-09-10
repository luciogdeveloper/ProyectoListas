let selectedModificar = document.querySelector(".selectMateria");
selectedModificar.addEventListener("change", async function (e) {
  let id_materia = e.target.selectedOptions[0].value;
  let materia = e.target.selectedOptions[0].label;
  let docenteElegido = e.target.selectedOptions[0].className;
  let outputMateria = document.querySelector(".asignatura");
  let outputDocente = document.querySelector("#docente");
 await fetch('http://localhost:80/ProyectoListas/server/peticiones/alumnosMateria.php', {
    method: "POST",
    body: JSON.stringify({
      "solicitud": id_materia
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(function (json) {
        let div = document.querySelector(".cuerpoTable")
        let html = `<tr><td class="ponerBorde"></td>
      <th class="ponerBorde">Alumnos</th>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
    </tr>`;
        for (let i = 0; i < json.length; i++) {
            html += `<tr class="fila">
      <th scope="row">${i+1}</th>
      <td class="alumnos"> ${json[i].apellido} ${json[i].nombre} <small class="text-muted">${json[i].curso}</small></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
    </tr>`;
        }
        let aux = json.length+1;
        while (aux <= 24) {
          html += `<tr class="fila">
      <th scope="row">${aux}</th>
      <th class="ponerBorde"></th>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
      <td class="ponerBorde"></td>
    </tr>`;
    aux++;
        }
        div.innerHTML = html;
        outputMateria.innerHTML = " "+materia;
        outputDocente.innerText = " "+docenteElegido;
    });
});

function cambiarCalendario() {
  valorActivo = document.querySelector('input[name="flexRadioDefault"]:checked').value;
  if (valorActivo == 1) {
    let thtag1 = document.querySelector(".mes1");
    let thtag2 = document.querySelector(".mes2");
    let thtag3 = document.querySelector(".mes3");
    let thtag4 = document.querySelector(".mes4");
    let thtag5 = document.querySelector(".mes5");
    let thtag6 = document.querySelector(".mes6");

    thtag1.innerText = "Febrero";
    thtag2.innerText = "Marzo";
    thtag3.innerText = "Abril";
    thtag4.innerText = "Mayo";
    thtag5.innerText = "junio";
    thtag6.innerText = "julio";
  } else if (valorActivo == 2){
    let thtag1 = document.querySelector(".mes1");
    let thtag2 = document.querySelector(".mes2");
    let thtag3 = document.querySelector(".mes3");
    let thtag4 = document.querySelector(".mes4");
    let thtag5 = document.querySelector(".mes5");
    let thtag6 = document.querySelector(".mes6");

    thtag1.innerText = "Julio";
    thtag2.innerText = "Agosto";
    thtag3.innerText = "Septiembre";
    thtag4.innerText = "Octubre";
    thtag5.innerText = "Noviembre";
    thtag6.innerText = "Diviembre";
  }
}



