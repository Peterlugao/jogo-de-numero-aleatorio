function clicado1() 
{
    console.log("Botão Console clicado!");
}

function clicado2() 
{
    alert("Eu amo JavaScript!");
}

function cidade() 
{
    let cidade = prompt("Qual é a sua cidade?");
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function soma()
{
    let num1 = parseInt(prompt("Digite o primeiro número: "));
    let num2 = parseInt(prompt("Digite o segundo número: "));
    let resultado = num1 + num2;
    alert(`A soma é: ${resultado}`);
}

let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio!";