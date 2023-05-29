<?php

include 'conexao.php';

session_start();

$prod = $_POST["codProd"];
$user = $_SESSION["user_id"];
$opcao = $_POST["acao"];

$qtd = mysql_query("SELECT qtd_prod FROM cart_user WHERE id_user='$user' AND cod_prod='$prod'");

$cadastro = mysql_fetch_assoc($qtd);

$obj = json_decode(json_encode($cadastro));

if ($opcao == "inc") {
    $sql = mysql_query("UPDATE cart_user SET qtd_prod = qtd_prod + 1 WHERE id_user = '$user' AND cod_prod = '$prod'");
    echo "Adicionado ao carrinho.";    
}else if($opcao == "del"){
    if ($obj->qtd_prod == 1) {
        $sql = mysql_query("DELETE from cart_user WHERE id_user = '$user' AND cod_prod = '$prod'");
        echo "Retirado do carrinho.";        
    }else if ($obj->qtd_prod > 1) {
        $sql = mysql_query("UPDATE cart_user SET qtd_prod = qtd_prod - 1 WHERE id_user = '$user' AND cod_prod = '$prod'");
        echo "Retirado do carrinho.";
    }

}

// if ($obj->qtd_prod > 0) {
// }else if($obj->qtd_prod == 1){
// }


?>