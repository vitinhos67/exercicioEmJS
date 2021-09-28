/*Comentarios são feitos para mentalizar/melhorar o que 
eu tenho e tive dificuldade em trabalhar com*/


let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let res1 = document.querySelector('div#res1');

let valores = [];


function IsNumber(n) {
   //Verifica se é um numero
   /* o parametro "n" é o numero que será adicionado*/
   
   if (Number(n) >= 1 && Number(n) <= 100) {
      return true;
   } else {
      return false;
   }
}


function inList(n, l ) {
   //index.Of procura por elementos, caso não achar o valor retornado será -1
   //l e utilizado como a variavel valores.
   
   
   if (l.indexOf(Number(n)) != -1) {
      //
      return true;

   } else {
      return false;
   }
}

function adicionar() {
   if(IsNumber(num.value) && !inList(num.value, valores)) {
      valores.push(Number(num.value));
      

         let itens = document.createElement('option');
         itens.text = `O numero ${num.value} foi inclementado `;
         lista.appendChild(itens); //appendChild e usado para inclementar um elemento/conteudo
         res.textContent = ''
   } else {
      alert("Valor ja encontrado na lista ou invalido");
   }

num.value = ""
   num.focus()

}

function verificar() {
   
   if(valores.length === 0) {
      alert('Nenhum valor adicionado!')
   }else {
       
     
      let maior = valores[0]
      let menor = valores[0]

      let soma = 0
      let media = 0
      
      for (let pos in valores) {
         
         soma += valores[pos]
         if (valores[pos] > maior)
         maior = valores[pos]
         if(valores[pos] < menor)
         menor = valores[pos]
      }
    
    
      
      let quantidade = valores.length
    
      media = soma / quantidade 
   
      if (quantidade === 1){
      
      res.textContent = `A ${quantidade} valor adicionado`
      res.innerHTML += `<p>Os valores adicionados são ${valores}</p>`;
   } 
   else {
      res.innerHTML = `A ${quantidade} valores adicionados`;
      
      res.innerHTML += `<p>Os valores adicionados são ${valores}</p>`;
   
      res.innerHTML += `<p>O maior valor adicionado é ${maior}</p>`;
      
      res.innerHTML += `<p>O menor valor adicionado é ${menor}</p>`

      res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
      res.innerHTML += `<p>A media dos é ${media}</p>`

      }
   }
}


