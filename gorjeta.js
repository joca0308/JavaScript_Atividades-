
let consumo = Number(prompt("Digite o valor total da conta:"));

let gorjeta = Number(prompt("Digite a porcentagem da gorjeta:"));

let pessoas = Number(prompt("Em quantas pessoas a conta será dividida?"));

let valorGorjeta = consumo * gorjeta / 100;

let total = consumo + valorGorjeta;

let divisao = total / pessoas;

alert(
    "--- Resumo da Conta ---\n" +
    "Consumo: R$ " + consumo.toFixed(2) + "\n" +
    "Gorjeta: R$ " + valorGorjeta.toFixed(2) + "\n" +
    "Total com Gorjeta: R$ " + total.toFixed(2) + "\n" +
    "Divisão por pessoa: R$ " + divisao.toFixed(2)
);
