/* eslint-disable linebreak-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import { itActsAsfavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

// eslint-disable-next-line no-undef
describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async() => {
        (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async(restaurant) => {
            await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
        });
    });

    itActsAsfavoriteRestaurantModel(FavoriteRestaurantIdb);
    // eslint-disable-next-line eol-last
});