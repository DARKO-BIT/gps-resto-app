/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
// eslint-disable-next-line no-unused-vars
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
    async render() {
        return `
        <div id="restaurant" class="restaurant"></div>

        <div id="likeButtonContainer"></div>
         `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const dataContainer = document.querySelector('#restaurant');
        const data = await RestaurantSource.detailRestaurant(url.id);
        dataContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
                id: data.restaurant.id,
                city: data.restaurant.city,
                pictureId: data.restaurant.pictureId,
                name: data.restaurant.name,
                rating: data.restaurant.rating,
                address: data.restaurant.address,
                description: data.restaurant.description,
                category: data.restaurant.categories,
                menus: data.restaurant.menus,
                reviews: data.restaurant.customerReviews,
            },
        });

    },
};

// eslint-disable-next-line eol-last
export default Detail;