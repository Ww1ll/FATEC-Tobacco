<?php

Include 'conexao.php';

session_start();

if (isset($_SESSION['usuario_nome'])) {

    $idUser = $_SESSION['user_id'];
    $sql = mysql_query("select * from cart_user where id_user = '$idUser'");
    echo mysql_num_rows($sql);

}else{
    echo "";
}

?>