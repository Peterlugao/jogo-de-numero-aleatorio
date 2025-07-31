function exibirMensagemInicial()
{
    exibirTextoNaTela('h1', `A tabuada do número ${numero} é: \n${tabuada(numero)}`); //Titulo da página
    exibirTextoNaTela('p', `A area do círculo é ${calcularcirculo(raio).toFixed(2)}`); // paragrafo 
}

function exibirTextoNaTela(p, h1)
{
    let campo = document.querySelector(p);
    campo.innerHTML = h1;
}

function calculaIMC(altura, peso) 
{
    return peso / (altura * altura);
}

function fatorial(numero)
{
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

function conversao(reais)
{
    let dolar = 5.25; // Exemplo de cotação do dólar
    return reais / dolar;
}

function calcularRetangulo(base, altura)
{
    return base * altura;
}

function calcularcirculo(raio)
{
    return 3.14 * raio * raio;
}

function tabuada(numero)
{
    let resultado = '';
    for (let i = 1; i <= 10; i++) 
    {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    return resultado;
}

let raio = 3;
let base = 5;
let altura = 10;
let alturaHumano = 1.80;
let peso = 80;
let numero = 5;
let reais = 254.32;
exibirMensagemInicial();

console.log(`O IMC para altura ${alturaHumano}m e peso ${peso}kg é ${calculaIMC(alturaHumano, peso).toFixed(2)}`);
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);
console.log(`A conversão de R$${reais} para dólares é $${conversao(reais).toFixed(2)}`);
console.log(`A área do retângulo com base ${base} e altura ${altura} é ${calcularRetangulo(base, altura)}`);
console.log(`A área do círculo com raio ${raio} é ${calcularcirculo(raio).toFixed(2)}`);
console.log(`A tabuada do número ${numero} é:\n${tabuada(numero)}`);