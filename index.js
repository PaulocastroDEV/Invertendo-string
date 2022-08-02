var nome = "joao" //Digite o nome que queira entre aspas
let resultado = nome.split("");
let tamanho = resultado.length
var i=Number(tamanho)-1
let novonome= resultado[i]
while(i>0){
    novonome=novonome+resultado[i-1]
    i=i-1
}
console.log(novonome)