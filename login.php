<?php

Include 'conexao.php';

$usuario = $_POST['txt_email'];
$senha = $_POST['num_senha'];
$array = array();

$sql = mysql_query("select * from cad_user where email = '$usuario' and senha = '$senha'");

if (mysql_num_rows($sql) == 1){
    $sql = mysql_query("select nome, sobrenome from cad_user where email = '$usuario'");
    $linha = mysql_fetch_assoc($sql);  
    $array[] = $linha;
    if ($usuario == "ADMIN") {
        echo json_encode($array);
    }else{        
        echo json_encode($array);
    }
}
else{ 
    echo "Não Encontrado";
}


?>