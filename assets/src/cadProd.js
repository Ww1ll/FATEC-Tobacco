function limparElemento(id) {
    document.getElementById(id).innerHTML="";
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

function delProd(id) {
    alert("Deletar "+id);
}

function editProd(id) {
    alert("Editar "+id);
}