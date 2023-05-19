<?php

Include 'conexao.php';

$id = $_POST["id"];

$sql = mysql_query("delete from cad_user where id = '$id'");
echo "Dados apagados com sucesso";

?>