<?php

include 'conexao.php';

$id = $_POST["id"];

$sql = mysql_query("SELECT assunto FROM tb_sugest WHERE id='$id'");

$row = mysql_fetch_assoc($sql);

echo json_encode($row);

?>