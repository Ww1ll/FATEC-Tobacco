<?php

try {        
    Include 'conexao.php';

    $sql = "select * from cad_user order by nome";
    $result = mysql_query($sql);
    
    $array = array();
    
    while ($row = mysql_fetch_assoc($result)) {
        $array[] = $row;
    }

    echo json_encode($array);

    
    // do {
    //     echo json_encode($row = mysql_fetch_assoc($result));
    //     # code...
    // } while ($row = mysql_fetch_assoc($result));    
    
    
} catch (\Exception $e) {
    echo "erro 1";
}



?>