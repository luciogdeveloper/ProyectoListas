let selectedNivel = document.querySelectorAll("#flexCheckDefault");
function ckecked(e){
  for (let i = 0; i < selectedNivel.length; i++) {
    for (let j = 0; j < e.length; j++) {
      if (selectedNivel[i].value == e[j].id) {
        selectedNivel[i].checked = true;
      }
    }
  }
};


