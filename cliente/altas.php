<?php
include('../modelo/horario.php');
$horarios = listarTodosHorario();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turno Noche Alumnos</title>
    <link rel="shortcut icon" href="../img/icono.jfif" style="border-radius:5px" type="image/x-icon">
    <link rel="stylesheet" href="../css/index.css">
    <link href="../css/bootstrap/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>
<div class="container">
<br>
  <div class="logo"">
  <img src="../img/logoLiceo.png" alt="">
  </div>
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" href="../index1.php">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page"  href="#">Altas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="asistencia.php">Asistencia</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="calificaciones.php">Calificaciones</a>
  </li>
</ul>
<br><br>
<h2>
  Formulario de Altas
</h2>
<br><br>
<form action="../server/altas.php" method="post">
<div class="mb-3">
  <label for="nombre" class="form-label">Nombre</label>
  <input type="text" class="form-control" name="nombre" placeholder="Nombre" required>
</div>
<div class="mb-3">
  <label for="apellido" class="form-label">Apellido</label>
  <input type="text" class="form-control" name="apellido" placeholder="Apellido" required>
</div>
<div class="mb-3">
  <label for="dni" class="form-label">DNI</label>
  <input type="text" class="form-control" name="dni" placeholder="DNI" required>
</div>
<div class="mb-3">
  <label for="mail" class="form-label">E-mail</label>
  <input type="email" class="form-control" name="mail" placeholder="E-mail">
</div>
<div class="mb-3">
  <label for="telefono" class="form-label">Telefono</label>
  <input type="text" class="form-control" name="telefono" placeholder="Telefono">
</div>
<div class="mb-3">
  <label for="curso" class="form-label">Curso Asignado</label>
  <select id="nivel" class="altas form-select" name="curso" aria-label="Default select example" required>
  <option value="" selected>Selecciona un curso</option>
  <option value="1 A">1 A</option>
  <option value="1 B">1 B</option>
  <option value="2 A">2 A</option>
  <option value="2 B">2 B</option>
  <option value="3 A">3 A</option>
  <option value="3 B">3 B</option>
  <option value="4 A">4 A</option>
  <option value="4 B">4 B</option>
</select>
</div>
<h3>Materias</h3>
<div id="cursoPornivel">

</div>

<button onclick="vaciarForm(event)" type="submit" class="btn btn-success">Guardar</button><br><br>

</form>
</div>


<script>
   window.localStorage.setItem("horarios",JSON.stringify(<?php echo json_encode($horarios) ?>));
</script>
<script src="../css/bootstrap/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="../js/altas.js"></script>
</body>
</html>