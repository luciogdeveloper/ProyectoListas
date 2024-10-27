<?php
function listarMateriasBuscar(){
    $Conexion = include('conexion.php');

    $cadena = "SELECT * FROM materia";

    $consulta = mysqli_query($Conexion, $cadena);

    $htmlListar = '<option selected></option>';
    while($registro = mysqli_fetch_array($consulta)){
        $htmlListar = $htmlListar. '<option value="'.$registro[0].'" class="'.$registro[4].'">'.$registro[1].' '.$registro[2].$registro[3].'</option>';
    }

    return $htmlListar;
}

function listarMateriasCompletas(){
    $Conexion = include('conexion.php');

    $cadena = "SELECT * FROM materia";

    $consulta = mysqli_query($Conexion, $cadena);

    $htmlListar = '<div class="row justify-content-start">';
    while($registro = mysqli_fetch_array($consulta)){
        $htmlListar = $htmlListar. '<div class="form-check form-check-inline col-4">
              <input class="form-check-input" onload="ckecked(event)" name="materia[]"onchange="elegirhorariosAlumno(event)" type="checkbox" value="'.$registro[0].'" title="'.$registro[5].'" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">'.$registro[1].' '.$registro[2].$registro[3].'</label>
              </div>';
    }
    $htmlListar = $htmlListar. '</div><br><br>';
    return $htmlListar;
}


function listarMaterias($nivel){
    $Conexion = include('conexion.php');

    $cadena = "SELECT * FROM `materia` WHERE curso <=".$nivel;

    $consulta = mysqli_query($Conexion, $cadena);

    $array = array();
    
    while($registro = mysqli_fetch_array($consulta)){
        array_push($array, array('id' => $registro[0], 'nombre' => $registro[1],'curso' => $registro[2], 'divicion' => $registro[3], 'doble' => $registro[4], 'cuatrimestre' => $registro[5]));
    }

    return $array;
}

function listarMateriasAlu($id){
    $Conexion = include('conexion.php');

    $cadena = 'SELECT materia.id_materia,materia.nombre_materia,materia.curso,materia.divicion FROM alumno 
    INNER JOIN cursa AS cursa ON alumno.id_alumno = cursa.id_alumno
    INNER JOIN materia AS materia ON materia.id_materia = cursa.id_materia WHERE alumno.id_alumno ='.$id;

    $consulta = mysqli_query($Conexion, $cadena);

    $array = array();
    while($registro = mysqli_fetch_array($consulta)){
        array_push($array, array('id' => $registro[0], 'nombre' => $registro[1],'curso' => $registro[2],'divicion' => $registro[3]));    
    }

    return $array;
}


?>