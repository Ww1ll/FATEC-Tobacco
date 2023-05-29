<?php

Include 'conexao.php';

session_start();

if (isset($_SESSION['usuario_nome'])) {
    $idprod = $_POST["id_prod"];
    
    $sql = mysql_query("select cod_prod, desc_prod, preco_prod from cad_prod where cod_prod = '$idprod'");
    
    $produto = array();
    
    $produto = mysql_fetch_assoc($sql);

    $json = json_encode($produto);
    $obj = json_decode($json);
    
    $idprod = $obj->cod_prod;
    $descprod = $obj->desc_prod;
    $precoprod = $obj->preco_prod;
    $idquem = $_SESSION['user_id']; 
    
    $sql = mysql_query("select * from cart_user where id_user = '$idquem' and cod_prod = '$idprod'");

    if (mysql_num_rows($sql) > 0) {
        
        $sql = mysql_query("UPDATE cart_user SET qtd_prod = qtd_prod + 1 WHERE id_user = '$idquem' AND cod_prod = '$idprod'");
        echo "Adicionado ao carrinho.";

    }else{

        $addprod = mysql_query("INSERT INTO cart_user (id_user, cod_prod, desc_prod, preco_prod, qtd_prod)
        VALUES ('$idquem', '$idprod', '$descprod', '$precoprod', '1')");
        echo "Adicionado ao carrinho.";
        
    }

    
}else {
    echo "Entre para adicionar itens ao carrinho.";
}

?>