<?php

include 'conexao.php';

$id = $_POST['id'];

$sql = mysql_query("DELETE FROM cad_prod where cod_prod = '$id'");

echo "Excluido com sucesso.";

?>