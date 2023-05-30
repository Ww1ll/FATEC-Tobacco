function userLogged() {
    $.ajax({
        type: "GET",
        url: "quem.php",
        success: function(resposta){
            if(resposta){
                $("#user").html(`<div class='loger'>${resposta}</div>`);
                $('#user').append(`
                <div>
                    <a href="" onclick="sair(event)">Sair</a>
                </div>
                `);
            }else{
                $("#user").html("<div class='loger'>Faça Login ou </div><a href='cadastro.html'>cadastre-se.</a>");
            }            
            $('#cartVerify').html("");
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

function getProd() {
    $.ajax({
        url: "get_prod.php",
        success: function (data) {
            const prod = JSON.parse(data);
            console.log(prod); 
            
            for (let index = 0; index < prod.length; index++) {                        
                $('#products_top').append(`
                <card-product image="${prod[index].img_prod}"
                    photo="${prod[index].capa_prod}" title="${prod[index].desc_prod}" price="R$ ${prod[index].preco_prod}"
                    id="${prod[index].cod_prod}"
                    onclick="addCart(this.id)"                    
                    >
                </card-product>
                `);
            }                    
        }
    });

    $.ajax({
        url: "get_prod.php",
        success: function (data) {
            const prod = JSON.parse(data);
            console.log(prod); 
            
            for (let index = 0; index < 2; index++) {                        
                $('#products_mid').append(`
                <card-product image="${prod[index].img_prod}"
                    photo="${prod[index].capa_prod}" title="${prod[index].desc_prod}" price="R$ ${prod[index].preco_prod}"
                    id="${prod[index].cod_prod}"
                    onclick="addCart(this.id), getCart('prod_qtd')">
                </card-product>
                `);
            }                    
        }
    });

    $.ajax({
        url: "get_prod.php",
        success: function (data) {
            const prod = JSON.parse(data);
            console.log(prod); 
            
            for (let index = 0; index < prod.length; index++) {                        
                $('#products_down').append(`
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