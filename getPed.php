<?php

include 'conexao.php';

$idPed = $_POST["idPed"];

$query = mysql_query("SELECT tbpedido.*, cad_user.nome, cad_user.sobrenome, cad_prod.desc_prod
FROM tbpedido
JOIN cad_user ON tbpedido.cod_cli = cad_user.id
JOIN cad_prod ON tbpedido.cod_prod = cad_prod.cod_prod
WHERE tbpedido.ID_ped = '$idPed'");

$array = array();

while ($row = mysql_fetch_assoc($query)) {
    $array[] = $row;
}

echo json_encode($array);

?>