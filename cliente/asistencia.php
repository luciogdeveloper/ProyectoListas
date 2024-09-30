<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turno Noche Alumnos</title>
    <link rel="shortcut icon" href="../img/icono.jfif" style="border-radius:5px" type="image/x-icon">
    <link rel="stylesheet" href="../css/index.css">
    <link href="../css/bootstrap/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/asistencia.css">
  </head>
<body>
<div class="container">
<br>
  <div class="logo">
  <img src="../img/logoLiceo.png" alt="">
  </div>
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" href="../index1.php">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="altas.php">Altas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Asistencia</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="calificaciones.php">Calificaciones</a>
  </li>
</ul>
<br><br>

<h3 class="selectTExt">
  Seleccionar un materia
</h3>
<select class="form-select selectMateria" multiple aria-label="Multiple select example">
  <?php
  include("../modelo/materia.php");
  echo listarMateriasBuscar();
  ?>
</select>
<br><br>
<div class="form-check">
  <input onclick="cambiarCalendario()" value="1" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
  Primer Cuatrimestre
  </label>r
</div>
<div class="form-check">
  <input onclick="cambiarCalendario()" value="2" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
  <label class="form-check-label" for="flexRadioDefault2">
   Segundo Cuatrimestre
  </label>
</div><br><br>
<table class="table">
  <thead class="thead-dark cabezera">
    <tr>
      <th scope="col" colspan="10">Liceo N° 8 D.E N° 13 Esteban Echeverria</th>
      <th scope="col" colspan="22" id="nivel">Curso: </th>
      <th scope="col" colspan="1">AÑO: 2025 </th>
    </tr>
    <tr>
      <th scope="col" colspan="13">Asignatura: <small class="asignatura"></small></th>
      <th scope="col" colspan="20">Docente: <small></small></th>
    </tr>
    <tr id="cambioCol">
      
    </tr>
  </thead>
  <tbody class="cuerpoTable">
    
  </tbody>
</table>

<script src="../js/asistencia.js"></script>
<script src="../css/bootstrap/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>