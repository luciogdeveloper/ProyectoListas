<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turno Noche Alumnos</title>
    <link rel="shortcut icon" href="img/icono.jfif" style="border-radius:5px" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<div class="container">
<h3 style="text-align: end">
  Liceo 8 Turno Noche
  <small class="text-muted">Alumnos</small>
</h3>
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="cliente/altas.php">Altas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Asistencia</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Calificaciones</a>
  </li>
</ul>
<br><br>

<h3>
  Listar alumnos por materia
</h3>
<h2>
  Seleccionar un materia
</h2>
<select class="form-select selectMateria" multiple aria-label="Multiple select example">
  <?php
  include("modelo/materia.php");
  echo listarMateriasBuscar();
  ?>
</select>
<br><br>

<div class="row" id="lista">


</div>

</div>



<script src="js/index.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>