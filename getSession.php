<?php

include 'conexao.php';

session_start();

$idCli = $_SESSION["user_id"];

echo $idCli;

?>