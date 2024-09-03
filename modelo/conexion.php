<?php
$HOST = "localhost";
$USER = "root";
$PASS = "";
$DB = "gestionsubir";
$Conexion = mysqli_connect($HOST, $USER, $PASS, $DB);
return $Conexion;   
?>