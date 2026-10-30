
console.log("Olá!");

const valor = Number(prompt("Qual o valor total da conta?"));
const quantasPessoas = Number(prompt("Quantas pessoas?"));

const total = valor / quantasPessoas;

alert(`--Resumo da conta-- \n consumo: R$ ${valor.toFixed(2)} \n divisão por ${quantasPessoas} pessoa: R$ ${total.toFixed(2)}.`);
