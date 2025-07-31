function olaMundo()
{
    console.log("Olá, Mundo!");
}

function olaNome(nome)
{
    console.log(`Olá, ${nome}!`);
}

function dobroNumero(numero)
{
    return numero * 2;
}

function mediaNumeros(n1, n2, n3)
{
    return (n1 + n2 + n3) / 3;
}

function maiorNumero(n1, n2)
{
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

function quadradoNumero(numero)
{
    return numero * numero;
}

olaMundo();
let nome = "João";
olaNome(nome);
let numero = 5;
console.log(`O dobro de ${numero} é ${dobroNumero(numero)}`);
let n1 = 10, n2 = 20, n3 = 30;
console.log(`A média de ${n1}, ${n2} e ${n3} é ${mediaNumeros(n1, n2, n3)}`);
let n1Maior = 15, n2Maior = 25;
console.log(`O maior número entre ${n1Maior} e ${n2Maior} é ${maiorNumero(n1Maior, n2Maior)}`);
console.log(`O quadrado de ${numero} é ${quadradoNumero(numero)}`);