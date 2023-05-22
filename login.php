<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>


<?php

Include 'conexao.php';

session_start();

$usuario = $_POST['txt_email'];
$senha = $_POST['num_senha'];
$array = array();

$sql = mysql_query("select * from cad_user where email = '$usuario' and senha = '$senha'");

if (mysql_num_rows($sql) == 1){
    $sql = mysql_query("select nome, sobrenome from cad_user where email = '$usuario'");
    $linha = mysql_fetch_assoc($sql);      
    $json = json_encode($linha);
    $obj = json_decode($json);

    $nome = $obj->nome;    
    $sobrenome = $obj->sobrenome;
    
    $_SESSION['usuario_nome'] = $nome;
    $_SESSION['usuario_sobrenome'] = $sobrenome;
    
    if ($nome == "admin" || $nome == "ADMIN") {
        echo "<script>
        alert('Bem vindo $nome');
        window.location = 'painel.html';
        </script>";
    }else{
        echo "<script>
            alert('Bem vindo $nome');
            window.location = 'index.html';
            </script>";
    }

    
}
else{ 
    echo "<script>
        alert('Usuário não encontrado!');
        window.location = 'login.html';
        </script>";
    
}


?>