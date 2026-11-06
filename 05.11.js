// Atividade 1
let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 6.5;

let mediafinal = (nota1 + nota2 + nota3) / 3;

console.log("Média final: " + mediafinal.toFixed(2));

let valorA = 10;
let valorB = "10";

console.log(valorA === valorB);


//atividade 2
const pontuacao = 100

if (pontuacao >= 90){
    console.log ("classificação: A");

} else if (pontuacao >= 70){
    console.log ("classificação:B");

} else {
    console.log ("classificação: precisa melhorar")
}

// atividade 3 

let idade = 14;
let altura = 1.70;


let podeEntrar = idade >= 16 && altura >= 1.60;


console.log("Pode entrar na atração? " + podeEntrar);

if (podeEntrar) {
    console.log("Pessoa apta para entrar!");
} else {
    console.log("Pessoa não está apta para entrar.");
}

