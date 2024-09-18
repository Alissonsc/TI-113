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
    let continuar = false;
    do { 
        let info = [];
        let nome = prompt("Informe o nome e sobrenome do funcionário:");
        nome = nome.trim();
        while (isNaN(nome) === false || nome.indexOf(" ") < 3) {
            alert("Nome inválido, tente novamente.");
            nome = prompt("Infome mais um funcionário:");
        }
        info["nome"] = nome;

        let idade = prompt("Informe a idade do funcionário:");
        while (isNaN(idade) || idade <= 14 || idade >=120) {
            alert("Idade inválida, tente novamente.");
            idade = prompt("Informe a idade do funcionário:");
        }

        listaFuncionarios.push(info)

    }
    while (continuar);

}
funcionarios();
