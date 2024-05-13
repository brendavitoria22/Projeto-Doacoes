// Função para criar um cartão com as informações fornecidas
function criarCartao(nome, endereco) {
    var cartaoHTML = `
    <div class="card">
        <div class="card__content">
            <h3 class="titulocard">${nome}</h3>
            <p class="cardp">Endereço: ${endereco}</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.824732148076!2d-51.19917078491788!3d-30.059350926703867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197679a218b3c7%3A0x3d7c4d7d9e0103b3!2s${endereco.replace(/ /g, '%20')}!5e0!3m2!1sen!2sbr!4v1640823315151!5m2!1sen!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
    </div>
    `;

    return cartaoHTML;
}

// Função para adicionar cartões ao contêiner
function adicionarCartoes() {
    var cartoesContainer = document.getElementById('cartoes-container');
    var nomes = ["Estádio Olímpico", "Nilo 2400", "Escola Aramy Silva (Emef)", "AFISVEC", "Usina do Gasômetro", "Bar Opinião", "Shopping Pontal", "Igreja Quadrangular - Costa e Silva", "Abrigo Cristo Redentor"];
    var enderecos = ["entrada pela Azenha", "Avenida Dr. Nilo Pecanha 2400", "Rua Chico Pedro, 390", "Rua salvador Calamussi, 56", "Largo do Trabalho, 46", "Rua José do Patrocínio, 834", "Avenida Padre Cacique, 2893", "Avenida Dante Angelo Pilla, 285", "Rua Ouro Preto, 408a"];

    // Loop para criar e adicionar os cartões
    for (var i = 0; i < nomes.length; i++) {
        var cartao = criarCartao(nomes[i], enderecos[i]);
        cartoesContainer.innerHTML += cartao;
    }
}

// Chamar a função para adicionar cartões
adicionarCartoes();
