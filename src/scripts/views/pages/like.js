/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
    async render() {
        return `
        <main>
        <div class="content">
            <h2 class="content__heading">The Best Restaurant</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </div>
        </main>
        `;
    },

    async afterRender() {
        const data = await FavoriteRestaurantIdb.getAllRestaurant();
        const dataContainer = document.querySelector('#restaurants');
        if (data.length === 0) {
            dataContainer.innerHTML += `
            <p class="restaurant__empty__label">
            <b> You have not chosen your favorite restaurant</b>
            </p>
            `;
        }
        data.forEach((restaurant) => {
            dataContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

// eslint-disable-next-line eol-last
export default Like;