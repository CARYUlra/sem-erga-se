//Faça um programa que leia um vetor com 8 números reais e calcule a média dos valores armazenados. Após isso, exiba os valores do vetor que estão acima da média. 
//Desenvolva os seguintes programas em javaScript sem utilizar de funções para arrays
let vetor = []
let soma = 0
for (let i = 0; i < 8; i++) {
    let numero = parseFloat(prompt("Digite um número real:"));
    vetor[i] = numero;
    soma += numero;
}
let media = soma / 8;
let resultadoFinal = "Números acima da média (" + media.toFixed(2) + "):\n";
for (let i = 0; i < 8; i++) {
    if (vetor[i] > media) {
        resultadoFinal += vetor[i] + "\n";
    }
}
alert(resultadoFinal);
