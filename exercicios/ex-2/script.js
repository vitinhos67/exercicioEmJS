
var jogador1 = prompt('Valor do jogador 1');
var jogador2 = prompt('Valor do jogador 2');

var sortear = parseInt(Math.random() * 2);

if(sortear === 0) {
   if (jogador1 < jogador2) {
      alert(`O valor do jogador um é ${jogador1} é assim e o ganhador`)
   } else {
      alert(`O valor do jogador um é ${jogador2} é assim e o ganhador`)
   }

} else {
   if (jogador1 > jogador2) {
      alert(`O valor do jogador um é ${jogador1} é assim e o ganhador`)
   } else {
      alert(`O valor do jogador um é ${jogador2} é assim e o ganhador`)
   }
}
