<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turno Noche Alumnos</title>
    <link rel="shortcut icon" href="img/icono.jfif" style="border-radius:5px" type="image/x-icon">
    <link rel="stylesheet" href="css/index.css">
    <link href="css/bootstrap/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<div class="container">
  <br>
  <div class="logo"">
  <img src="img/logoLiceo.png" alt="">
  </div>
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="cliente/altas.php">Altas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="cliente/asistencia.php">Asistencia</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="cliente/Calificaciones.php">Calificaciones</a>
  </li>
</ul>
<br><br>


<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" id="busqueda" type="search" placeholder="Buscar" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
</nav>

<br><br>

<div class="row" id="lista">


</div>

</div>



<script src="js/index.js"></script>
<script src="css/bootstrap/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>