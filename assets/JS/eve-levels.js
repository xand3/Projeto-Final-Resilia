function responderFase1() {
    let resposta;
    while (resposta != 1 && resposta != 2) {
        resposta = prompt(
            `Qual sua decisão ?\nResponda 1 para SIM e 2 para NÃO`)
    if(resposta == 1) {
        return location = "../HTML/eve-level2.html"
    }
    else if(resposta == 2) {
        return location = "../HTML/game-over.html"
    }
    else {
        prompt(`Resposta incorreta`)
    }
    }
}
function responderFase2() {
    let resposta;
    while (resposta != 1 && resposta != 2) {
        resposta = prompt(
            `Qual sua decisão ?\nResponda 1 para SIM e 2 para NÃO`)
    if(resposta == 1) {
        return location = "../HTML/eve-level3.html"
    }
    else if(resposta == 2) {
        return location = "../HTML/game-over.html"
    }
    else {
        prompt(`Resposta incorreta`)
    }
    }
}
function responderFase3() {
    let resposta;
    while (resposta != 1 && resposta != 2) {
        resposta = prompt(
            `Qual sua decisão ?\nResponda 1 para SIM e 2 para NÃO`)
    if(resposta == 1) {
        return location = "../HTML/eve-happyEnd.html"
    }
    else if(resposta == 2) {
        return location = "../HTML/game-over.html"
    }
    else {
        prompt(`Resposta incorreta`)
    }
    }
}