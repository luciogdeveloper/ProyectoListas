<?php
function insertar( $ape,$nom, $dni,$mail,$telefono,$curso, $materia)
{
   
        $Conexion = include("conexion.php");

        $cadena = "INSERT INTO alumno(apellido,nombre,dni,mail,telefono,curso_asignado) VALUES ('$ape','$nom','$dni','$mail','$telefono','$curso')";
        

        try {
            $resultado = mysqli_query($Conexion, $cadena);
            $id = $Conexion->insert_id;

            foreach ($materia as $key => $value) {
                $cadena_materia = "INSERT INTO cursa(id_alumno,id_materia) VALUES ('$id','$value')";
                $resultado = mysqli_query($Conexion, $cadena_materia);
            }
            return "OK";
        } catch (Exception $e) {
            return substr($e, 22, 41);
        }

}

function listarAlumno($id_materia){
    $Conexion = include('conexion.php');

    $cadena_alumno = "SELECT alumno.id_alumno,alumno.apellido,alumno.nombre,alumno.dni,alumno.curso_asignado,materia.nombre_materia,materia.curso,materia.divicion FROM materia 
    INNER JOIN cursa AS cursa ON materia.id_materia = cursa.id_materia
    INNER JOIN alumno AS alumno ON alumno.id_alumno = cursa.id_alumno WHERE materia.id_materia =$id_materia ORDER BY alumno.curso_asignado ASC , alumno.apellido ASC";
    
    $consulta = mysqli_query($Conexion, $cadena_alumno);
    $array = array();
    while($registro = mysqli_fetch_array($consulta)){
        array_push($array, array('id' => $registro[0], 'apellido' => $registro[1], 'nombre' => $registro[2], 'dni' => $registro[3], 'curso' => $registro[4], 'nombre_materia' => $registro[5], 'nivel' => $registro[6], 'divicion' => $registro[7]));
    }
    return $array;
}

function listarAlumnos(){
    $Conexion = include('conexion.php');

    $cadena_alumno = "SELECT * FROM alumno ORDER BY apellido ASC";
    
    $consulta = mysqli_query($Conexion, $cadena_alumno);
    $array = array();
    while($registro = mysqli_fetch_array($consulta)){
        array_push($array, array('id' => $registro[0], 'apellido' => $registro[1], 'nombre' => $registro[2], 'dni' => $registro[3], 'mail' => $registro[4], 'telefono' => $registro[5], 'curso' => $registro[6]));
    }
    return $array;
}

function listarAlu($id){
    $Conexion = include('conexion.php');

    $cadena_alumno = "SELECT * FROM alumno WHERE id_alumno =$id ORDER BY apellido ASC";
    
    $consulta = mysqli_query($Conexion, $cadena_alumno);
    $array = array();
    while($registro = mysqli_fetch_array($consulta)){
        array_push($array, array('id' => $registro[0], 'apellido' => $registro[1], 'nombre' => $registro[2], 'dni' => $registro[3], 'mail' => $registro[4], 'telefono' => $registro[5], 'curso' => $registro[6]));
    }
    return $array;
}

function modificar($id,$apellido,$nombre, $dni,$mail,$telefono,$curso, $materia){
    $Conexion = include('conexion.php');

    $cadena_alumno = "UPDATE alumno 
    SET apellido = '$apellido', nombre= '$nombre',dni = '$dni', mail= '$mail', telefono ='$telefono', curso_asignado= '$curso'
    WHERE id_alumno = '$id'";

    $borrar_cursada = "DELETE FROM cursa WHERE id_alumno = '$id'";
    
    try {
        $consulta = mysqli_query($Conexion, $cadena_alumno);

        if ($consulta) {
            $res = mysqli_query($Conexion, $borrar_cursada);
            foreach ($materia as $key => $value) {
                $cadena_materia = "INSERT INTO cursa(id_alumno,id_materia) VALUES ('$id','$value')";
                $resultado = mysqli_query($Conexion, $cadena_materia);
            }

        return "OK";
        }
    } catch (Exception $e) {
        return substr($e, 22, 41);
    }
    
}

function eliminar($id){
    $Conexion = include('conexion.php');

    $borrar_cursada = "DELETE FROM cursa WHERE id_alumno = '$id'";
    $borrar_alumno = "DELETE FROM alumno WHERE id_alumno = '$id'";

    try {
        $consulta = mysqli_query($Conexion, $borrar_cursada);

        if ($consulta) {
            $res = mysqli_query($Conexion, $borrar_alumno);
            return $res;
        }
    } catch (Exception $e) {
        return substr($e, 22, 41);
    }
}

?>