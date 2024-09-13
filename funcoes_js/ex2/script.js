/*Crie uma função que lê uma lista de 4 notas, mostre-as junto com a média no alerta,
considerando que o usuário não pode informar letras, palavras ou vazio.
Alerte-o do erro e repita a leitura das notas caso ocorra.*/

function lerNotas() {
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

lerNotas();