/*Ex1: Crie uma função que lê um vetor de 5 números inteiros
e mostre-os, considere que o usuário não pode informar letras,
palavras ou vazio. Alerte-o do erro e repita a leitura caso
ocorra.*/

function lerNumero() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        let infoNumero = prompt("Informe um número:");

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
