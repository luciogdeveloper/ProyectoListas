<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turno Noche Alumnos</title>
    <link rel="shortcut icon" href="../img/icono.jfif" style="border-radius:5px" type="image/x-icon">
    <link rel="stylesheet" href="../css/index.css">
    <link href="../css/bootstrap/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
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
    <a class="nav-link" href="../index.php">Inicio</a>
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
    <h3>Gobierno de la Ciudad de Buenos Aires</h3>
    <h3>Ministerio de Educacion</h3>
    <h3>PLANILLA DE CALIFICACIONES</h3>
    <H4>Ciclo Lectivo: 2025</H4>
    

    <div class="nivelMteria">

      <div class="cursoTurno">
        <h4 class="cursoDivicion">NIVEL</h4>
        <h4>TURNO NOCHE</h4>
      </div>

      <div class="cursoTurno">
        <h4 class="asignatura">ASIGNATURA: </h4>
        <h4>PROFESOR: ...............................</h4>
      </div>

      <div class="cursoTurno">
        <h4></h4>
        <h4></h4>
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
<script src="../css/bootstrap/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>