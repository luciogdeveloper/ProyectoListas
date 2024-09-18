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

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turno Noche Alumnos</title>
    <link rel="shortcut icon" href="../img/icono.jfif" style="border-radius:5px" type="image/x-icon">
    <link href="../css/bootstrap/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <div style="display:flex;justify-content:center;align-items:center; height: 100vh;">
    <div class="spinner-grow text-primary" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only"></span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only"></span>
</div>
</div>

<?php
header("refresh:5;url=../index.php");
exit();
?>

<script src="../css/bootstrap/js/bootstrap.js"></script>
</body>
</html>