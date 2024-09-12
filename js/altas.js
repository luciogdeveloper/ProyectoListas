let selectedNivel = document.querySelector("#nivel");
selectedNivel.addEventListener("change",async function mostrerMaterias(e){
    let nivelDivicion = selectedNivel.selectedOptions[0].textContent;
    let nivel = nivelDivicion.split(" ");
    let divMaterias = document.querySelector("#cursoPornivel");
    let htmlListar = `<div class="row justify-content-start">`;
    await fetch('http://localhost:80/ProyectoListas/server/peticiones/materiasPorCurso.php', {
        method: "POST",
        body: JSON.stringify({
          "nivel": nivel[0]
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(function (json) {
            for (let i = 0; i < json.length; i++) {
                htmlListar += `<div class="form-check form-check-inline col-4">
                <input class="form-check-input" name="materia[]" type="checkbox" value="${json[i].id}" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">${json[i].nombre} ${json[i].curso}${json[i].divicion}</label></div>`;
            }
            htmlListar += `</div><br><br>`;
            divMaterias.innerHTML = htmlListar;
        })
});