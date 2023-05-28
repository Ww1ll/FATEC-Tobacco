<?php

header('Content-Type: text/html; charset=utf-8');

include 'conexao.php';

session_start();

$cod_prod = $_POST['cod_prod'];
$img_prod = $_POST['img_prod'];
$capa_prod = $_POST['capa_prod'];
$desc_prod = $_POST['desc_prod'];
$preco_prod = $_POST['preco_prod'];
$acao = $_POST['acao'];
$id_adm = $_SESSION['user_id'];

if($acao == "salvar"){
    $sql = mysql_query("select * from cad_prod where cod_prod = '$cod_prod'");
    
    if (mysql_num_rows($sql) > 0) {
        echo "Produto já cadastrado";
    }else{
        $sql = mysql_query("insert into cad_prod 
        (cod_prod, img_prod, capa_prod, desc_prod, preco_prod, id_resp)
        values
        ('$cod_prod','$img_prod','$capa_prod','$desc_prod','$preco_prod','$id_adm')");
        
        echo "Cadastrado com sucesso...";
    }
}elseif ($acao == 'atualizar') {
    $sql = mysql_query("UPDATE cad_prod
    SET 
    img_prod='$img_prod', 
    capa_prod='$capa_prod', 
    desc_prod='$desc_prod', 
    preco_prod='$preco_prod',  
    id_resp='$id_adm'
    WHERE cod_prod='$cod_prod'
    ");    
    
    echo "Atualizado com sucesso...";
}



?>