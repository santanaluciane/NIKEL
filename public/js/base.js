const nome = "Luciane Santana";
let nome2 = "Luciane Santana"
let pessoa = {
nome: "Luciane Santana"
idade: "36"
trabalho: "Estudante"

}

function alterarNome() {
nome2="Maria Silva"
console.log("Valor alterado");
console.log(nome2)
}

function recebeEalteraNome(novoNome){
nome2 = novoNome
console.log("Valor alterado recebendo um nome");
console.log(nome2)

console.log(pessoa);


//recebeEalteraNome{"João Silva Pereira"}
//recebeEalteraNome{"Maria Silva"}






}

alterarNome();