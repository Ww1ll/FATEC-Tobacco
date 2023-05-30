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

function getMessages() {
    $.ajax({
        url: "getSugest.php",                
        success: function(resposta){
            const resp = JSON.parse(resposta);
            console.log(resp);
            if (resp.length == 0) {
                $('#tbody').html("Sem mensagens");
            }else{
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

function getDadosPed(idPed, idCli){
    alert(idPed + idCli);
}

function getOrder() {
    $.ajax({
        url: "getOrder.php",                
        success: function(resposta){
            const resp = JSON.parse(resposta);
            console.log(resp);
            if (resp.length == 0) {
                $('#tbody').html("Sem mensagens");
            }else{
                for (let index = 0; index < resp.length; index++) {
                    $('#tbody').append(`                
                        <tr class="conteudoClicavel" id="${resp[index].num_ped}" name="${resp[index].cod_cli}" onclick="getDadosPed(this.id, 'teste')">
                            <td>
                                ${resp[index].num_ped}
                            </td>
                            <td>${resp[index].cod_cli}</td>
                            <td>${resp[index].data_ped}</td>
                            <td>R$ ${resp[index].valor_ped}</td>
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
        data: {id: id},
        success: function(data) {            
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
            success: function(resposta) {
                alert(resposta);
                window.location="listar.html";                        
            }
        });
    }
}