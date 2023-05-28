function apagar(id) {
    var confirma = confirm("Deseja continuar com a exclusão?");

    if (confirma) {
        $.ajax({
            url: "apagar.php",
            type: "POST",
            data: {
                id: `${id}`
            },
            success: function (resposta) {
                alert(resposta);
                refresh("");
            }
        });                
    }
}

function getUser() {
    $.ajax({
        type: "GET",
        url: "quem.php",
        success: function(resposta){ 
            if (!resposta) {
                window.location = "login.html"
            }else{
                $("#user_log").html("Usuário logado: "+resposta);
            }                   
        }
    });
}

function refresh(nome) {
    var div = document.getElementById("corpo-pesquisa");
    $("#divCabecalho").html("");
    buscaDados(nome);            
}

function pesquisar(nome) {
    var valor = document.getElementById(nome);
    refresh(valor.value);
}

function buscaDados(nome) {
    $.ajax({
        url: `getDados.php?nome=${nome}`,
        type: "GET",
        success: function (resposta) {
            const usuario = JSON.parse(resposta);
            var tamanho = usuario.length;

            $("#divCabecalho").append(`
            <table id="tabela">                                     
                <tr id="topo">
                    <td>ID</td>
                    <td>NOME</td>
                    <td>SOBRENOME</td>
                    <td>CPF</td>
                    <td>SENHA</td>
                    <td>NASCTO</td>
                    <td>TELEFONE</td>
                    <td>E-MAIL</td>
                    <td>AÇÃO</td>
                </tr>
                <tr id="linha"></tr>                                                
            </table>
            `);

            if (tamanho == 0) {
                $("#divCabecalho").append(`
                <center><h2>SEM REGISTROS ENCONTRADOS</h2></center>
                `);
            }

            for (let index = 0; index < tamanho; index++) {
                if (usuario[index].nome == "ADMIN") {
                    $("#tabela").append(`
                    <tr>
                    <td>${usuario[index].id}</td>
                    <td>${usuario[index].nome}</td>
                    <td>${usuario[index].sobrenome}</td>
                    <td>${usuario[index].cpf}</td>
                    <td>${usuario[index].senha}</td>
                    <td>${usuario[index].nascto}</td>
                    <td>${usuario[index].telefone}</td>
                    <td>${usuario[index].email}</td>
                    <td id="testetd">
                        <div class="acao">
                            <button value="${usuario[index].id}" name="btnApagar" id="btnApagar" class="btn sair" onclick="apagar(this.value)" disabled>APAGAR</button>
                            <button value="${usuario[index].id}" name="btnEditar" id="btnEditar" class="btn voltar">EDITAR</button>
                        </div>                                
                    </td>                            
                    </tr>
                    `);
                } else {
                    $("#tabela").append(`
                    <tr>
                    <td>${usuario[index].id}</td>
                    <td>${usuario[index].nome}</td>
                    <td>${usuario[index].sobrenome}</td>
                    <td>${usuario[index].cpf}</td>
                    <td>${usuario[index].senha}</td>
                    <td>${usuario[index].nascto}</td>
                    <td>${usuario[index].telefone}</td>
                    <td>${usuario[index].email}</td>
                    <td>
                        <div class="acao">
                            <button value="${usuario[index].id}" name="btnApagar" id="btnApagar" class="btn sair" onclick="apagar(this.value)">APAGAR</button>
                            <button value="${usuario[index].id}" name="btnEditar" id="btnEditar" class="btn voltar" onclick="editar(this.value)">EDITAR</button>
                        </div>
                    </td>
                    </tr>
                    `);
                }

            }
        }
    })
}

function editar(id) {            
    window.location.href = `editar.php?editar=${id}`;
}