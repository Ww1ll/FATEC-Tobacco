<?php

Include 'conexao.php';

session_start();

if (isset($_SESSION['usuario_nome'])) {
    $iduser = $_SESSION['usuario_nome'];
    $idUser = $_SESSION['user_id'];
    $sql = mysql_query("SELECT cart_user.*, cad_prod.img_prod FROM cart_user 
    JOIN cad_prod ON cart_user.cod_prod = cad_prod.cod_prod 
    WHERE cart_user.id_user = $idUser");

    $array = array();
    
    while ($row = mysql_fetch_assoc($sql)) {
        $array[] = $row;
    }
    
    echo json_encode($array);   

}else{
    echo "";
}

?>