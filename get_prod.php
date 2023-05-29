<?php
include 'conexao.php';

session_start();

$sql = mysql_query("select * from cad_prod order by cod_prod");

$array = array();

while ($row = mysql_fetch_assoc($sql)) {
    $array[] = $row;
}

echo json_encode($array);


?>