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