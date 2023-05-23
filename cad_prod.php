<?php

header('Content-Type: text/html; charset=utf-8');

include 'conexao.php';

session_start();

$cod_prod = $_POST['cod_prod'];
$img_prod = $_POST['img_prod'];
$desc_prod = $_POST['desc_prod'];
$preco_prod = $_POST['preco_prod'];

$sql = mysql_query("select * from cad_prod where id_prod = '$cod_prod'");

if (mysql_num_rows($sql) > 0) {
    echo "";
}else{
    $sql = mysql_query("insert into cad_prod 
    (id_prod, img_prod, desc_prod, preco_prod)
    values
    ('$cod_prod','$img_prod','$desc_prod','$preco_prod')");
    
    echo "Cadastrado com sucesso...";
}


?>