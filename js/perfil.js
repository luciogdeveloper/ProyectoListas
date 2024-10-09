let materiasAlumno = JSON.parse(localStorage.getItem("materiasAlumno"));
let tbody = document.querySelector(".tbody").children;
materiasAlumno.forEach(element => {
    switch (element.dia1) {
        case "Lunes":
            if (element.primerahora1 == -1) {
                tbody[1].children[1].innerText = element.nombre
            }else if (element.primerahora1 == -2) {
                tbody[0].children[1].innerText = element.nombre
            }else {
                let indice =parseInt(element.primerahora1) + 1;
                tbody[indice].children[1].innerText = element.nombre;
            }

            if (element.segundahora1 == -1) {
                tbody[1].children[1].innerText = element.nombre
            }else if (element.segundahora1 == -2) {
                tbody[0].children[1].innerText = element.nombre
            }else {
                let indice =parseInt(element.segundahora1) + 1;
                tbody[indice].children[1].innerText = element.nombre;
            }
            break;


        case "Martes":
            if (element.primerahora1 == -1) {
                tbody[1].children[2].innerText = element.nombre
            }else if (element.primerahora1 == -2) {
                tbody[0].children[2].innerText = element.nombre
            }else {
                let indice =parseInt(element.primerahora1) + 1;
                tbody[indice].children[2].innerText = element.nombre;
            }


            if (element.segundahora1 == -1) {
                tbody[1].children[2].innerText = element.nombre
            }else if (element.segundahora1 == -2) {
                tbody[0].children[2].innerText = element.nombre
            }else {
                let indice =parseInt(element.segundahora1) + 1;
                tbody[indice].children[2].innerText = element.nombre;
            }
            break;
        case "Miercoles":
            if (element.primerahora1 == -1) {
                tbody[1].children[3].innerText = element.nombre
            }else if (element.primerahora1 == -2) {
                tbody[0].children[3].innerText = element.nombre
            }else if (element.primerahora1 >= 1) {
                let indice =parseInt(element.primerahora1) + 1;
                tbody[indice].children[3].innerText = element.nombre;
            }

            if (element.segundahora1 == -1) {
                tbody[1].children[3].innerText = element.nombre
            }else if (element.segundahora1 == -2) {
                tbody[0].children[3].innerText = element.nombre
            }else {
                let indice =parseInt(element.segundahora1) + 1;
                tbody[indice].children[3].innerText = element.nombre;
            }
            break;
        case "Jueves":
            if (element.primerahora1 == -1) {
                tbody[1].children[4].innerText = element.nombre
            }else if (element.primerahora1 == -2) {
                tbody[0].children[4].innerText = element.nombre
            }else {
                let indice =parseInt(element.primerahora1) + 1;
                tbody[indice].children[4].innerText = element.nombre;
            }

            if (element.segundahora1 == -1) {
                tbody[1].children[4].innerText = element.nombre
            }else if (element.segundahora1 == -2) {
                tbody[0].children[4].innerText = element.nombre
            }else {
                let indice =parseInt(element.segundahora1) + 1;
                tbody[indice].children[4].innerText = element.nombre;
            }
            break;
        case "Viernes":
            if (element.primerahora1 == -1) {
                tbody[1].children[5].innerText = element.nombre
            }else if (element.primerahora1 == -2) {
                tbody[0].children[5].innerText = element.nombre
            }else {
                let indice =parseInt(element.primerahora1) + 1;
                tbody[indice].children[5].innerText = element.nombre;
            }


            if (element.segundahora1 == -1) {
                tbody[1].children[5].innerText = element.nombre
            }else if (element.segundahora1 == -2) {
                tbody[0].children[5].innerText = element.nombre
            }else {
                let indice =parseInt(element.segundahora1) + 1;
                tbody[indice].children[5].innerText = element.nombre;
            }
            
            break;
    
        default:
            break;
    }

});
