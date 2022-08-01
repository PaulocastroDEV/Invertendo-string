var nome = "Paulo" //Digite o nome que queira entre aspas
let resultado = nome.split("");
let tamanho = resultado.length
var i=Number(tamanho)
let novonome= ['']
var y;
while(i>0){
    novonome[y] =resultado[i-1]
    console.log(novonome[y])
    i=i-1
    y=y+1
}

