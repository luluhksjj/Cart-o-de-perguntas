 function criaCartao(categoria, pergunta, respota) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
                      <div class="cartao__conteudo">
                    <h3>${categoria}</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>${pergunta}</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>${respota}</p>
                    </div>
                </div>
    `

        let respostaEstaVisivel = false

        function viraCartao() {
            respostaEstaVisivel = !respostaEstaVisivel
            cartao.classList.toggle('active', respostaEstaVisivel)
        }
        cartao.addEventListener('click', viraCartao)

    container.appendChild(cartao)

}

document.getElementById('embaralhar').addEventListener('click', () => {
    let container = document.getElementById('container');
    let cards = Array.from(container.children);
    container.innerHTML = '';
    cards.sort(() => 0.5 - Math.random());
    cards.forEach(card => container.appendChild(card));
});

