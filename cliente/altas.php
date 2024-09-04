<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turno Noche Alumnos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<div class="container">
<h3 style="text-align: end">
  Lisceo 8 Turno Noche
  <small class="text-muted">Alumnos</small>
</h3>
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" href="../index.php">Inicio</a>
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
  <input type="text" class="form-control" name="nombre" placeholder="Nombre">
</div>
<div class="mb-3">
  <label for="apellido" class="form-label">Apellido</label>
  <input type="text" class="form-control" name="apellido" placeholder="nApellido">
</div>
<div class="mb-3">
  <label for="dni" class="form-label">DNI</label>
  <input type="text" class="form-control" name="dni" placeholder="DNI">
</div>
<div class="mb-3">
  <label for="curso" class="form-label">Curso Asignado</label>
  <input type="text" class="form-control" name="curso" placeholder="Curso Asignado">
</div>
<h3>Materias</h3>
<?php 
include("../modelo/materia.php");
echo listarMaterias();
?>

<button type="submit" class="btn btn-success">Success</button><br><br>

</form>
</div>




<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>