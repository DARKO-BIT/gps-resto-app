/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable no-prototype-builtins */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import { openDB } from 'idb';
import CONFIG from '../generals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
});

const FavoriteRestaurantIdb = {
    async putRestaurant(restaurant) {
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }

        // eslint-disable-next-line consistent-return
        return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    },

    async getAllRestaurant() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },

    async getRestaurant(id) {
        if (!id) {
            return;
        }

        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },

    async deleteRestaurant(id) {
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
};

// eslint-disable-next-line eol-last
export default FavoriteRestaurantIdb;