
var nota1 = prompt('Valor do jogador 1');
var nota2 = prompt('Valor do jogador 2');


const media = Number(nota1) + Number(nota2) 

if (nota1 > 0 && nota2 > 0 && media >= 5) {
   alert('Voce foi aprovado, Parabens!')
} else {
   alert('Voce foi reprovado, tente novamente!')
}