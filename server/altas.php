<?php
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$dni = $_POST["dni"];
$curso = $_POST["curso"];
$materia = $_POST["materia"];

include("../modelo/alumno.php");
$resul = insertar( $apellido,$nombre, $dni,$curso, $materia);

echo $resul;

?>