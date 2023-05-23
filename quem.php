<?php
session_start();

if (isset($_SESSION['usuario_nome'])) {
    $nome = $_SESSION['usuario_nome'];
    $sobrenome = $_SESSION['usuario_sobrenome']; 
    $id = $_SESSION['user_id'];       
    echo $nome." ".$sobrenome." ".$id;    
}else{
    return false;
}

?>