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
    // $array[] = $linha;    
    // if ($usuario == "ADMIN") {
    //     echo json_encode($array);
    // }else{        
    //     echo json_encode($array);
    // }
    $json = json_encode($linha);
    $obj = json_decode($json);

    $nome = $obj->nome;    
    $sobrenome = $obj->sobrenome;
    
    $_SESSION['usuario_nome'] = $nome;
    $_SESSION['usuario_sobrenome'] = $sobrenome;

    echo $nome." ".$sobrenome;
}
else{ 
    echo "Não Encontrado";
}


?>