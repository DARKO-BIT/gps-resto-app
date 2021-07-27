/* eslint-disable linebreak-style */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import { itActsAsfavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {

    getRestaurant(id) {
        if (!id) {
            return;
        }

        return favoriteRestaurants.find((restaurant) => restaurant.id === id);
    },

    getAllRestaurant() {
        return favoriteRestaurants;
    },

    putRestaurant(restaurant) {
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }

        if (this.getRestaurant(restaurant.id)) {
            return;
        }

        favoriteRestaurants.push(restaurant);
    },

    deleteRestaurant(id) {
        favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
    },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
    afterEach(() => favoriteRestaurants = []);

    itActsAsfavoriteRestaurantModel(FavoriteRestaurantArray);
    // eslint-disable-next-line eol-last
});