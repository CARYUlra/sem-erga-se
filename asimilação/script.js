let vetor1 = [];
let vetor2 = [];
let resultadoFinal = [];
for (let i = 0; i < 5; i++) {
    let numero1 = Number(prompt('Digite um número inteiro para o vetor 1:\n numero ' + (i + 1) + ': '));
    vetor1[i] = numero1;
}
for (let i = 0; i < 5; i++) {
    let numero2 = Number(prompt('Digite um número inteiro para o vetor 2:\n numero ' + (i + 1) + ': '));
    vetor2[i] = numero2;
}
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (vetor1[i] === vetor2[j]) {
            let jaExiste = false;
            for (let k = 0; k < resultadoFinal.length; k++) {
                if (resultadoFinal[k] === vetor1[i]) {
                    jaExiste = true;
                    break;
                }
            }
            if (!jaExiste) {
                resultadoFinal[resultadoFinal.length] = vetor1[i];
            }
        }
    }
}
let resultadoString = "Elementos em ambos os vetores (interseção):\n";
for (let i = 0; i < resultadoFinal.length; i++) {
    resultadoString += resultadoFinal[i] + "\n";
}
alert(resultadoString);