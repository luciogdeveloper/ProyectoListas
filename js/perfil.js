let materias = JSON.parse(localStorage.getItem("materiasAlumno"));
let tbody = document.querySelector(".tbody").children;

async function buscarPorId(idMateria) {
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
    
        switch (element.dia) {
            case "Lunes":
                switch (element.primera) {
                    case "17:00 a 17:35":
                        tbody[0].children[2].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[2].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[2].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[2].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[2].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[2].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[2].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[2].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[2].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[2].innerText = idMateria.nombre;
                        break;

                }


                switch (element.segunda) {
                    case "17:00 a 17:35":
                        tbody[0].children[2].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[2].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[2].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[2].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[2].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[2].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[2].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[2].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[2].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[2].innerText = idMateria.nombre;
                        break;

                }

            
                switch (element.tercera) {
                    case "17:00 a 17:35":
                        tbody[0].children[2].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[2].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[2].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[2].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[2].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[2].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[2].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[2].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[2].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[2].innerText = idMateria.nombre;
                        break;

                }


                break;
    
            case "Martes":
                switch (element.primera) {
                    case "17:00 a 17:35":
                        tbody[0].children[3].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[3].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[3].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[3].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[3].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[3].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[3].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[3].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[3].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[3].innerText = idMateria.nombre;
                        break;
                }


                switch (element.segunda) {
                    case "17:00 a 17:35":
                        tbody[0].children[3].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[3].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[3].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[3].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[3].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[3].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[3].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[3].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[3].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[3].innerText = idMateria.nombre;
                        break;

                }

            
                switch (element.tercera) {
                    case "17:00 a 17:35":
                        tbody[0].children[3].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[3].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[3].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[3].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[3].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[3].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[3].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[3].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[3].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[3].innerText = idMateria.nombre;
                        break;

                }


                break;
                
            case "Miércoles":
                switch (element.primera) {
                    case "17:00 a 17:35":
                        tbody[0].children[4].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[4].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[4].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[4].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[4].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[4].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[4].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[4].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[4].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[4].innerText = idMateria.nombre;
                        break;
                }


                switch (element.segunda) {
                    case "17:00 a 17:35":
                        tbody[0].children[4].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[4].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[4].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[4].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[4].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[4].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[4].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[4].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[4].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[4].innerText = idMateria.nombre;
                        break;

                }

            
                switch (element.tercera) {
                    case "17:00 a 17:35":
                        tbody[0].children[4].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[4].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[4].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[4].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[4].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[4].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[4].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[4].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[4].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[4].innerText = idMateria.nombre;
                        break;

                }


                break;
            case "Jueves":
                switch (element.primera) {
                    case "17:00 a 17:35":
                        tbody[0].children[5].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[5].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[5].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[5].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[5].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[5].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[5].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[5].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[5].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[5].innerText = idMateria.nombre;
                        break;
                }


                switch (element.segunda) {
                    case "17:00 a 17:35":
                        tbody[0].children[5].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[5].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[5].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[5].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[5].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[5].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[5].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[5].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[5].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[5].innerText = idMateria.nombre;
                        break;
                }

            
                switch (element.tercera) {
                    case "17:00 a 17:35":
                        tbody[0].children[5].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[5].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[5].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[5].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[5].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[5].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[5].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[5].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[5].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[5].innerText = idMateria.nombre;
                        break;

                }

                break;
            case "Viernes":
                switch (element.primera) {
                    case "17:00 a 17:35":
                        tbody[0].children[6].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[6].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[6].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[6].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[6].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[6].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[6].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[6].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[6].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[6].innerText = idMateria.nombre;
                        break;
                }

                switch (element.segunda) {
                    case "17:00 a 17:35":
                        tbody[0].children[6].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[6].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[6].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[6].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[6].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[6].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[6].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[6].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[6].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[6].innerText = idMateria.nombre;
                        break;
                }

            
                switch (element.tercera) {
                    case "17:00 a 17:35":
                        tbody[0].children[6].innerText = idMateria.nombre;
                        break;
                    case "17:35 a 18:10":
                        tbody[1].children[6].innerText = idMateria.nombre;
                        break;
                    case "18:10 a 18:45" || "18:10 a 18:40":
                        tbody[2].children[6].innerText = idMateria.nombre;
                        break;
                    case "18:45 a 19:20":
                        tbody[3].children[6].innerText = idMateria.nombre;
                        break;
                    case "19:20 a 19:55":
                        tbody[4].children[6].innerText = idMateria.nombre;
                        break;
                    case "20:00 a 20:35":
                        tbody[5].children[6].innerText = idMateria.nombre;
                        break;
                    case "20:35 a 21:10":
                        tbody[6].children[6].innerText = idMateria.nombre;
                        break;
                    case "21:15 a 21:50":
                        tbody[7].children[6].innerText = idMateria.nombre;
                        break;
                    case "21:50 a 22:25":
                        tbody[8].children[6].innerText = idMateria.nombre;
                        break;
                    case "22:25 a 23:00":
                        tbody[9].children[6].innerText = idMateria.nombre;
                        break;

                }

                break;
        
            }
        
        })
      })
    }

materias.forEach(idMateria => {
   buscarPorId(idMateria);
});
