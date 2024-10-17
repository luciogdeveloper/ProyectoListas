<?php
function listarHorario($id){
    $Conexion = include('conexion.php');

    $cadena = "SELECT * FROM `horario` WHERE id_materia =".$id;

    $consulta = mysqli_query($Conexion, $cadena);

    $array = array();
    
    while($registro = mysqli_fetch_array($consulta)){
        array_push($array, array('id' => $registro[0],'id_materia' => $registro[1], 'dia' => $registro[2],'primera' => $registro[3], 'segunda' => $registro[4], 'tercera' => $registro[5]));
    }

    return $array;
}

function listarTodosHorario(){
    $Conexion = include('conexion.php');

    $cadena = "SELECT * FROM `horario`";

    $consulta = mysqli_query($Conexion, $cadena);

    $array = array();
    
    while($registro = mysqli_fetch_array($consulta)){
        array_push($array, array('id' => $registro[0],'id_materia' => $registro[1], 'dia' => $registro[2],'primera' => $registro[3], 'segunda' => $registro[4], 'tercera' => $registro[5]));
    }

    return $array;
}
?>