const getCPF = (event) => {    
    let input = event.target;
    input.value = cpfMask(input.value, input.id);
}

const cpfMask = (v) => {
    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    
    if (v.length >= 14) {        
        if (TestaCPF(v)) {
            
        }else{
            alert("CPF Inválido!");
            v = "";
        }
    }
    return v;
}

function TestaCPF(strCPF) {    
    
    strCPF = strCPF.replace(/[^\d]+/g,"");        
    //Elimina os CPF's conhecidos e verifica o tamanho    
    if (strCPF.length != 11 ||
        strCPF == "00000000000" ||
        strCPF == "11111111111" ||
        strCPF == "22222222222" ||
        strCPF == "33333333333" ||
        strCPF == "44444444444" ||
        strCPF == "55555555555" ||
        strCPF == "66666666666" ||
        strCPF == "77777777777" ||
        strCPF == "88888888888" ||
        strCPF == "99999999999"
        ){
            return false;
        }

        var soma = 0;
        for (var i = 0; i < 9; i++) {
            soma += i;       
        }

        //Verificando o primeiro dígito
        var soma = 0;
        var resto;
        for (var i = 1; i <= 9; i++) 
            soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;
        if ((resto == 10) || (resto == 11))  resto = 0;
        if (resto != parseInt(strCPF.substring(9, 10)) ) return false;
        
        //Verificando o segundo dígito
        soma = 0;
        for (var i = 1; i <= 10; i++) 
            soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        resto = (soma * 10) % 11;
        if ((resto == 10) || (resto == 11))  resto = 0;
        if (resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
}