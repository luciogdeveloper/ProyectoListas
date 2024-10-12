<?php
include '../../modelo/horario.php';
$json = json_decode(file_get_contents('php://input'),true);
if ($json['id']) {
    $id_materia = $json['id'];
    $respuesta = listarHorario($id_materia);
}
echo json_encode($respuesta);

?>