let selectedNivel = document.querySelector("#nivel");
selectedNivel.addEventListener("change",async function mostrerMaterias(e){
    let nivelDivicion = selectedNivel.selectedOptions[0].textContent;
    let pagina = e.target.classList[0];
    let nivel = nivelDivicion.split(" ");
    let divMaterias = document.querySelector("#cursoPornivel");
<<<<<<< HEAD
    let materia = JSON.parse(localStorage.getItem("materias")); 
    let grado = selectedNivel.selectedOptions[0].value.split(" ")[0];
    let cuatrimestre = document.querySelector("#cuatrimestre");
=======
    
>>>>>>> a769bc702e797a709c9032106dc4973e01a21424
    let htmlListar = `<div class="row justify-content-start">`;

    if (grado === '4') {
      cuatrimestre.style.display = "block";
    }else {
      cuatrimestre.style.display = "none";
    }

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
          if (pagina == "altas") {
            localStorage.setItem("materiasRecibidasPorCurso",JSON.stringify(json));
            for (let i = 0; i < json.length; i++) {
              htmlListar += `<div onload="bloquearMateriasPrimerCuatrimestre()" class="form-check form-check-inline col-4">
              <input class="form-check-input" onchange="elegirhorario(event)" name="materia[]" type="checkbox" value="${json[i].id}" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">${json[i].nombre} ${json[i].curso}${json[i].divicion}</label></div>`;
          }
         
          htmlListar += `</div><br><br>`;
          divMaterias.innerHTML = htmlListar;
          }else if (pagina =="modificar") {
            for (let i = 0; i < json.length; i++) {
              htmlListar += `<div class="form-check form-check-inline col-4" onmauseover="check(event)">
              <input class="form-check-input" name="materia[]" type="checkbox" value="${json[i].id}" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">${json[i].nombre} ${json[i].curso}${json[i].divicion}</label></div>`;  
            }
          htmlListar += `</div><br><br>`;
          divMaterias.innerHTML = htmlListar;
          }
          let materia = JSON.parse(localStorage.getItem("materias"));
          let checkGroup = document.querySelectorAll(".form-check-input");
          if (materia != null && pagina =="modificar") {
          for (let i = 0; i < checkGroup.length; i++) {
            for (let j = 0; j < materia.length; j++) {
              if (checkGroup[i].value == materia[j].id && pagina =="modificar") {
                checkGroup[i].checked = true;
              }
            }
          }
        }
        })
});




const bloquearMateriasPrimerCuatrimestre = () => { 
  let divMaterias = document.querySelector("#cursoPornivel");
  let idBloquearPrimerCuatrimestre = [91,92,97,98,109,110];
  console.dir(divMaterias);
  idBloquearPrimerCuatrimestre.forEach(element => {
    for (let i = 0; i < divMaterias.length; i++) {
      if (element === divMaterias[i].children[0].attributes.value.value) {
        divMaterias[i].children[0].disabled = true;
      }
    }
  });
}



function elegirhorario(e) {
  
  let divMaterias = document.querySelector("#cursoPornivel").children[0].children;
  let idMaterias = [];
  let materiasHorarios = [];
  let hora = [];
  let materiasBloquear = [];

  let horarios = JSON.parse(localStorage.getItem("horarios"));
  let idCheked = e.target.attributes[4].value;
  let elementoCheked = e.target.checked;
  let horarioCheked = horarios.filter(elemnet => elemnet.id_materia == idCheked)

  for (let i = 0; i < divMaterias.length; i++) {
    let id =parseInt(divMaterias[i].children[0].value);
    idMaterias.push(id);
  }
 
  idMaterias.forEach(id => {
    materiasHorarios.push(horarios.filter(elemnet => elemnet.id_materia == id))
  });

  horarioCheked.forEach(horario => {
    if (horario.tercera != "") {
      let inicio = horario.primera.split(" ")[0];
      let fin = horario.tercera.split(" ")[2];
      let rango = {
        materia: horario.id_materia,
        dia: horario.dia,
        inicio: inicio,
        fin: fin
      }
      hora.push(rango);
    }else if (horario.segunda != ""){
      let inicio = horario.primera.split(" ")[0];
      let fin = horario.segunda.split(" ")[2];
      let rango = {
        materia: horario.id_materia,
        dia: horario.dia,
        inicio: inicio,
        fin: fin
      }
      hora.push(rango);
    }else {
      let inicio = horario.primera.split(" ")[0];
      let fin = horario.primera.split(" ")[2];
      let rango = {
        materia: horario.id_materia,
        dia: horario.dia,
        inicio: inicio,
        fin: fin
      }
      hora.push(rango);
    }
  });


  materiasHorarios.forEach(element => {
      element.forEach(subElement => {
        hora.forEach(diahora => {
          if (diahora.dia == subElement.dia) {
            if (subElement.tercera != "") {
              let inicio = subElement.primera.split(" ")[0];
              let fin = subElement.tercera.split(" ")[2];
              let coincidencia1 = isInRange(diahora.inicio, diahora.fin,inicio);
              let coincidencia2 = isInRange(diahora.inicio, diahora.fin,fin);
              if (coincidencia1 == true || coincidencia2 == true) {
                materiasBloquear.push(subElement.id_materia);
              }
            }else if(subElement.segunda != ""){
              let inicio = subElement.primera.split(" ")[0];
              let fin = subElement.segunda.split(" ")[2];
              let coincidencia1 = isInRange(diahora.inicio, diahora.fin,inicio);
              let coincidencia2 = isInRange(diahora.inicio, diahora.fin,fin);
              if (coincidencia1 == true || coincidencia2 == true) {
                materiasBloquear.push(subElement.id_materia);
              }
            }else {
              let inicio = subElement.primera.split(" ")[0];
              let fin = subElement.primera.split(" ")[2];
              let coincidencia1 = isInRange(diahora.inicio, diahora.fin,inicio);
              let coincidencia2 = isInRange(diahora.inicio, diahora.fin,fin);
              if (coincidencia1 == true || coincidencia2 == true) {
                materiasBloquear.push(subElement.id_materia);
              }
            }
          }
        });
      });
  });

  let arrSinReperirMateriasBloquear = materiasBloquear.filter(onlyUnique);

  if (elementoCheked) {
    for (let i = 0; i < divMaterias.length; i++) {
      arrSinReperirMateriasBloquear.forEach(id => {
        if (id === divMaterias[i].children[0].attributes.value.value) {
          if (id != idCheked) {
            divMaterias[i].children[0].disabled = true;
          }
        }
      });
    }
  }else {
    for (let i = 0; i < divMaterias.length; i++) {
      arrSinReperirMateriasBloquear.forEach(id => {
        if (id === divMaterias[i].children[0].attributes.value.value) {
            divMaterias[i].children[0].disabled = false;
        }
      });
    }
  }

}


const onlyUnique = (value, index, self) => { 
  return self.indexOf(value) === index;
}


const isInRange = (start, end, time) => {
  if(time < '00:00' || time > '23:59' || time.substring(3) > '59') {
    console.log('Hora no válida');
    return;
  }
  return time >= start && time <= end;
}

const cambiarCalendario = (e) => {
  let materias = JSON.parse(localStorage.getItem("materiasRecibidasPorCurso"));
  let cuatrimestreActual = 1;
  
  let idBloquearSegundoCuatrimestre = [93,94,99,100,111,112];


  console.dir();
  console.dir(e.target.value);
}