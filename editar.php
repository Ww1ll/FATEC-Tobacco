<?php 

Include 'conexao.php';
    

if (isset($_GET['editar'])) {
    $query = mysql_query("select * from cad_user where id=".$_GET['editar']);
    $linha = mysql_fetch_assoc($query);
}else{
    ?>
    <script>
        window.location="listar.html";
    </script>
    <?php
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>EDITAR REGISTROS</title>
    <script src="assets/src/cpfFunc.js"></script>
    <script src="assets/src/phoneFunc.js"></script>
    <script>
        function voltar() {
            window.location="listar.html"
        }
    </script>
    <link rel="stylesheet" href="assets/css/cadastro.css">
    <link rel="shortcut icon" href="imagens/favicon.ico" type="image/x-icon">

</head>
<body>
    <form action="atualizar.php" class="form" method="post">
        <a href="home.html"><img src="imagens/tobacoII.png" width="70px" class="logo-form"></a>
        <center><div class="title">Cadastre-se</div></center>

        <input type="hidden" name="txt_id" value="<?php echo  $linha["id"] ?>">
      <!-- CAMPO EMAIL -->
        <div class="input-div div1">
          <input  name="txt_email" id="email" class="input" type="text" value="<?php echo  $linha["email"] ?>"  required/>
          <div class="efeito"></div>
          <label for="email" class="placeholder">Email</label>
        </div>

        <!-- CAMPO NOME -->
        <div class="input-div div2">
          <input  name="txt_nome" id="nome" class="input" type="text" value="<?php echo  $linha["nome"] ?>" />
          <div class="efeito"></div>
          <label for="nome" class="placeholder">Nome</label>
        </div>

        <!-- CAMPO SOBRENOME -->
        <div class="input-div div2">
          <input name="txt_sobrenome" id="sobrenome" class="input" type="text" value="<?php echo  $linha["sobrenome"] ?>" />
          <div class="efeito"></div>
          <label for="sobrenome" class="placeholder">Sobrenome</label>
        </div>

        <!-- CAMPO CPF -->
        <div class="input-div div2">
          <input name="num_cpf" id="cpf" class="input" type="text" maxlength="14" onkeyup="getCPF(event)" value="<?php echo  $linha["cpf"] ?>" />
          <div class="efeito"></div>
          <label for="cpf" class="placeholder">CPF</label>
        </div>

        <!-- CAMPO SENHA -->
        <div class="input-div div2">
          <input name="num_senha" id="senha" class="input" type="text" value="<?php echo  $linha["senha"] ?>" />
          <div class="efeito"></div>
          <label for="senha" class="placeholder">Senha</label>
        </div>

        <!-- CAMPO NASCIMENTO -->
        <div class="input-div div2">
          <input id="nasc" name="txt_nasc" class="input" type="date" value="<?php echo  $linha["nascto"] ?>" />
          <div class="efeito"></div>
          <label for="nasc" class="placeholder">Nascimento</label>
        </div>

        <!-- CAMPO TELEFONE -->
        <div class="input-div div2">
          <input id="tel" class="input" name="num_tel" type="tel" inputmode="numeric" maxlength="15" onkeyup="handlePhone(event)" value="<?php echo  $linha["telefone"] ?>" />
          <!--<input id="tel" class="input" name="num_tel" type="number" pattern="[0-9\s]{13,19}" maxlength="11" placeholder=" " />-->
          <div class="efeito"></div>
          <label for="tel" class="placeholder">Telefone</label>
        </div>
        <!-- onclick vazio por enquanto, pode inserir de acordo com o arquivo que vc criar -->
        <button type="submit" class="btn-cadastrar" name="btn-cadastrar">ATUALIZAR</button>        
        <input type="button" class="btn-cadastrar" name="btn-cadastrar" onclick="voltar()" value="CANCELAR">
        &nbsp;
        &nbsp;
    </form>

    
    
</body>
</html>


