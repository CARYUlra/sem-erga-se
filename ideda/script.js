//Desenvolva os seguintes programas em javaScript sem utilizar de funções para arrays
//Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade (nome e idade). 
let nomes = [];
let idades = [];
let resultadoFinal = "Pessoas menores de idade:\n";

for (let i = 0; i < 9; i++) {
    let nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
    let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    nomes[i] = nome;
    idades[i] = idade;
}
for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        resultadoFinal += nomes[i] + " - " + idades[i] + " anos\n";
    }
}
alert(resultadoFinal);
