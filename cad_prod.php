<?php
include 'conexao.php';

session_start();

$cod_prod = $_POST['cod_prod'];
$img_prod = $_POST['img_prod'];
$desc_prod = $_POST['desc_prod'];
$preco_prod = $_POST['preco_prod'];

echo $_SESSION['user_id'];

?>