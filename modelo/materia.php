<?php
function listarMateriasBuscar(){
    $Conexion = include('conexion.php');

    $cadena = "SELECT * FROM materia";

    $consulta = mysqli_query($Conexion, $cadena);

    $htmlListar = '<option selected></option>';
    while($registro = mysqli_fetch_array($consulta)){
        $htmlListar = $htmlListar. '<option value="'.$registro[0].'" class="'.$registro[2].'">'.$registro[1].'</option>';
    }

    return $htmlListar;
}


function listarMaterias(){
    $Conexion = include('conexion.php');

    $cadena = "SELECT * FROM materia";

    $consulta = mysqli_query($Conexion, $cadena);

    $htmlListar = '<div class="row justify-content-start">';
    while($registro = mysqli_fetch_array($consulta)){
        $htmlListar = $htmlListar. '<div class="form-check form-check-inline col-4">
  <input class="form-check-input" name="materia[]" type="checkbox" value="'.$registro[0].'" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">'.$registro[1].'</label></div>';
    }

    $htmlListar = $htmlListar. '</div><br><br>';
    return $htmlListar;
}

function listarMateriasAlu($id){
    $Conexion = include('conexion.php');

    $cadena = 'SELECT materia.nombre_materia,materia.docente FROM alumno 
    INNER JOIN cursa AS cursa ON alumno.id_alumno = cursa.id_alumno
    INNER JOIN materia AS materia ON materia.id_materia = cursa.id_materia WHERE alumno.id_alumno = '.$id;

    $consulta = mysqli_query($Conexion, $cadena);

    $array = array();
    while($registro = mysqli_fetch_array($consulta)){
        array_push($array, array('nombre' => $registro[0], 'docente' => $registro[1]));    
    }

    return $array;
}



?>