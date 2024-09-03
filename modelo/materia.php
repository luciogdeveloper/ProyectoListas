<?php
function listarMaterias(){
    $Conexion = include('conexion.php');

    $cadena = "SELECT * FROM materia";

    $consulta = mysqli_query($Conexion, $cadena);

    $htmlListar = '<div class="row justify-content-start">';
    while($registro = mysqli_fetch_array($consulta)){
        $htmlListar = $htmlListar. '<div class="form-check form-check-inline col-4">
  <input class="form-check-input" type="checkbox" value="'.$registro[0].'" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">'.$registro[1].'</label></div>';
    }

    $htmlListar = $htmlListar. '</div><br><br>';
    return $htmlListar;
}
?>