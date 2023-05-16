<?php 

Include 'conexao.php';

$id = $_POST["txt_id"];
$email = $_POST["txt_email"];
$nome = $_POST["txt_nome"];
$sobrenome = $_POST["txt_sobrenome"];
$cpf = $_POST["num_cpf"];
$senha = $_POST["num_senha"];
$nasc = $_POST["txt_nasc"];
$tel = $_POST["num_tel"];

$sql = mysql_query("update cad_user set
                    nome='$nome',
                    sobrenome='$sobrenome',
                    cpf='$cpf',
                    senha='$senha',
                    nascto='$nasc',
                    telefone='$tel',
                    email='$email'
                    where
                    id='$id'
                    ");

?>
<script>
    alert("REGISTRO ATUALIZADO COM SUCESSO!");
    window.location="listar.php";
</script>