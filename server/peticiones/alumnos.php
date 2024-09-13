<?php
include '../../modelo/alumno.php';
$json = json_decode(file_get_contents('php://input'), true);
if ($json['solicitud']) {
    $respuesta = listarAlumnos();
}
echo json_encode($respuesta);
?>