<?php

Include 'conexao.php';

if(isset($_POST['pesq_nome']) !=''){
    $query = mysql_query("select * from cad_user where nome like '{$_POST['pesq_nome']}%' order by nome asc");    
    
}else{
    $query = mysql_query("select * from cad_user order by nome asc");    
}

if (isset($_GET['apagar'])){
    $sql = mysql_query("delete from cad_user where id =".$_GET['apagar']);
    ?>
    <script>
        alert("APAGADO COM SUCESSO!");
        window.location="listar.php";
    </script>
    <?php
}else{
    $sql = mysql_query("select * from cad_user order by nome asc");
}

$linha = mysql_fetch_assoc($query);
$total = mysql_num_rows($query);
   
?>
<html>
    <head>
        <title>DADOS CADASTRADOS</title>
        <link rel="stylesheet" href="lista.css">        

        <script>

        </script>
    </head>
    <body>        

        <div class="tabela">
            <?php 
            
            if ($total == 0) {
                ?>                

                <div class="container">
                    <div class="pesq item">            
                        <form action="listar.php" method="post">
                            <input type="text" id="text_pesq" name="pesq_nome" value="" size="60" placeholder="Digite um nome a ser pesquisado">
                            <input type="submit" class="btn-edit" value="PESQUISAR">
                        </form>
                    </div>             
                    <div class="item">
                        <a href="painel.html"><img src="imagens/voltar.png"></a>
                    </div>
                </div>

                <hr>
                <script>
                    alert("Nenhum resgistro encontrado.");
                </script>
                
                <?php
            }else{

            ?>

            <div class="container">
                <div class="pesq item">            
                    <form action="listar.php" method="post">
                        <input type="text" id="text_pesq" name="pesq_nome" value="" size="60" placeholder="Digite um nome a ser pesquisado">
                        <input type="submit" class="btn-edit" value="PESQUISAR">
                    </form>
                </div>             
                <div class="item">
                    <a href="painel.html"><img src="imagens/voltar.png"></a>
                </div>
            </div>
            
            
            <div>
                <table>
                    <tr class="topo">
                        <th>ID USUARIO</th>
                        <th>NOME</th>
                        <th>SOBRENOME</th>
                        <th>TELEFONE</th>
                        <th>EMAIL</th>
                        <th>DATA DE NASCTO</th>
                        <th>CPF</th>
                        <th>SENHA</th>        
                        <th>ACAO</th>
                    </tr>            
                    
                    <?php do {?>
                        <tr>                        
                            <td><?php echo $linha["id"];?></td>
                            <td><?php echo $linha["nome"];?></td>
                            <td><?php echo $linha["sobrenome"];?></td>
                            <td><?php echo $linha["telefone"];?></td>                        
                            <td><?php echo $linha["email"];?></td>
                            <td><input type="date" class="date" name="" id="" value="<?php echo $linha["nascto"];?>" disabled></td>
                            <td><?php echo $linha["cpf"];?></td>
                            <td><?php echo $linha["senha"];?></td>                                                             
                            <td>
                                <a href="listar.php?apagar='<?php echo $linha['id']?>'"><button class="btn-del">APAGAR</button></a>                                
                                <a href="editar.php?editar='<?php echo $linha['id']?>'"><button class="btn-edit">EDITAR</button></a>                              
                            </td>
                        </tr>
                    <?php
                        
                    } while ($linha = mysql_fetch_assoc($query));                

                    }?>
                </table>
            </div>
                    
    </div>       
    </body>
</html>