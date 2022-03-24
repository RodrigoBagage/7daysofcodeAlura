let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'


if (1 == '1'||1 !== '1') {
    document.write("<p>Se 1 == '1' || 1 !== '1' então: As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes</p>");
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
  } else {
    document.write("<p>Se 1 não for == '1' || !== '1' então: As variáveis numeroUm e stringUm não tem o mesmo valor</p>" );
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
  }

if (30 === '30'|| 30 != '30') {
    document.write("<p>Se 30 === '30' || 30 != '30' então: 'As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo'</p>");
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');
} else {
    document.write("<p>Se 30 não for === '30'||!= '30' então: As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo</p>");
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
}

if (10 == '10'|| 10 !== '10' ) {
    document.write("<p>Se 10 == '10' || 10 !== '10' então: As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes</p>");
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');
} else {
    document.write("<p>Se 10 não for == '10' || !== '10' então: As variáveis numeroDez e stringDez não tem o mesmo valor</p>");
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor');
}

/*
console>

As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes 

As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo 

As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes
*/

