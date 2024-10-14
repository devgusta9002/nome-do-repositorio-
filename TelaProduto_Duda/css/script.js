// Função que muda a imagem que aparece no elemento com a classe 'slide'.
// O parâmetro 'anything' é o endereço (URL) ou caminho da nova imagem que será exibida.
function img(anything) {
  // Procura o elemento na página que tem a classe 'slide' (onde a imagem está).
  // Muda a imagem que está nesse elemento, usando o valor de 'anything'.
  document.querySelector('.slide').src = anything;
}

// Função que altera a cor de fundo de um elemento com a classe 'home'.
// O parâmetro 'change' será a nova cor de fundo que queremos usar.
function change(change) {
  // Procura o elemento na página que tem a classe 'home'.
  const line = document.querySelector('.home');
  
  // Altera a cor de fundo do elemento, mudando o estilo 'background' para a cor escolhida.
  line.style.background = change;
}

// A função 'img': Serve para trocar a imagem de um elemento na página com a classe .slide.
// A função 'change': Serve para mudar a cor de fundo de um elemento na página com a classe .home.
