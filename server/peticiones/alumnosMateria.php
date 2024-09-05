<?php
include '../../modelo/alumno.php';
$json = json_decode(file_get_contents('php://input'), true);
if ($json['solicitud']) {
    $id_materia = $json['solicitud'];
    $respuesta = listarAlumno($id_materia);
}
echo json_encode($respuesta);
?>