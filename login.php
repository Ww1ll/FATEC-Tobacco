<?php

Include 'conexao.php';

$usuario = $_POST['txt_email'];
$senha = $_POST['num_senha'];

$sql = mysql_query("select * from cad_user where (email = '$usuario' or cpf = '$usuario') and senha = '$senha'");

if (mysql_num_rows($sql) == 1){
    $linha = mysql_fetch_assoc($sql);  
    if ($usuario == "admin") {
        echo "<script>alert('Bem vindo Administrador!');
        window.location = 'painel.html';</script>";    
    }else{
        echo "<script>alert('Bem vindo .$usuario!');
        window.location = 'index.html';</script>";
    }
}
else{ 
    echo "<script>alert('Usuario ou senha incorretos!');
        window.location = 'login.html';</script>";
}


?>