function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio(); // gera numero aleatorio
    tentativa = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('palpite').removeAttribute('disabled');
    console.log("O jogo foi reiniciado");
    console.log(`O numero secreto é ${numeroSecreto}`);
}

function exibirMensagemInicial()
{
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Descubra o número secreto entre 1 e 1000!');
}

function exibirTextoNaTela(p, h1)
{
    let campo = document.querySelector(p);
    campo.innerHTML = h1;
    responsiveVoice.speak(h1,'Korean Female', {rate:1.2});
}

function verificarChute() 
{
    let chute = document.querySelector('input').value;
    console.log("O botão foi clicado");
    if (chute==numeroSecreto)
    {
        let palavra_tentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `O número secreto era ${numeroSecreto}! Acertou em ${tentativa} ${palavra_tentativa}!`;
        exibirTextoNaTela('h1', 'Parabens! Você Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('palpite').setAttribute('disabled', true);
    }
    else
    {
        if (chute < numeroSecreto)
        {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        else
        {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        }
        tentativa++;
        limparCampo();
    }
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite)
    {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) 
    {
        return gerarNumeroAleatorio();
    }
    else
    {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo()
{
    document.querySelector('input').value = '';
}

let tentativa = 1;
let listaDeNumerosSorteados = [];
let numeroLimite = 1000;
let numeroSecreto = gerarNumeroAleatorio();
console.log(`O numero secreto é ${numeroSecreto}`);
exibirMensagemInicial();