<?php

Include 'conexao.php';

$nome = strtoupper($_POST["txt_nome"]);
$sobrenome = strtoupper($_POST["txt_sobrenome"]);
$cpf = $_POST["num_cpf"];
$senha = $_POST["num_senha"];
$nasc = $_POST["txt_nasc"];
$tel = $_POST["num_tel"];
$email = $_POST["txt_email"];

$sql = mysql_query("select * from cad_user where cpf = '$cpf' or email = '$email'");

if($nome == ""){
    echo "<script>
        window.location.href = 'cadastro.html';
        </script>";
}else{

    if (mysql_num_rows($sql) > 0) {
        echo "<script>
            alert('Usuario ja cadastrado!');
            window.location.href = 'cadastro.html';
        </script>";
    }else{
        $sql = mysql_query("insert into cad_user (
            nome,
            sobrenome,
            cpf,
            senha,
            nascto,
            telefone,
            email
            )
            values('$nome', 
            '$sobrenome', 
            '$cpf', 
            '$senha', 
            '$nasc', 
            '$tel', 
            '$email'
            )");

            echo "<script>
            alert('Cadastrado com Sucesso!');
            window.location.href = 'login.html';
            </script>";            
    }
}
?>