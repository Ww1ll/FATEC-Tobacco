<?php

session_start();

if (isset($_SESSION['usuario_nome'])) {
    session_destroy();
    echo "Deslogado com Sucesso!";
}
?>