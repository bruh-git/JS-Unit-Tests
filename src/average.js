/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
// Resolução nesse link => https://www.codegrepper.com/code-examples/javascript/fun%C3%A7%C3%A3o+que+retorna+uma+media+aritm%C3%A9tica+javascript
// const average = (array) => array.reduce((a, b) => Math.round((a + b) / array.length));

// console.log(average([5,7.9, '5']));

const average = (array) => {
  let soma = 0;
  let result = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let i = 0; i < array.length; i += 1) {
    soma += array[i];
    if (typeof soma !== 'number') {
      return undefined;
    }
    result = soma / array.length;
  }
  return Math.round(result);
};
module.exports = average;
