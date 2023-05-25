<?php

header('Content-Type: text/html; charset=utf-8');

include 'conexao.php';

session_start();

$cod_prod = $_POST['cod_prod'];
$img_prod = $_POST['img_prod'];
$capa_prod = $_POST['capa_prod'];
$desc_prod = $_POST['desc_prod'];
$preco_prod = $_POST['preco_prod'];
$id_adm = $_SESSION['user_id'];

$sql = mysql_query("select * from cad_prod where id_prod = '$cod_prod'");

if (mysql_num_rows($sql) > 0) {
    echo "";
}else{
    $sql = mysql_query("insert into cad_prod 
    (id_prod, img_prod, capa_prod, desc_prod, preco_prod, id_resp)
    values
    ('$cod_prod','$img_prod','$capa_prod','$desc_prod','$preco_prod','$id_adm')");
    
    echo "Cadastrado com sucesso...";
}


?>