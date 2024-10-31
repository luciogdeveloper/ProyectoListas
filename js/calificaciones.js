let selectedModificar = document.querySelector(".selectMateria");
selectedModificar.addEventListener("change", async function (e) {
  let id_materia = e.target.selectedOptions[0].value;
  let outputMateria = document.querySelector(".asignatura");
  let outNivel = document.querySelector(".cursoDivicion");
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
        outputMateria.innerHTML ="ASIGNATURA: "+ json[0].nombre_materia
        let div = document.querySelector(".cuerpoTable");
        outNivel.innerText = json[0].nivel+" "+json[0].divicion;
        let html = ``;
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
        </tr>`;
        }
        let aux = json.length+1;
        while (aux <= 22) {
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
        </tr>`;
        aux++;
        }
        div.innerHTML = html;
    });
});