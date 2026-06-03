let vetor1 = [];
let vetor2 = [];
let resultado = [];
let indiceResultado = 0;
for (let i = 0; i < 5; i++) {
    let numero1 = Number(prompt("Digite um número inteiro para o vetor 1:"+ (i + 1)));
    vetor1[i] = numero1;
}
for (let i = 0; i < 5; i++) {
    let numero2 = Number(prompt("Digite um número inteiro para o vetor 2:"+ (i + 1)));
    vetor2[i] = numero2;
}
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (vetor1[i] === vetor2[j]) {
            let jaExiste = false;
            for (let k = 0; k < indiceResultado; k++) {
                if (resultado[k] === vetor1[i]) {
                    jaExiste = true;
                    break;
                }
            }
            if (!jaExiste) {
                resultado[indiceResultado] = vetor1[i];
                indiceResultado++;
            }
        }
    }
}
let resultadoFinal = "Elementos em ambos os vetores:\n";
for (let i = 0; i < indiceResultado; i++) {
    resultadoFinal += resultado[i] + "\n";
}
alert(resultadoFinal);
