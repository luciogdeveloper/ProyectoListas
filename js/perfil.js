let materias = JSON.parse(localStorage.getItem("materiasAlumno"));
let tbody = document.querySelectorAll(".tbody");

async function buscarPorId(idMateria,cuatrimestre) {
    await fetch('http://localhost:80/ProyectoListas/server/peticiones/materiaPorId.php', {
      method: "POST",
      body: JSON.stringify({
        "id": idMateria.id
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(function (json) {

        json.forEach(element => {

        if (cuatrimestre == 1) {
            if (element.segundo_cuatrimestre === "0") {
                imprimirHora(element, idMateria);
            }
        }
        if (cuatrimestre == 2) {
            if (element.segundo_cuatrimestre === "0") {
                imprimirHora(element, idMateria);
            }
            setTimeout(() => {
                if (element.segundo_cuatrimestre === "1") {
                imprimirHora(element, idMateria);
            }
            },500);
        }
        
        
        })
      })
    }

const inicio = (cuatrimestre) => {
    let lunes = document.querySelectorAll(".Lunes");
    let martes = document.querySelectorAll(".Martes");
    let miercoles = document.querySelectorAll(".Miercoles");
    let jueves = document.querySelectorAll(".Jueves");
    let viernes = document.querySelectorAll(".Viernes");

    lunes.forEach(element => {
        element.innerText = "";
    });

    martes.forEach(element => {
        element.innerText = "";
    });
    miercoles.forEach(element => {
        element.innerText = "";
    });
    jueves.forEach(element => {
        element.innerText = "";
    });
    viernes.forEach(element => {
        element.innerText = "";
    });

    materias.forEach(idMateria => {
        buscarPorId(idMateria,cuatrimestre);
     });
}

const imprimirHora = (element, idMateria) => {
    for (let i = 0; i < tbody.length; i++) {
    
    switch (element.dia) {
        case "Lunes":
            switch (element.primera) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[2].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[2].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[2].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[2].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[2].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[2].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[2].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;

            }


            switch (element.segunda) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;

            }

        
            switch (element.tercera) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[2].innerText =  idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;

            }


            break;

        case "Martes":
            switch (element.primera) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
            }


            switch (element.segunda) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;

            }

        
            switch (element.tercera) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[3].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;

            }


            break;
            
        case "Miercoles":
            switch (element.primera) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
            }


            switch (element.segunda) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;

            }

        
            switch (element.tercera) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[4].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;

            }


            break;
        case "Jueves":
            switch (element.primera) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[5].textContent = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
            }


            switch (element.segunda) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
            }

        
            switch (element.tercera) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[5].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;

            }

            break;
        case "Viernes":
            switch (element.primera) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
            }

            switch (element.segunda) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
            }

        
            switch (element.tercera) {
                case "17:00 a 17:35":
                    tbody[i].children[0].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "17:35 a 18:10":
                    tbody[i].children[1].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:10 a 18:45" || "18:10 a 18:40":
                    tbody[i].children[2].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "18:45 a 19:20":
                    tbody[i].children[3].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "19:20 a 19:55":
                    tbody[i].children[4].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:00 a 20:35":
                    tbody[i].children[5].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "20:35 a 21:10":
                    tbody[i].children[6].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:15 a 21:50":
                    tbody[i].children[7].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "21:50 a 22:25":
                    tbody[i].children[8].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;
                case "22:25 a 23:00":
                    tbody[i].children[9].children[6].innerText = idMateria.nombre+" "+idMateria.curso+idMateria.divicion;
                    break;

            }

            break;
        }
    }
}


const cambiarCalendario = (e) => {
    inicio(e.target.value);
}