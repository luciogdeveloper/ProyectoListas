<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turno Noche Alumnos</title>
    <link rel="shortcut icon" href="../img/icono.jfif" style="border-radius:5px" type="image/x-icon">
    <link rel="stylesheet" href="../css/index.css">
    <link href="../css/bootstrap/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/calificaciones.css">
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
    <a class="nav-link" href="altas.php">Altas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="asistencia.php">Asistencia</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Calificaciones</a>
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


  <div class="cabezera">
    <h5>Gobierno de la Ciudad de Buenos Aires</h5>
    <h5>Ministerio de Educacion</h5>
    <h5 class="planilla">PLANILLA DE CALIFICACIONES</h5>
    <h6>Ciclo Lectivo: 2025</h6>
    

    <div class="nivelMteria">

      <div class="cursoTurno">
        <h6 class="cursoDivicion">NIVEL</h6>
        <h6>TURNO NOCHE</h6>
      </div>

      <div class="cursoTurno">
        <h6 class="asignatura">ASIGNATURA: </h6>
        <h6>PROFESOR: ...............................</h6>
      </div>

      <div class="cursoTurno">
        <h6></h6>
        <h6></h6>
      </div>

    </div>
  <div class="centrarContenido">
  <table class="table">
    <thead class="thead-dark cabezaTabla">
      <tr>
        <th scope="col" class="num">N°</th>
        <th scope="col" class="nombre">Apellido y Nombres</th>
        <th scope="col" class="textRotado"><p>CALIFIC. 1° BIM</p></th>
        <th scope="col" class="textRotado"><p>CALIFIC. 2° BIM</p></th>
        <th scope="col" class="textRotado"><p>CALIFIC. 3° BIM</p></th>
        <th scope="col" class="textRotado"><p>CALIFIC. 4° BIM</p></th>
        <th scope="col" class="textRotado"><p>CALIFIC. FINAL</p></th>
        <th scope="col" class="textRotado"><p>CALIFIC. DICIEMBRE</p></th>
        <th scope="col" class="textRotado"><p>CALIFIC. FEBRERO</p></th>
        <th scope="col" class="textRotado"><p>CALIFIC. DEFINITIVA</p></th>
      </tr>
    </thead>
    <tbody class="cuerpoTable">
    
    </tbody>
  </table>
  </div>
</div>
</div>


<script src="../js/calificaciones.js"></script>
<script src="../css/bootstrap/js/bootstrap.bundle.min.js"  crossorigin="anonymous"></script>
</body>
</html>