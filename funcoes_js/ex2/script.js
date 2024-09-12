/*Crie uma função que lê uma lista de 4 notas, mostre-as junto com a média no alerta,
considerando que o usuário não pode informar letras, palavras ou vazio.
Alerte-o do erro e repita a leitura das notas caso ocorra.*/

function notas() {
    let numeros = [];
    for (let i = 0; i < 4; i++) {
        let nota1 = prompt("Informe a primeira nota:");
        let nota2 = prompt("Informe a segunda nota:");
        let nota3 = prompt("Informe a terceira nota:");
        let nota4 = prompt("Informe a quarta nota:");

        if (infoNumero === null || infoNumero.trim() === "" || isNaN(infoNumero)) {
            alert("Entrada inválida. Por favor, digite um número inteiro.");
            i--;
        } else {
            numeros.push(parseInt(infoNumero));
        }
    }

    alert("Os números digitados foram: " + numeros.join(", ") + ".");
}

lerNumero();
