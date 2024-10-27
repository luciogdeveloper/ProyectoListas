let selectedNivel = document.querySelectorAll("#flexCheckDefault");
function ckecked(e){
  for (let i = 0; i < selectedNivel.length; i++) {
    for (let j = 0; j < e.length; j++) {
      if (selectedNivel[i].value == e[j].id) {
        selectedNivel[i].checked = true;
        elegirhorariosAlumno(selectedNivel[i]);
      }
    }
  }
};

function elegirhorariosAlumno(e) {
  
  let divMaterias = document.querySelector("#cursoPornivel").children[0].children;
  let idMaterias = [];
  let materiasHorarios = [];
  let hora = [];
  let materiasBloquear = [];

  let idCheked;
  let elementoCheked;
  let elementoData;


  if (e.target == undefined) {
    idCheked = e.attributes[5].value;
    elementoCheked = e.checked;
    elementoData = e;
  }else {
    idCheked = e.target.attributes[5].value;
    elementoCheked = e.target.checked;
    elementoData = e.target;
  }

  let horarios = JSON.parse(localStorage.getItem("horarios"));
  let horarioCheked = horarios.filter(elemnet => elemnet.id_materia == idCheked)

  for (let i = 0; i < divMaterias.length; i++) {
    let id = parseInt(divMaterias[i].children[0].value);
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
              let coincidencia1 = isInRange(diahora.inicio, diahora.fin, inicio, fin);
              
              if (coincidencia1 == true) {
                materiasBloquear.push(subElement.id_materia);
              }
            }else if(subElement.segunda != ""){
              let inicio = subElement.primera.split(" ")[0];
              let fin = subElement.segunda.split(" ")[2];
              let coincidencia1 = isInRange(diahora.inicio, diahora.fin, inicio, fin);
              
              if (coincidencia1 == true) {
                materiasBloquear.push(subElement.id_materia);
              }
            }else {
              let inicio = subElement.primera.split(" ")[0];
              let fin = subElement.primera.split(" ")[2];
              let coincidencia1 = isInRange(diahora.inicio, diahora.fin, inicio, fin);
              
              if (coincidencia1 == true) {
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
          if (id != idCheked && id != elementoData.title) {
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


const isInRange = (start, end, timeStart, timeEnd) => {
  if(timeStart < '00:00' || timeStart > '23:59' || timeStart.substring(3) > '59') {
    console.log('Hora no válida');
    return;
  }else if (timeStart >= end) {
    return false;
  }else if (timeStart < end && timeEnd <= start) {
    return false;
  }else {
    return true;
  }
}