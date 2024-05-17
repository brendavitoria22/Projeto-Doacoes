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
    var nomes = ["Teatri Municipal do RJ - TMRJ", "Quartel Do Comando Geral - PMPE", "Fundação Hospitalar São Francisco de Assis (FHSFA)", "Corpo de Bombeiros Militar - CBMPE", "Fundo Social (FUSSP)", "Força Aérea Brasileira - FAB", "Paróquia São José da Lagoa", "Grupo SCC", "Câmara Municipal de Curitiba", "Câmara Municipal de Manaus", "Fundação de Ação Social (FAS)", "Centro Integrado de Segurança Pública (CISP)"];
    var enderecos = ["Praça Floriano, S/N - Centro", "Derby, Recife", "Rua Itapagipe, 750, concórdia", "Av. João de Barros, 399", "Marechal Mário Guedes, 301", "avenida Monteiro Lobato, 6365", "Avenida Borges de Medeiros, 2735, Lagoa", "R. Ernesto Stodieck, 322", "R. Barão do Rio Branco, 720 - Centro curitiba", "Av. Padre Agostinho Caballero Martin, 850", "Rua Eduardo Sprada, 4.520", "Avenida Aguanambi, 2600"];

    // Loop para criar e adicionar os cartões
    for (var i = 0; i < nomes.length; i++) {
        var cartao = criarCartao(nomes[i], enderecos[i]);
        cartoesContainer.innerHTML += cartao;
    }
}

// Chamar a função para adicionar cartões
adicionarCartoes();
