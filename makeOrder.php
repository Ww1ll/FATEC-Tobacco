<?php

include 'conexao.php';

$dataAtual = new DateTime('now', new DateTimeZone('America/Sao_Paulo'));

$dia = $dataAtual->format('d');   // Obtém o dia atual
$mes = $dataAtual->format('m');   // Obtém o mês atual
$ano = $dataAtual->format('Y');   // Obtém o ano atual
$hora = $dataAtual->format('H');  // Obtém a hora atual
$minuto = $dataAtual->format('i'); // Obtém o minuto atual
$segundo = $dataAtual->format('s'); // Obtém o segundo atual

$numPed = "10".$ano.$mes.$dia.$hora.$minuto.$segundo;

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

    //echo $idUser." ".$codProd." ".$descProd." ".$precoProd." ".$qtdProd." ".$totalProd."<br>";

    $sql = mysql_query("INSERT INTO tbpedido(ID_ped, cod_prod, qtd_prod, valor_prod) 
                    VALUES ('$numPed', '$codProd', '$qtdProd', '$precoProd')");
}

$sql = mysql_query("DELETE FROM cart_user WHERE id_user = $idCli");

echo "Pedido Enviado!";

?>