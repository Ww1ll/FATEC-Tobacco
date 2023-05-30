<?php

include 'conexao.php';

$idPed = $_POST["idPed"];

$query = mysql_query("SELECT * FROM tbpedido WHERE ID_ped = '$idPed'");

$array = array();

while ($row = mysql_fetch_assoc($query)) {
    $array[] = $row;
}

echo json_encode($array);

?>