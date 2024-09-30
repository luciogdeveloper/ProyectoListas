<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turno Noche Alumnos</title>
    <link rel="shortcut icon" href="img/icono.jfif" style="border-radius:5px" type="image/x-icon">
    <link href="css/bootstrap/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>
<div style="position: absolute;left: 42vw;top: 30vh;height:100vh;">
<img src="img/ciudadLogo.png" alt="">
</div>

<style>

img {
  animation-duration: 6s;
  animation-name: opacidad;
}

@keyframes opacidad {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

</style>

<?php
header("refresh:5;url=index1.php");
exit();
?>
</body>
</html>