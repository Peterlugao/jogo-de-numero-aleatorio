function adicionarItem()
{
    let item = prompt("Digite o item que deseja adicionar:" );
    linguagensDeProgramacao.push(item);
    console.log(`Item "${item}" adicionado à lista.`);
    let decisao = prompt("Deseja adicionar mais um item? (Sim/Não)");
    if (decisao == "Sim" || decisao == "sim")
    {
        return adicionarItem();
    }
    else
    {
        console.log("Adição de itens concluída.");
    }

}

let listaGenerica = [];
let listaNomes = ['João', 'Maria', 'Pedro'];
let linguagensDeProgramacao = ['Java','Ruby','Golang'];
adicionarItem();
console.log(linguagensDeProgramacao);
console.log(listaGenerica);
console.log(listaNomes[0]);
console.log(listaNomes[1]);
console.log(listaNomes[2]);