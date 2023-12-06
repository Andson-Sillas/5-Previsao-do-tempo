
let chave = "cebcd482eda57fa9a6714c1c2ba91885"


function colocaNaTela(dados){
    let cidade = document.querySelector(".cidade").innerHTML ="Tempo em " + dados.name
    let tempo = document.querySelector(".temp").innerHTML = + Math.floor(dados.main.temp) + " ºC "
    let descricao = document.querySelector(".descricao").innerHTML = dados.weather[0].description
    let nuvem = document.querySelector(".cloud").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    let umidade = document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.   humidity + " %"
}


async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
        .then(responsta => responsta.json())
    
    colocaNaTela(dados)
}


function cliqueinoBotao() {
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}




