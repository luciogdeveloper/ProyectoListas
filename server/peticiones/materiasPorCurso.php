<?php
include '../../modelo/materia.php';
$json = json_decode(file_get_contents('php://input'), true);
if ($json['nivel']) {
    $nivel = $json['nivel'];
    $respuesta = listarMaterias($nivel);
}
echo json_encode($respuesta);
?>