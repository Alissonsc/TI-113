/*Crie um algoritmo usando funções que faça uma leitura de 10
letras em um vetor, e após verificar quantas vogais
foram lidas e mostre somente consoantes no alerta.*/
/*function lerNotas() {
    let notas = [];
    let soma = 0;
    let media =0;
    for (let i = 0; i < 4; i++) {
        let nota = prompt(`Digite a nota ${i + 1}: `);

        while (isNaN(nota) || nota.trim() === "") {
            alert("Só é permitido números. Tente novamente.");
            nota = prompt(`Digite a nota ${i + 1}:`);
        }
        nota = parseFloat(nota);
        notas.push(nota);
        soma += nota;
    }
    media = soma / notas.length;

    alert(`Notas: ${notas.join(", ")}. \n Média: ${media.toFixed(2)}`);
}

lerNotas();*/

function leituraletras() {
    let letras = [];
let contador = 0;
let mensagem = "";

//leitura de uma letra no vetor de letras
for (let i = 0; i < 10; i++) {
    let letra = prompt("Informe uma Letra: ");
    letras.push(letra);
}

for (let j = 0; j < letras.length; j++) {
    //converto o texto pra maiúsculo
    let letra = letras[j].toUpperCase();
    //Verifico se tem alguma vogal
    let temA = (letra == "A"); // true ou false
    let temE = (letra == "E"); // true ou false
    let temI = (letra == "I"); // true ou false
    let temO = (letra == "O"); // true ou false
    let temU = (letra == "U"); // true ou false
    
    //se tiver alguma vogal ele não entra no if
    if ((temA || temE || temI || temO || temU) == true) {
        contador += 1;
        mensagem += letra + "\n";
    }
}
alert(mensagem + "\n" + "Teve " + contador + " Consoantes!");
}

leituraletras();