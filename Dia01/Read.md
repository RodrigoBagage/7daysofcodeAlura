# 7DaysOfCode Desafio 01 
- Lógica JS 1/7: Operações Booleanas

# Artigo
## Como utilizar operadores de comparação em Javascript

Imagine que você precise comparar dois valores dentro de uma condição para que ela seja cumprida. Mas como devemos utilizar cada operador para isso? Descubra aqui nesse artigo!

Sempre que queremos avaliar uma condição no código, precisamos utilizar operadores de comparação para isso. Um exemplo, é quando queremos imprimir um número apenas se ele for positivo. Nesse caso, utilizamos o famoso “if” e colocamos a condição dentro do parêntesis, como mostro abaixo:

~~~javascript
if(numero > 0){
    console.log(numero);
} 
~~~

Quando analisamos a condição (numero > 0), podemos perceber que o símbolo ">" coloca como condição o valor da esquerda ser maior que o valor da direita. É como se dentro do parêntesis estivesse escrito: “numero maior que 0”. Sendo assim, para cada tipo de comparação, temos um operador diferente. Veja a tabela abaixo:

|Operador |	 Operação       |	Exemplo   |
|---------|-----------------|-------------|
|>        |Maior que        |(a > b)      |
|<        |Menor que        |(a < b)      |
|>=       |Maior ou igual a |(a >= b)     |
|<=       |Menor ou igual a |(a <= b)     | 
|==       |Igual a	        |(a == b)     |
|!=	      |Diferente de     |(a !== b)    | 
|===	  |Idêntico a       |(a === b)    |
|!==	  |Não idêntico a   |(a !== b)    |
|&&	      |E/and	        |(a && b)     |
|||	      |Ou/or            |(a || b)     |


## Diferença entre “==” e “===”

É possível perceber na tabela acima, que existe tanto o símbolo de “igual a” (==), quanto o de “idêntico a” (===). Mas qual eu devo utilizar para cada situação? Se usarmos o operador “==” em uma condição, saberemos que ela só será verdadeira se o valor da esquerda for o mesmo valor da direita, por exemplo:

~~~javascript
if (true == “true”) //retorna true
if (10 == “10”) //retorna true
if (true == true) //retorna true
if (10 == 10) //retorna true
~~~
Mas suponha que seja preciso fazer essa validação tendo certeza de que o número da direita é realmente um número, e não apenas possui o mesmo caractere. O que fazemos?

É nessa hora que entra o símbolo de “idêntico a” (===). Ele não só compara os valores dos dois lados da equação, como também verifica se eles são do mesmo tipo. Por exemplo:

~~~~javascript
if (true === “true”) //retorna false
if (10 === “10”) //retorna false
if (true === true) //retorna true
if (10 === 10) //retorna true
~~~~

E assim como os operadores “==” e “===”, usamos a mesma lógica para os seus inversos “!=” e “!==”. Veja a seguir:

~~~~javascript
if (true != “true”) //retorna false
if (4 != “4”) //retorna false
if (true !== “true”) //retorna true
if (4 !== “4”) //retorna true
if (true !== true) //retorna false
if (4 !== 4) //retorna false
~~~~

fonte:[https://www.alura.com.br/artigos/operadores-matematicos-em-javascript]
