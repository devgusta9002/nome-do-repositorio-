// Inicializa a variável 'count' com o valor 0, que será usada como o contador.
let count = 0;

// Seleciona o elemento da página onde o número vai aparecer.
// Esse elemento tem um "id" chamado 'value'.
const valueDisplay = document.getElementById('value');

// Seleciona o botão que vai aumentar o número quando clicado.
// Esse botão tem um "id" chamado 'increase'.
const increaseButton = document.getElementById('increase');

// Seleciona o botão que vai diminuir o número quando clicado.
// Esse botão tem um "id" chamado 'decrease'.
const decreaseButton = document.getElementById('decrease');

// Função que vai atualizar o número que aparece na tela.
// Ela pega o valor da variável 'count' e coloca no lugar onde o número aparece.
function updateDisplay() {
  valueDisplay.textContent = count;
}

// Adiciona um comando ao botão de aumentar.
// Toda vez que esse botão for clicado, o valor de 'count' (número) aumenta em 1.
// Depois de aumentar o valor, a função 'updateDisplay()' é chamada para atualizar o número na tela.
increaseButton.addEventListener('click', function() {
  count++; // Aumenta o valor do contador em 1.
  updateDisplay(); // Atualiza o número que aparece na tela.
});

// Adiciona um comando ao botão de diminuir.
// Quando esse botão for clicado, ele só vai diminuir o valor do número se o valor atual for maior que 0.
// Se o valor for maior que 0, ele diminui 1 e atualiza o número na tela.
decreaseButton.addEventListener('click', function() {
  if (count > 0) { // Só diminui o número se ele for maior que 0.
    count--; // Diminui o valor do contador em 1.
    updateDisplay(); // Atualiza o número que aparece na tela.
  }
});