import  { pizza_premium, pizza_tradicional, pizza_doce }  from './pizzas.js';
import '../css/style.css'


pizza_premium.map(pizza => createCard(pizza));
pizza_tradicional.map(pizza => createCard(pizza));
pizza_doce.map(pizza => createCard(pizza));


{

  /* 
  
  -Na main adeque o css pras pizzas ficarem dentro de uma div externa identificando seu tipo como no exemplo abaixo:
  -Adeque o display grid

  <div id="premium"> 
    <h1 class="titulos titulo-premium" id="cardapio">Sabores Premium</h1>
    ** JS vai inserir aqui**
  </div>

  <div id="tradicional"> 
    <h1 class="titulos titulo-tradicional" id="cardapio-tradicionais">Sabores Tradicionais</h1>
    ** JS vai inserir aqui**
  </div>

  <div id="doce"> 
    <h1 class="titulos titulo-doce" id="cardapio-doces">Sabores Doces</h1>
    ** JS vai inserir aqui**
  </div> */

}

function createCard(pizza){

  const card = document.querySelector(`#${pizza.category}`);
  const pizza_div =
  `
  <div class = "pizza">     
    <img id="${pizza.id}" class="img-pizzas" src="${pizza.image}" alt="${pizza.name}">
      <div class="descricao-sabor">
        <h3>${pizza.name}</h3>
        <p class="descricao-pizza">
          ${pizza.description}
        </p><br>
        <p><i>Massa Premium</i></p>
        <p>Pizza grande - 30cm</p>
        <button class="add-carrinho">
          Adicionar ao carrinho
          <i class="fa fa-solid fa-cart-shopping"></i>
        </button>
      </div>
  </div>
  `;
  card.insertAdjacentHTML('beforeend', pizza_div);
}