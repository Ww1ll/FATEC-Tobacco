function getCart(id){
    $.ajax({
        url: "getCart.php",
        success: function(resposta){

            if (resposta <= 0) {
                alert("Carrinho Vazio!");
                window.location="produtos.html";
                document.getElementById(id).innerHTML="";  
                document.getElementById(id).className = "";
            }else{
                document.getElementById(id).innerHTML=resposta;
                document.getElementById(id).className = "cart-value";
            }
        }
    });
}

function userLogged(event) {            
    $.ajax({
        type: "GET",
        url: "quem.php",
        success: function(resposta){
            if(!resposta){
                
            }else{
                var btnPedido = document.getElementById('btnMakeOrder');
                btnPedido.name = "FERNANDO";
                $("#user").html("Bem vindo "+resposta);
                $('#user').append(`
                <div>
                    <a href="" onclick="sair(event)">Sair</a>
                </div>
                `);
            }
        }
    })
}

function sair(event) {
    
    var sair = confirm("Deseja realmente sair?");
    
    if (sair) {                
        $.ajax({
            type: "POST",
            url: "sair.php?sair=sim",
            success: function(resposta) {
                alert(resposta);
                window.location="index.html";                        
            }
        });
    }
    event.preventDefault();
}

function tiraDoCarrinho(codProd, acao) {
    $.ajax({
        url: `tirarDoCarrinho.php`,
        method: "POST",
        data: {
            codProd: codProd,
            acao: acao
        },
        success: function(resposta){
            alert(resposta);
            var elemento = document.getElementById("corpo");
            elemento.innerHTML="";
            getProd();
            getCart('prod_qtd');
        }
    });
}

function getProd() {
    $('#corpo').innerHTML="";
    $.ajax({
        url: "getCartFinal.php",
        success: function (data) {                   

            const prod = JSON.parse(data);

            var valorSpan = document.getElementById("totalGeralCompra");
            let soma = 0;                    

            for (let index = 0; index < prod.length; index++) {                                                 
                
                let total = prod[index].preco_prod * prod[index].qtd_prod;                          

                soma += total;
                
                const totalReal = total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                });                        

                $('#corpo').append(`
                <tr id="${prod[index].cod_prod}">
                <td class="coluna-capa">
                    <img src="${prod[index].img_prod}" width="200px" height="200px" class="capa">
                </td>                
                <td> 
                    <div class="produto-car">
                        <a href="" class="nome-produto">${prod[index].desc_prod}</a>                                
                    </div>
                    <strong class="estoque">Em estoque</strong>
                    <div>
                        <label class="presente"><input type="checkbox">Presente</label>
                    </div>                            
                </td>
                <td colspan="2"><span class="preco-produto">${"R$ "+ prod[index].preco_prod}</span></td>
                <td>
                    <input type="button" class="delProd" onclick="tiraDoCarrinho('${prod[index].cod_prod}','del')" value="-">
                    &nbsp;
                    <label>${prod[index].qtd_prod}</label>
                    &nbsp;
                    <input type="button" class="addProd" onclick="tiraDoCarrinho('${prod[index].cod_prod}','inc')" value="+">
                </td>
                <td colspan="2"><span>${totalReal}</span></td>

            </tr>
                `);
            }
            
            valorSpan.innerHTML = "R$ " + soma;
        }
    });
    //$('#totalDaCompra').value              

}

function cleanCart() {            
    $.ajax({
        url: "cleanCart.php",
        success: function(resposta){                    
            getCart();
        }
    });    
}

function makeOrder(){
    $.ajax({
        url: "makeOrder.php",                
        success: function(resposta){
            const order = JSON.parse(resposta);
            console.log(order);
        }                
    });
}