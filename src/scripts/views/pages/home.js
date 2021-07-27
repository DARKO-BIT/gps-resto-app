/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <hero-div>
        <div class="hero__inner">
            <h1 tabIndex="0" class="hero__title">KEMUDAHAN DALAM MENCARI RESTO TERBAIK</h1>
            <p tabIndex="0" class="hero__tagline">The best choice your apps</p>
        </div>
        </hero-div>
    
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
        const data = await RestaurantSource.getRestaurant();
        const dataContainer = document.querySelector('#restaurants');
        data.forEach((restaurant) => {
            dataContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

// eslint-disable-next-line eol-last
export default Home;