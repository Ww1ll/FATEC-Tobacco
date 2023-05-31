function getUser() {
    $.ajax({
        type: "GET",
        url: "quem.php",
        success: function (resposta) {
            if (!resposta) {
                window.location = "login.html"
            } else {
                $("#user_log").html("Usuário logado: " + resposta);
            }
        }
    });
}

function getMessages() {
    $.ajax({
        url: "getSugest.php",
        success: function (resposta) {
            const resp = JSON.parse(resposta);
            console.log(resp);
            if (resp.length == 0) {
                $('#tbody').html("Sem mensagens");
            } else {
                for (let index = 0; index < resp.length; index++) {
                    $('#tbody').append(`                
                        <tr>
                            <td id="data">
                                ${resp[index].data}
                            </td>
                            <td>${resp[index].nome}</td>
                            <td>${resp[index].email}</td>
                            <td id="acaoLer">
                            <div>
                                <input type="button" class="btnLer" name="btnLer" id="${resp[index].id}" onclick="ler(this.id, 'txtMsg')" value="Ler">
                            </div>
                            </td>                            
                        </tr>
                    `);
                }
            }
        }
    });
}

function getDadosPed(id) {    
    $.ajax({
        type: "POST",
        url: `getPed.php`,
        data: {
            idPed: `${id}`,
        },
        success: function (resposta) {
            const pedido = JSON.parse(resposta);
            
            console.log(pedido);
            
            var soma = 0;

            $("#orderContent").html(``);
            $("#orderContent").html(`
                <div class="headerOrder" id="headerOrder">
                    <center>Resumo de Pedido</center>
                    <table id="dadosCliente">
                        <tr>
                        <td>Número do Pedido:</td>
                        <td>${id}</td>
                        </tr>
                        <tr>
                            <td>
                                Cód. do cliente:
                            </td>                        
                            <td id="codCli"></td>
                        </tr>
                        <tr>
                            <td>
                                Nome do Cliente:
                            </td>
                            <td id="nomeCli"></td>
                        </tr>
                        <hr>
                        <tr>
                        </tr>
                    </table>
                    <hr>
                </div>
                <div>
                    <table id="bodyOrder"></table>
                    <hr>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>Valor total do pedido:</td>
                            <td id="valorPed"></td>
                        </tr>
                    </table>
                    <hr>
                </div>
            </div>
            `);

            $("#codCli").html(`${pedido[0].cod_cli}`);
            $("#nomeCli").append(`${pedido[0].nome+" "+pedido[0].sobrenome}`);
            $("#bodyOrder").html(`
            <tr>
                <td>Cód. Prod</td>
                <td>Desc. Prod</td>
                <td>Valor. Uni.</td>
                <td>Qtde.</td>
                <td>Total Unit.</td>
            </tr>`);

            for (let i = 0; i < pedido.length; i++) {
                soma += ((pedido[i].qtd_prod) * (pedido[i].valor_prod));
                $("#bodyOrder").append(`                
                <tr>
                    <td>${pedido[i].cod_prod}</td>
                    <td>${pedido[i].desc_prod}</td>
                    <td>R$ ${pedido[i].valor_prod}</td>
                    <td>${pedido[i].qtd_prod}</td>
                    <td>R$ ${(pedido[i].qtd_prod) * (pedido[i].valor_prod)}</td>
                </tr>           
                `);
            }
            $("#valorPed").html(`R$ ${soma}`);
        }
    });
}

function getOrder() {
    $.ajax({
        url: "getOrder.php",
        success: function (resposta) {
            const resp = JSON.parse(resposta);
            console.log(resp);
            if (resp.length == 0) {
                $('#tbody').html("SEM PEDIDOS.");
            } else {
                for (let index = 0; index < resp.length; index++) {
                    $('#tbody').append(`                
                        <tr class="conteudoClicavel">
                            <td>
                                ${resp[index].num_ped}
                            </td>
                            <td>${resp[index].cod_cli}</td>
                            <td>${resp[index].data_ped}</td>
                            <td>R$ ${resp[index].valor_ped}</td>
                            <td>
                                <input type="button" class="btnLer" name="btnLer" 
                                id="${resp[index].num_ped}" onclick="getDadosPed(this.id)" value="Ler">
                            </td>
                        </tr>
                    `);
                }
            }
        }
    });
}

function ler(id, element) {
    $.ajax({
        url: "getMsg.php",
        type: "POST",
        data: { id: id },
        success: function (data) {
            const dados = JSON.parse(data);
            document.getElementById(element).value = dados.assunto;
        }
    })
}

function sair() {
    var sair = confirm("Deseja realmente sair?");

    if (sair) {
        $.ajax({
            type: "POST",
            url: "sair.php?sair=sim",
            success: function (resposta) {
                alert(resposta);
                window.location = "listar.html";
            }
        });
    }
}