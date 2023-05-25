import './styles/index.scss';
import dataProducts from './scripts/dataProducts.js';
const cardList = document.querySelector('.place-products__list');

function createCard(item) {
  const cardElement = document.querySelector('.card-template').content;
  const card = cardElement.querySelector('.card').cloneNode(true);

  const cardPhoto = card.querySelector('.card__photo');
  const cardTitle = card.querySelector('.card__title');
  const cardDescription = card.querySelector('.card__description');
  const cardPrice = card.querySelector('.card__price');

  cardPhoto.src = item.image;
  cardTitle.textContent = item.title;
  cardDescription.textContent = item.description;
  // elementsPrice.value = item.price += ' ₽';
  cardPrice.value = item.price;

  card.querySelector('.card__button-delete').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });

  return card;
}

// функция добавления карточку на страницу
function addCard(item, container) {
  const newCard = createCard(item);
  container.prepend(newCard);
}

// Карточки из коробки
dataProducts.forEach(function (item) {
  addCard(item, cardList);
});
