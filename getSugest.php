<?php

include 'conexao.php';

$sql = mysql_query("SELECT * FROM tb_sugest");

$arraySugest = array();

while ($row = mysql_fetch_assoc($sql)) {
    $arraySugest[] = $row;
}

echo json_encode($arraySugest);


?>