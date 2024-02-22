mes.onchange = () => {
    switch(mes.value.toLowerCase()){
        case "janeiro":
            nome.innerHTML = "Rei"
            break;
        case "fevereiro":
            nome.innerHTML = "Mô"
            break;
        case "março":
            nome.innerHTML = "cupido"
            break;
        case "abril":
            nome.innerHTML = "apaixonado"
            break;
        case "maio":
            nome.innerHTML = "pagodeiro"
            break;
        case "junho":
            nome.innerHTML = "cara perfeito"
            break;
        case "julho":
            nome.innerHTML = "mensageiro"
            break;
        case "agosto":
            nome.innerHTML = "perturbado"
            break;
        case "setembro":
            nome.innerHTML = "gueri gueri"
            break;
        case "outubro":
            nome.innerHTML = "coração"
            break;
        case "novembro":
            nome.innerHTML = "linda voz"
            break;
        case "dezembro":
            nome.innerHTML = "criado mudo"
            break;
    }
}


dia.onchange = () => {

    let escolha = dia.value

    if(escolha == 1 || escolha <= 3){
        sobrenome.innerHTML = "que tanto fez ou tanto faz"
    }
    else if(escolha == 4 || escolha <=6){
        sobrenome.innerHTML = "que desabou o barraco"
    }
    else if(escolha == 7 || escolha <=9){
        sobrenome.innerHTML = "que largou o freio"
    }
    else if(escolha == 10 || escolha <=12){
        sobrenome.innerHTML = "que quer futicar"
    }
    else if(escolha == 13 || escolha <=15){
        sobrenome.innerHTML = "que tem fogo na roupa"
    }
    else if(escolha == 16 || escolha <=18){
        sobrenome.innerHTML = "que se apaixonou pela pessoa errada"
    }
    else if(escolha == 19 || escolha <=21){
        sobrenome.innerHTML = "que desliga e vem depressa"
    }
    else if(escolha == 22 || escolha <=24){
        sobrenome.innerHTML = "que está a deriva"
    }
    else if(escolha == 25 || escolha <=27){
        sobrenome.innerHTML = "que segura o samba"
    }
    else {
        sobrenome.innerHTML = "que ninguem ama"
    }
        

}