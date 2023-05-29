<?php
include 'conexao.php';

session_start();

$idCli = $_POST["idCli"];

$sql = mysql_query("SELECT * FROM cad_prod WHERE cod_prod = '$idCli'"); 

$array = array();

$row = mysql_fetch_assoc($sql);

$array[] = $row;

echo json_encode($array);



?>