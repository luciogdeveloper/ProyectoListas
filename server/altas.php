<?php
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$dni = $_POST["dni"];
$mail = $_POST["mail"];
$telefono = $_POST["telefono"];
$curso = $_POST["curso"];
$materia = $_POST["materia"];

include("../modelo/alumno.php");
$resul = insertar( $apellido,$nombre, $dni,$mail,$telefono,$curso, $materia);

header("refresh:5;url=../cliente/altas.php");
exit();

?>