<?php
$id = $_POST["idAlumno"];

include("../modelo/alumno.php");
include("../modelo/materia.php");
$datos = listarAlu( $id);
$materias = json_encode(listarMateriasAlu($id));
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turno Noche Alumnos</title>
    <link rel="shortcut icon" href="../img/icono.jfif" style="border-radius:5px" type="image/x-icon">
    <link href="../css/bootstrap/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body onload='ckecked(<?php echo $materias ?>)'>
  <form action="perfil.php" method="post">
    <p class="card-text" style="display:none"><?php echo '<label style="width:100px;margin-right:50px">Apellido:</label> <input name="idAlumno" value="'. $datos[0]['id'].'" >' ?></p>
    <button type="submit" class="btn btn-link"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Volver al inicio</button><br>
  </form>
<div class="container">
    <h3>Datao del Alumno</h3><br>
<form action="modificar.php" onsubmit="verError(event)" method="post">
<div class="card mb-3" style="max-width: 1500px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../img/alumno.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8" >
      <div class="card-body">
        <h4 class="card-title"><?php echo $datos[0]['apellido'].' '. $datos[0]['nombre']; ?></h4>
        <p class="card-text" style="display:none"><?php echo '<label style="width:100px;margin-right:50px">Apellido:</label> <input name="id" value="'. $datos[0]['id'].'" >' ?></p>
        <p class="card-text"><?php echo '<label style="width:100px;margin-right:50px">Apellido:</label> <input name="apellido" value="'. $datos[0]['apellido'].'" >' ?></p>
        <p class="card-text"><?php echo '<label style="width:100px;margin-right:50px">Nombre:</label>   <input name="nombre" value="'. $datos[0]['nombre'].'" >' ?></p>
        <p class="card-text"><?php echo '<label style="width:100px;margin-right:50px">DNI:  </label>    <input name="dni" value="'. $datos[0]['dni'].'" >' ?></p>
        <p class="card-text"><?php echo '<label style="width:100px;margin-right:50px">Mail:  </label>   <input name="mail" value="'. $datos[0]['mail'].'" >' ?></p>
        <p class="card-text"><?php echo '<label style="width:100px;margin-right:50px">Telefono:</label> <input name="telefono" value="'. $datos[0]['telefono'].'" >' ?></p>
        <p class="card-text"><small class="text-body-secondary"><?php echo 'Curso: '. $datos[0]['curso']; ?></p></small></p>
        <div class="mb-3">
            <select id="nivel" class="modificar form-select" onselected ="check(event)" name="curso" aria-label="Default select example" required>
                <?php echo '<option value="'.$datos[0]['curso'].'" selected>Selecciona un curso</option>' ?>
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
          <?php 
          echo listarMateriasCompletas();
          ?>
        </div>
      </div>
    </div>
    <button type="button" id="btn" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Guardar Cambios
    </button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Confirmar Edicion</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ¿Esta seguro que desea editar este Alumno?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="submit" class="btn btn-primary">Confirmar</button>
      </div>
    </div>
  </div>
</div>
   
  </div>
  </div>
  </form>
  <br><br>
</div>
<br>


<script src="../css/bootstrap/js/bootstrap.js"></script>
<script>
    window.localStorage.setItem("materias",JSON.stringify(<?php echo $materias ?>));
</script>
<script src="../js/modificar.js"></script>
</body>
</html>