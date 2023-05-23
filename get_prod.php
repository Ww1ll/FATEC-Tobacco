<?php
include 'conexao.php';

$sql = mysql_query("select * from cad_prod order by id_prod");

$array = array();

while ($row = mysql_fetch_assoc($sql)) {
    $array[] = $row;
}

echo json_encode($array);

?>