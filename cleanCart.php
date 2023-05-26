<?php

include 'conexao.php';

session_start();

$user = $_SESSION["user_id"];

$sql = mysql_query("DELETE FROM cart_user WHERE id_user = $user");

echo "Carrinho limpo.";
?>