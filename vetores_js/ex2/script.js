/*Ex2: Crie um sistema de cadastro de alunos usando funções
onde devem ser lidos os nomes, matriculas, matérias e três 
notas de até 100 pessoas e mostre-os no fim do cadastro
com as respectivas médias conforme os seguintes critérios: 
• Considere que o usuário não pode informar conteúdo vazio.
• Nomes completos válidos (nome e sobrenome). 
• Matrículas válidas com 8 caracteres de números (00000000 a 99999999).
• As notas informadas devem ser válidas e não
podem ser inferiores a 0 e acima de 10. 
• Deve-se cadastrar no mínimo 5 alunos.
• As médias devem ser mostradas com suas notas no seguinte formato: 
• “N1: 0,00 / N2: 0,00 / N3: 0,00 / Media: 0,00”. 
Exiba todos os cadastrados na página HTML*/

/* 
Ex4: Crie um algoritmo usando funções que tenha um menu de cadastro de nomes 
e salários bruto de até 50 pessoas, e ao final, mostre os nomes, 
salários brutos e os salários líquidos de todos que foram lidos, 
considerando 10% de INSS a descontar.
*/

function funcionarios() {
    let listaFuncionarios = [];
    let continuar = true;
    do { 
        let info = {};
        let nome = prompt("Informe o nome e sobrenome do funcionário:");
        nome = nome.trim();
        while (isNaN(nome) === false || nome.indexOf(" ") < 3) {
            alert("Nome inválido, tente novamente.");
            nome = prompt("Informe o nome e sobrenome do funcionário:");
        }
        info["nome"] = nome;

        let idade = prompt("Informe a idade do funcionário:");
        while (isNaN(idade) || idade <= 0) {
            alert("Idade inválida, tente novamente.");
            idade = prompt("Informe a idade do funcionário:");
        }
        info["idade"] = idade;

        listaFuncionarios.push(info);
        continuar = confirm("Deseja adicionar mais um funcionário?");
    }
    while (continuar);

    console.log(listaFuncionarios);
}
funcionarios();
