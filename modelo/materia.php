<?php
function listarMaterias(){
    $Conexion = include('conexion.php');

    $cadena = "SELECT * FROM materia";

    $consulta = mysqli_query($Conexion, $cadena);

    $htmlListar = '<div class="row justify-content-start">';
    while($registro = mysqli_fetch_array($consulta)){
        $htmlListar .= $htmlListar. '<div class="mb-3">
  <label for="'.$registro[1].'" class="form-label">'.$registro[1].' Profesor: '.$registro[2].'</label>
  <input type="checkbox" mane="'.$registro[1].'" value="'.$registro[0].'">
  </div>';
    }

    $htmlListar = $htmlListar. '</div>';
    return $htmlListar;
}
?>