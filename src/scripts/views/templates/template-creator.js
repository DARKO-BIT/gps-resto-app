/* eslint-disable linebreak-style */
import CONFIG from '../../generals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>📌 ${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Kategori</h4>
    ${restaurant.categories.map((category) => `
      <p class="category-name">${category.name}</p>
    `).join('')}
  </div>

  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>

  <div class="restaurant__overview">
    <h4>Makanan</h4>
    ${restaurant.menus.drinks.map((drink) => `
    <p class="menus-name">${drink.name}</p>
    `).join('')}
  </div>

  <div class="restaurant__overview">
    <h4>Minuman</h4>
    ${restaurant.menus.foods.map((food) => `
      <p class="menus-name">${food.name}</p>
    `).join('')}
  </div>

  <div class="restaurant__reviews">
  <h3>Restaurant Reviews</h3>
  ${restaurant.customerReviews.map((comment) => `
        <div class="card-comment">
          <h4>${comment.name}</h4>
          <p class="date">Date : ${comment.date}</p>
          <p class="review">${comment.review}</p>
        </div>
      `).join('')}
  </div>

`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
<div class="restaurant-item__header">
    <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
    <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
    </div>
</div>
<div class="restaurant-item__content">
    <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
     <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <p>${restaurant.description}</p>
   
</div>
</div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <span class="material-icons">favorite_border</span></button>
  `;

const createLikedRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  <span class="material-icons">favorite</span></button>
  `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createLikedRestaurantButtonTemplate,
// eslint-disable-next-line eol-last
};