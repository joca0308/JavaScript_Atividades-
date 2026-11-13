const numero = 7;
console.log(`----tabuada do ${numero}----`);
for (let i = 1; i <= 10; i++){
    console.log (`${numero} x ${i} = ${numero * i}`);
}

let cofrinho = 0;
const meta = 50;
let dias = 0;
while (cofrinho < meta){
    dias ++;
    cofrinho += 12; 
    console.log(`Dia ${dias}: total guardado R$ ${cofrinho}`);
}
console.log(`meta atiginda em ${dias} dias!`);{

}
const carrinho = [25.50, 10.00, 8.90, 42.00];
let total = 0; 
for (const preco of carrinho){
    total += preco;
    console.log(`item adicionado: R$ ${preco.toFixed(2)}`);
}
console.log(`total da compra: R$ ${total.toFixed(2)}`);{

}
