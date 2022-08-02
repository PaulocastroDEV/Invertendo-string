var nome = "joao" //Digite o nome que queira entre aspas
let resultado = nome.split(""); //aqui irá transforma a variavel nome em um array 
let tamanho = resultado.length //aqui pegará o tamanho do nome
var i=Number(tamanho)-1 //como o array começa em zero, então tiro 1 do tamanho para percorrer corretamente
let novonome= resultado[i]
while(i>0){
    novonome=novonome+resultado[i-1] //aqui irá percorrer todo o array, e concatenar assim formando o nome
    i=i-1
}
console.log(novonome)