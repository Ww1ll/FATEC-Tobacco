<?php

include 'conexao.php';

$sql = mysql_query("SELECT * FROM tb_order");

$array = array();

while ($row = mysql_fetch_assoc($sql)) {
    $array[] = $row;
}

echo json_encode($array);

?>