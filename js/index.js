mes.onchange = () => {
    switch(mes.valeu.toLowerCaser()){
        case "janeiro":
            nome.innerHTML = "Rei"
            break;
        case "fevereiro":
            nome.innerHTML = "Mô"
            break;
    }
}