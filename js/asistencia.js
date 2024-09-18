let selectedModificar = document.querySelector(".selectMateria");
selectedModificar.addEventListener("change", async function (e) {
  let id_materia = e.target.selectedOptions[0].value;
  let materia = e.target.selectedOptions[0].label;
  let dobleElegido = e.target.selectedOptions[0].className;
  let outputMateria = document.querySelector(".asignatura");
  let outputCol = document.querySelector("#cambioCol");
  let outNivel = document.querySelector("#nivel");
  console.log(dobleElegido);
  console.log(typeof(dobleElegido));
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
   if (dobleElegido == "0") {

    let outCabecera = document.querySelector(".cabezera");
    let cabezera = `<tr>
      <th scope="col" colspan="10">Liceo N° 8 D.E N° 13 Esteban Echeverria</th>
      <th scope="col" colspan="22" id="nivel">Curso: ${json[0].nivel} ${json[0].divicion}</th>
      <th scope="col" colspan="1">AÑO: 2025 </th>
    </tr>
    <tr>
      <th scope="col" colspan="13">Asignatura: ${json[0].nombre_materia}<small class="asignatura"></small></th>
      <th scope="col" colspan="20">Docente: <small></small></th>
    </tr>
    <tr id="cambioCol">
    <th scope="col" colspan="1">#</th>
  <th scope="col" colspan="1">Registro de Asistencia</th>
  <th scope="col" colspan="6" class="mes mes1">Marzo</th>
  <th scope="col" colspan="6" class="mes mes2">Abril</th>
  <th scope="col" colspan="6" class="mes mes3">Mayo</th>
  <th scope="col" colspan="6" class="mes mes4">Junio</th>
  <th scope="col" colspan="6" class="mes mes5">Julio</th>
  <th scope="col" colspan="1" class="mes">Obsevacionesr</th>
    </tr>`;

    outCabecera.innerHTML = cabezera;

    let div = document.querySelector(".cuerpoTable");
    outNivel.innerText ="Curso: "+ json[0].nivel+" "+json[0].divicion;
    let html = `<tr><td class="ponerBorde"></td>
  <th class="ponerBorde">Alumnos</th>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde">%</td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde">%</td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde">%</td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde">%</td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde"></td>
  <td class="ponerBorde">%</td>
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
  <td class="ponerBorde"></td>
</tr>`;
aux++;
    }
    outputCol.innerHTML = `<th scope="col" colspan="1">#</th>
  <th scope="col" colspan="1">Registro de Asistencia</th>
  <th scope="col" colspan="6" class="mes mes1">Marzo</th>
  <th scope="col" colspan="6" class="mes mes2">Abril</th>
  <th scope="col" colspan="6" class="mes mes3">Mayo</th>
  <th scope="col" colspan="6" class="mes mes4">Junio</th>
  <th scope="col" colspan="6" class="mes mes5">Julio</th>
  <th scope="col" colspan="1" class="mes">Observaciones</th>`;
    div.innerHTML = html;
   } else {
    let outCabecera = document.querySelector(".cabezera");
    let cabezera = `<tr>
      <th scope="col" colspan="20">Liceo N° 8 D.E N° 13 Esteban Echeverria</th>
      <th scope="col" colspan="28" id="nivel">Curso: ${json[0].nivel} ${json[0].divicion}</th>
      <th scope="col" colspan="10">AÑO: 2025 </th>
    </tr>
    <tr>
      <th scope="col" colspan="35">Asignatura: ${json[0].nombre_materia}<small class="asignatura"></small></th>
      <th scope="col" colspan="23">Docente: <small></small></th>
    </tr>
    <tr id="cambioCol">
    <th scope="col" colspan="1">#</th>
  <th scope="col" colspan="1">Registro de Asistencia</th>
  <th scope="col" colspan="11" class="mes mes1">Marzo</th>
  <th scope="col" colspan="11" class="mes mes2">Abril</th>
  <th scope="col" colspan="11" class="mes mes3">Mayo</th>
  <th scope="col" colspan="11" class="mes mes4">Junio</th>
  <th scope="col" colspan="11" class="mes mes5">Julio</th>
  <th scope="col" colspan="1" class="mes">Obser</th>
    </tr>`;

    outCabecera.innerHTML = cabezera;

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
  <td class="ponerBorde">%</td>
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
  <td class="ponerBorde">%</td>
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
  <td class="ponerBorde">%</td>
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
  <td class="ponerBorde">%</td>
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
  <td class="ponerBorde">%</td>
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
   }
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

    thtag1.innerText = "Marzo";
    thtag2.innerText = "Abril";
    thtag3.innerText = "Mayo";
    thtag4.innerText = "junio";
    thtag5.innerText = "julio";
  } else if (valorActivo == 2){
    let thtag1 = document.querySelector(".mes1");
    let thtag2 = document.querySelector(".mes2");
    let thtag3 = document.querySelector(".mes3");
    let thtag4 = document.querySelector(".mes4");
    let thtag5 = document.querySelector(".mes5");

    thtag1.innerText = "Julio";
    thtag2.innerText = "Agosto";
    thtag3.innerText = "Septiembre";
    thtag4.innerText = "Octubre";
    thtag5.innerText = "Noviembre";
  }
}



