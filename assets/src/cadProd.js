function limparElemento(id) {
    document.getElementById(id).innerHTML = "";
}

function getProd() {
    limparElemento("produtos");
    $.ajax({
        url: "get_prod.php",
        success: function (data) {

            const prod = JSON.parse(data);

            for (let index = 0; index < prod.length; index++) {
                var valor = prod[index].preco_prod;

                $('#produtos').append(`
                <tr>
                    <th>${prod[index].cod_prod}</th>
                    <th><img src="${prod[index].img_prod}" alt=""></th>
                    <th><img src="${prod[index].capa_prod}" alt=""></th>
                    <th>${prod[index].desc_prod}</th>
                    <th>${prod[index].preco_prod}</th>
                    <th>${prod[index].data_cad}</th>
                    <th>${prod[index].id_resp}</th>
                    <th>
                        <button class="btnDel" id="${prod[index].cod_prod}" onclick="delProd(this.id)">Deletar</button>
                        <button class="btnEdit" id="${prod[index].cod_prod}" onclick="editProd(this.id)">Editar</button>
                    </th>
                </tr> 
                `);
            }

        }
    });
}

function cadProd(e) {
    e.preventDefault();
    var dados = $(e.target).serialize();
    $.ajax({
        url: "cad_prod.php",
        type: "POST",
        data: dados,
        success: function (data) {
            if (data == "") {
                alert('Produto Já Cadastrado!');
            } else {
                alert(data);
                $('#cad-prod')[0].reset();
                document.getElementById("acao").value = "salvar";
                document.getElementById("btnEnviar").value = "Enviar";
                document.getElementById("btnLimpar").value = "Limpar";
                getProd();
            }
        }
    });
}

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

function delProd(id) {

    var confirmar = confirm("Deseja continuar com a exclusão?");

    if (confirmar){
        $.ajax({
            url: "delProd.php",
            method: "POST",
            data: {id: id},
            success: function (resposta) {
                alert(resposta);
                getProd();
            }
        });
    }
}

function editProd(id) {
    $.ajax({
        method: "POST",
        url: `editProd.php`,
        data: {
            idCli: `${id}`
        },
        success: function (resposta) {
            const dado = JSON.parse(resposta);
            console.log(dado);

            document.getElementById("cod_prod").value = dado[0].cod_prod;
            document.getElementById("cod_prod").readOnly = true;
            document.getElementById("preco_prod").value = dado[0].preco_prod;
            document.getElementById("img_prod").value = dado[0].img_prod;
            document.getElementById("capa_prod").value = dado[0].capa_prod;
            document.getElementById("desc_prod").value = dado[0].desc_prod;
            document.getElementById("preco_prod").value = dado[0].preco_prod;
            document.getElementById("acao").value = "atualizar";
            document.getElementById("btnEnviar").value = "Atualizar";
            document.getElementById("btnLimpar").value = "Cancelar";
        }
    });
}

function cancelUpdate() {
    document.getElementById("cod_prod").readOnly = false;
    document.getElementById("btnLimpar").value = "Limpar";
    document.getElementById("btnEnviar").value = "Salvar";
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