<?php
$id = $_POST["id"];
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$dni = $_POST["dni"];
$mail = $_POST["mail"];
$telefono = $_POST["telefono"];
$curso = $_POST["curso"];
$materia = $_POST["materia"];

include("../modelo/alumno.php");
$resul = modificar( $id,$apellido,$nombre, $dni,$mail,$telefono,$curso, $materia);

header("refresh:5;url=../index.php");
exit();

?>