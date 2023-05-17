<?php

Include 'conexao.php';

$id = $_POST["id"];

if ($id == "") {
    echo "<script>alert("$id")</script>";
    echo "Sem permissões de acesso!";
}else{
    $sql = mysql_query("delete from cad_user where id = '$id'");
    echo "Feito";
}

?>