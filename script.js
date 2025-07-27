function colocaNaTela(dados, cidade) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + cidade;
    document.querySelector(".temp").innerHTML = dados.current_condition[0].temp_C + " ºC";
    document.querySelector(".descricao").innerHTML = dados.current_condition[0].weatherDesc[0].value;
    document.querySelector(".cloud").src = dados.current_condition[0].weatherIconUrl[0].value;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.current_condition[0].humidity + " %";


    //tradução da descrição para português BR
    let descOriginal = dados.current_condition[0].weatherDesc[0].value;
    let descTraduzida = traduzirDescricao(descOriginal);
    document.querySelector(".descricao").innerHTML = descTraduzida;


    const iconeUrl = icones[descTraduzida]; // padrão
    document.querySelector(".cloud").src = iconeUrl;


    // tamanho dos ícones da nuvem    
    let img = document.querySelector(".cloud");
    img.src = iconeUrl;
    img.width = 50;
    img.height = 50;


}

async function buscarCidade(cidade) {
    try {
        let resposta = await fetch(`https://wttr.in/${encodeURIComponent(cidade)}?format=j1`);

        if (!resposta.ok) {
            throw new Error("Cidade não encontrada");
        }

        let dados = await resposta.json();
        colocaNaTela(dados, cidade);
    } catch (erro) {
        alert("Erro ao buscar cidade: " + erro.message);

    }

}

function cliqueinoBotao() {
    let cidade = document.querySelector(".input-cidade").value.trim();
    if (cidade) {
        buscarCidade(cidade);
    } else {
        alert("Por favor, digite o nome da cidade");
    }
}





//tradução da descrição do clima para português


const tradutor = {
    "Partly cloudy": "Parcialmente nublado",
    "Sunny": "Ensolarado",
    "Light rain": "Chuva leve",
    "Clear": "Limpo"
    // adicione mais conforme necessário
};

function traduzirDescricao(desc) {
    return tradutor[desc] || desc; // retorna a tradução ou a original se não tiver
}


// ícones de nuvem

const icones = {
  "Ensolarado": "https://cdn-icons-png.flaticon.com/512/869/869869.png",
  "Parcialmente nublado": "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
  "Nublado": "https://cdn-icons-png.flaticon.com/512/414/414825.png",
  "Chuva leve": "https://cdn-icons-png.flaticon.com/512/414/414974.png",
  "Chuva forte": "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
  "Tempestade": "https://cdn-icons-png.flaticon.com/512/1146/1146860.png",
  "Neve": "https://cdn-icons-png.flaticon.com/512/642/642102.png",
  "Neblina": "https://cdn-icons-png.flaticon.com/512/4005/4005817.png",
  "Noite limpa": "https://cdn-icons-png.flaticon.com/512/1146/1146869.png",
  "Limpo": "https://cdn-icons-png.flaticon.com/512/869/869869.png", // mesmo que "Ensolarado"
  "Céu limpo": "https://cdn-icons-png.flaticon.com/512/869/869869.png"
};
