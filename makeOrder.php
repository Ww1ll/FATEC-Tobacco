<?php

include 'conexao.php';

session_start();

$idCli = $_SESSION["user_id"];

$ped = mysql_query("SELECT * FROM cart_user where id_user = '$idCli'");

$arrayPed = array();

while ($row = mysql_fetch_assoc($ped)) {
    $arrayPed[] = $row;
}

$object = json_encode($arrayPed);

$obj = json_decode($object);



for ($i=0; $i < count($obj); $i++) { 
    $idUser = $obj[$i]->id_user;
    $codProd = $obj[$i]->cod_prod;
    $descProd = $obj[$i]->desc_prod;
    $precoProd = $obj[$i]->preco_prod;
    $qtdProd = $obj[$i]->qtd_prod;
    $totalProd = $qtdProd * $precoProd;

    echo $idUser." ".$codProd." ".$descProd." ".$precoProd." ".$qtdProd." ".$totalProd."<br>";
}

?>