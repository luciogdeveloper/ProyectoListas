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
    <link href="../css/bootstrap/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/perfil.css">
</head>
<body>
    <br>
    <a href="../index1.php" class="btn btn-link"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Volver al inicio</a>
    <br>
<div class="container">
    <h3>Datos del Alumno</h3><br>
<form action="index.php" method="post">
<div class="card mb-3" style="max-width: 1500px;">
  <div class="row g-0">
    <div class="col-md-3">
      <img src="../img/alumno.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-7" >
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
    <div class="btn-toolbar col-md-2" role="toolbar" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form action="eliminar.php" method="post">
    <div class="modal-content">
      <div class="modal-header">
      <p class="card-text" style="display:none"><?php echo '<label style="width:100px;margin-right:50px">Apellido:</label> <input name="idAlumno" value="'. $datos[0]['id'].'" >' ?></p>
        <h1 class="modal-title fs-5" id="exampleModalLabel">Confirmar Borrado</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ¿Esta seguro que desea eliminar este Alumno?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="submit" class="btn btn-primary">Confirmar</button>
      </div>
    </div>
    </form>
  </div>
</div>

</div>

<div id="horario">
        <h3>Horarios</h3>
        <table class="table">
        <thead>
  <tr>
    <th scope="col"></th>
    <td></td>
    <td>Lunes</td>
    <td>Martes</td>
    <td>Miercoles</td>
    <td>Jueves</td>
    <td>Viernes</td>
  </tr>
  </thead>
  <tbody class="tbody">
  <tr class="17:00 a 17:35">
    <td>3°</td>
    <td>17:00 a 17:35</td>
    <td class="Lunes"></td>
    <td class="Martes"></td>
    <td class="Miercoles"></td>
    <td class="Jueves"></td>
    <td class="Viernes"></td>
  </tr>
  <tr class="17:35 a 18:10">
    <td>2°</td>
    <td>17:35 a 18:10</td>
    <td class="Lunes"></td>
    <td class="Martes"></td>
    <td class="Miercoles"></td>
    <td class="Jueves"></td>
    <td class="Viernes"></td>
  </tr>
  <tr class="18:10 a 18:45">
    <td>1°</td>
    <td>18:10 a 18:45</td>
    <td class="Lunes"></td>
    <td class="Martes"></td>
    <td class="Miercoles"></td>
    <td class="Jueves"></td>
    <td class="Viernes"></td>
  </tr>
  <tr class="18:45 a 19:20">
    <td>1°</td>
    <td>18:45 a 19:20</td>
    <td class="Lunes"></td>
    <td class="Martes"></td>
    <td class="Miercoles"></td>
    <td class="Jueves"></td>
    <td class="Viernes"></td>
  </tr>
  <tr class="19:20 a 19:55">
  <td>2°</td>
  <td>19:20 a 19:55</td>
    <td class="Lunes"></td>
    <td class="Martes"></td>
    <td class="Miercoles"></td>
    <td class="Jueves"></td>
    <td class="Viernes"></td>
  </tr>
  <tr class="20:00 a 20:35">
    <td>3°</td>
    <td>20:00 a 20:35</td>
    <td class="Lunes"></td>
    <td class="Martes"></td>
    <td class="Miercoles"></td>
    <td class="Jueves"></td>
    <td class="Viernes"></td>
  </tr>
  <tr class="20:35 a 21:10">
  <td>4°</td>
  <td>20:35 a 21:10</td>
    <td class="Lunes"></td>
    <td class="Martes"></td>
    <td class="Miercoles"></td>
    <td class="Jueves"></td>
    <td class="Viernes"></td>
  </tr>
  <tr class="21:15 a 21:50">
  <td>5°</td>
  <td>21:15 a 21:50</td>
    <td class="Lunes"></td>
    <td class="Martes"></td>
    <td class="Miercoles"></td>
    <td class="Jueves"></td>
    <td class="Viernes"></td>
  </tr>
  <tr class="21:50 a 22:25">
    <td>6°</td>
    <td>21:50 a 22:25</td>
    <td class="Lunes"></td>
    <td class="Martes"></td>
    <td class="Miercoles"></td>
    <td class="Jueves"></td>
    <td class="Viernes"></td>
  </tr>
  <tr class="22:25 a 23:00">
    <td>7°</td>
    <td>22:25 a 23:00</td>
    <td class="Lunes"></td>
    <td class="Martes"></td>
    <td class="Miercoles"></td>
    <td class="Jueves"></td>
    <td class="Viernes"></td>
  </tr>
  </tbody>
</table>
        </div>
<br>

<script src="../css/bootstrap/js/bootstrap.js"></script>
<script>
  window.localStorage.setItem("materiasAlumno",JSON.stringify(<?php echo json_encode($materias) ?>));
</script>
<script src="../js/perfil.js"></script>
</body>
</html>