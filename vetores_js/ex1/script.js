/*Ex1: Crie um sistema de cadastro de funcionários usando
funções onde devem ser lidos os nomes, idades e salários de até 
100 pessoas considerando os seguintes critérios:
• Considere que o usuário não pode informar conteúdo vazio.
• Nomes completos válidos (nome e sobrenome). 
• Idades válidas e maiores de 14 anos e menores de 120 anos.
• Os salários informados devem ser válidos e não podem
ser inferiores a R$ 2000,00 e acima de 20000,00.
• Deve-se cadastrar no mínimo 5 pessoas.
Exiba todos os cadastrados na página HTML.*/

function funcionarios() {
    let listaFuncionarios = [];
    let continuar = true;
    let contador = 0;
    do { 
        contador ++;

        let info = {};
        let nome = prompt("Informe o nome e sobrenome do funcionário:");
        nome = nome.trim();
        while (isNaN(nome) === false || nome.indexOf(" ") < 3) {
            alert("Nome inválido, tente novamente.");
            nome = prompt("Informe o nome e sobrenome do funcionário novamente:");
        }
        info["nome"] = nome;

        let idade = prompt("Informe a idade do funcionário:");
        while (isNaN(idade) || idade <= 14 || idade > 120) {
            alert("Idade inválida, tente novamente.");
            idade = prompt("Informe a idade do funcionário novamente:");
        }
        info["idade"] = idade;

        let salario = prompt("Informe o salário do funcionário:");
        while (isNaN(salario) || salario < 2000 || salario >= 20000) {
            alert("Salário inválido! Deve ser entre R$2.000 e R$20.000");
            salario = prompt("Informe o salário do funcionário novamente:");
        }
        info["salario"] = salario;

        listaFuncionarios.push(info);
        if (contador < 5) {
            continuar = true;
        } else if (contador >=5 && contador < 100) {
        continuar = confirm("Deseja adicionar mais um funcionário?");
        } else {
            continuar = false;
        }
    }
    while (continuar);

}
function exibir(listaempregados) {
    let mensagem ="";
    for (let i = 0; i < listaempregados.length; i++) {
        let emp = listaempregados[i];
        mensagem += `
        Nome: ${emp["nome"]} <br/>
        Idade: ${emp["idade"]} anos <br/>
        Salário: R$ ${parseFloat(emp["salário"]).toFixed(2)} <br/>
        <br/><br/>
        `;
        
    }
    document.write(mensagem);
}
console.log(listaFuncionarios);

funcionarios();