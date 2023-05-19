<?php
session_start();

if (isset($_SESSION['usuario_nome'])) {
    $nome = $_SESSION['usuario_nome'];
    $sobrenome = $_SESSION['usuario_sobrenome'];        
    echo $nome." ".$sobrenome;    
}else{
    return false;
}

?>