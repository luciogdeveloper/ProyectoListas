<?php
$id = $_POST["idAlumno"];

include("../modelo/alumno.php");
include("../modelo/materia.php");
$datos = listarAlu( $id);
$materias = listarMateriasAlu($id);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turno Noche Alumnos</title>
    <link rel="shortcut icon" href="../img/icono.jfif" style="border-radius:5px" type="image/x-icon">
    <link href="../css/bootstrap/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/perfil.css">
</head>
<body>
    <br>
    <a href="../index1.php" class="btn btn-link"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Volver al inicio</a>
    <br>
<div class="container">
    <h3>Datao del Alumno</h3><br>
<form action="index.php" method="post">
<div class="card mb-3" style="max-width: 1500px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../img/alumno.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-5" >
      <div class="card-body">
        <h4 class="card-title"><?php echo 'Alumno '. $datos[0]['apellido'].' '. $datos[0]['nombre']; ?></h4>
        <p class="card-text" style="display:none"><?php echo '<label style="width:100px;margin-right:50px">Apellido:</label> <input name="idAlumno" value="'. $datos[0]['id'].'" >' ?></p>
        <p class="card-text"><?php echo 'Apellido: '. $datos[0]['apellido'] ?></p>
        <p class="card-text"><?php echo 'Nombre: '. $datos[0]['nombre'] ?></p>
        <p class="card-text"><?php echo 'DNI:   '. $datos[0]['dni'] ?></p>
        <p class="card-text"><?php echo 'Mail:  '. $datos[0]['mail'] ?></p>
        <p class="card-text"><?php echo 'Telefono: '. $datos[0]['telefono'] ?></p>
        <p class="card-text"><small class="text-body-secondary"><?php echo 'Curso: '. $datos[0]['curso']; ?></p></small></p>
        
        <h3>Materias</h3>
        <div id="cursoPornivel">
            <?php
            foreach ($materias as $key => $value) {
                echo '<p class="card-text">'.$value["nombre"].' '.$value["curso"].' '.$value["divicion"].'</p>';
            }
            
            ?>
        </div>
      </div>
    </div>
    <div class="btn-toolbar col-md-3" role="toolbar" aria-label="Toolbar with button groups">
        <button type="button" class="botones btn btn-outline-danger"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg>
      </button>
      <button type="submit"  class="botones btn btn-outline-warning"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>
      </button>
    </die>
  </div>
  </div>
  </form>
  <br><br>
</div>
<br>

</body>
</html>