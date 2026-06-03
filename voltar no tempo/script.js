//Desenvolva os seguintes programas em javaScript sem utilizar de funções para arrays
//Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados. 
let vetor = []
let resultadoFinal = "";

for (let i = 0; i < 7; i++) {
    let nome = prompt("Digite um nome "+ (i + 1) + ":");
    vetor[i]= nome;
    
}
for (let i= 6; i >= 0; i--) {
    resultadoFinal += vetor[i] + "\n";
}

alert("Nomes na ordem inversa:\n" + resultadoFinal);
