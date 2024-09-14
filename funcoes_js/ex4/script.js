/*Crie um algoritmo usando funções que tenha um cadastro
de nomes e salários bruto de até 50 pessoas, há um menu
de continuação ou parada do cadastro e na parada final,
mostre os nomes, salários brutos e os salários líquidos
de todos que foram lidos, considerando 10% de INSS a descontar.*/

function cadastrarPessoas() {
    let pessoas = [];
    let continuar = true;

    while (pessoas.length < 50 && continuar) {
        let nome = prompt("Digite o nome da pessoa:");
        let salarioBruto = parseFloat(prompt("Digite o salário bruto da pessoa:"));
        pessoas.push({ nome: nome, salarioBruto: salarioBruto });

        continuar = confirm("Deseja continuar o cadastro?");
    }

    return pessoas;
}

function calcularSalarioLiquido(salarioBruto) {
    return salarioBruto * 0.9;
}

function mostrarPessoas(pessoas) {
    pessoas.forEach(pessoa => {
        let salarioLiquido = calcularSalarioLiquido(pessoa.salarioBruto);
        console.log(`Nome: ${pessoa.nome}, Salário Bruto: ${pessoa.salarioBruto.toFixed(2)}, Salário Líquido: ${salarioLiquido.toFixed(2)}`);
    });
}

function main() {
    let pessoas = cadastrarPessoas();
    mostrarPessoas(pessoas);
}

main();
