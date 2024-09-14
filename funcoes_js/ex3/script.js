/*Crie um algoritmo usando funções que faça uma leitura de 10
letras em um vetor, e após verificar quantas vogais
foram lidas e mostre somente consoantes no alerta.*/
function lerLetras() {
    let lista = [];
    for (let i = 0; i < 10; i++) {
        let letra = prompt("Informe uma letra:");
        while(isNaN(letra) === false) {
            alert("O valor digitado não é uma letra!")
            letra = prompt("Informauma letra novamente:")
        }
        
    }
}

lerLetras();

function mostrarConsoantes(lista) {

    let contador = 0;
    let mensagem = "";

    for (let i = 0; i < lista.length; i++) {
        let vogais = ['A', 'E', 'I', 'O', 'U'];
        let letra = lista[i].toLowerCase(0);


        let posicaoVogalEncontrada =
        vogais.findIndex(vogal => vogal == letra);

        if(posicaoVogalEncontrada >= 0)
            contador++;
        else
            mensagem += letra + "\n";
    }

    alert(mensagem + "n Teve")
}