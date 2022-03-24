/*Desafio proposto 

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?
*/

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

alert(msg);
document.write(msg)

var resposta = prompt(`Você gosta de estudar ${linguagem}?
Responda com o número 1 para SIM ou 2 para NÃO.`)

if (resposta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
    document.write("<p>Muito bom! Continue estudando e você terá muito sucesso.</p>")
}
if (resposta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
    document.write("<p>Ahh que pena... Já tentou aprender outras linguagens?</p>")
}
