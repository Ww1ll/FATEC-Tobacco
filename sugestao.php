<?php

Include 'conexao.php';

$nome = $_POST["sug_nome"];
$email = $_POST["sug_email"];
$assunto = $_POST["sug_assunto"];

$query = mysql_query("insert into tb_sugest (nome, email, assunto, lido)
 values ('$nome', '$email', '$assunto', 'n')");
 
?>