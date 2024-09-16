/*Crie um algoritmo usando funções que tenha um cadastro
de nomes e salários bruto de até 50 pessoas, há um menu
de continuação ou parada do cadastro e na parada final,
mostre os nomes, salários brutos e os salários líquidos
de todos que foram lidos, considerando 10% de INSS a descontar.*/

function cadastro() {
    let pessoas = [];
    let continuar = true;
    let salarioBruto = [];
    let INSS = 0.9;
    while (continuar && pessoas.length < 50) {

        let nome = prompt("Informe o nome: ");
        if (nome.trim() === "") {
            alert("Nome não pode estar em branco. Tente novamente.");
            continue;
        }
        pessoas.push(nome);

        let salario = parseFloat(prompt("Informe o salário bruto:"));
        if (isNaN(salario) || salario < 0) {
            alert("Salário inválido. Insira um número positivo.");
            pessoas.pop();
            continue;
        }
        salarioBruto.push(salario);

        continuar = confirm("Deseja cadastrar outra pessoa? OK = para continuar cadastrando ou  CANCELAR = Para parar de cadastrar")
        if (!continuar) {
            break;
        }
    }
    let mensagem = "Cadastro finalizado. Dados das pessoas cadastradas:\n";
    for (let i = 0; i < pessoas.length; i++) {
        let salarioLiquido = salarioBruto[i] * INSS;
        mensagem += `Nome: ${pessoas[i]}, Salário Bruto: R$${salarioBruto[i].toFixed(2)}, Salário Líquido: R$${salarioLiquido.toFixed(2)}\n`;
    }

    alert(mensagem);
}

cadastro();