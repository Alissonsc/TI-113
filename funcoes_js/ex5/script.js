function lerNumero() {
    while (true) {
        let input = prompt("Informe um número inteiro:");
        let numero = parseInt(input);
        if (isNaN(numero)) {
            alert("Erro: Não pode informar letras, palavras ou vazio. Tente novamente.");
        } else if (numero < 0) {
            alert("Erro: Não pode informar números negativos. Tente novamente.");
        } else {
            return numero;
        }
    }
}

function cadastrarNumeros(quantidade) {
    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
        let numero = lerNumero();
        numeros.push(numero);
    }
    return numeros;
}

function exibirMenuCadastro() {
    while (true) {
        let opcao = prompt("Escolha a quantidade de números a cadastrar:\n1 - 5 números\n2 - 15 números\n3 - 25 números\n4 - 50 números");
        if (opcao === '1') {
            return 5;
        } else if (opcao === '2') {
            return 15;
        } else if (opcao === '3') {
            return 25;
        } else if (opcao === '4') {
            return 50;
        } else {
            alert("Opção inválida. Tente novamente.");
        }
    }
}

function exibirMenuExibicao(numeros) {
    while (true) {
        let opcao = prompt("Escolha o que deseja exibir:\n1 - A lista cadastrada\n2 - Somente os números pares\n3 - Somente os números ímpares");
        if (opcao === '1') {
            alert("Lista cadastrada: " + numeros.join(", "));
            break;
        } else if (opcao === '2') {
            let pares = numeros.filter(num => num % 2 === 0);
            alert("Números pares: " + pares.join(", "));
            break;
        } else if (opcao === '3') {
            let impares = numeros.filter(num => num % 2 !== 0);
            alert("Números ímpares: " + impares.join(", "));
            break;
        } else {
            alert("Opção inválida. Tente novamente.");
        }
    }
}

function main() {
    let quantidade = exibirMenuCadastro();
    let numeros = cadastrarNumeros(quantidade);
    exibirMenuExibicao(numeros);
}

main();
