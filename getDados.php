<?php
Include 'conexao.php';

$nome = $_GET['nome'];

if ($nome == "") {
    $sql = "select * from cad_user order by nome";    
}else{
    $sql = "select * from cad_user where nome like '{$nome}%' order by nome";        
}
$result = mysql_query($sql);

$array = array();

while ($row = mysql_fetch_assoc($result)) {
    $array[] = $row;
}

echo json_encode($array);
?>