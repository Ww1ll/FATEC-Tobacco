function getProd() {
    $.ajax({
        url: "get_prod.php",
        success: function (data) {
            
            const prod = JSON.parse(data);            
            
            for (let index = 0; index < prod.length; index++) {                        
                $('#superior').append(`
                <card-product image="${prod[index].img_prod}"
                    photo="${prod[index].capa_prod}" title="${prod[index].desc_prod}" price="R$ ${prod[index].preco_prod}"
                    id="${prod[index].cod_prod}"
                    onclick="addCart(this.id)">
                </card-product>
                `);
            }                    
        }
    });
}

function userLogged() {
    $.ajax({
        type: "GET",
        url: "quem.php",
        success: function(resposta){
            if(!resposta){
                $("#user").html("Faça Login ou <a href='cadastro.html'>cadastre-se.</a>");
                $('#cartVerify').html("");
            }else{
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

function addCart(id) {            
    $.ajax({
        type: "POST",
        url: `addCart.php`,
        data: {
            id_prod: `${id}`
        },
        success: function(resposta){
            alert(resposta);
            getCart("prod_qtd");                    
        }
    })            
}

function getCart(id){
    $.ajax({
        url: "getCart.php",
        success: function(resposta){

            if (resposta <= 0) {
                document.getElementById(id).innerHTML="";  
                document.getElementById(id).className = "";
            }else{
                document.getElementById(id).innerHTML=resposta;
                document.getElementById(id).className = "cart-value";
            }
        }
    });
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