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