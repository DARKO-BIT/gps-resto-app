/* eslint-disable linebreak-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/extensions
import * as TestFactories from './helpers/testFactories.js';

// eslint-disable-next-line no-undef
describe('Liking A Restaurant', () => {
    // eslint-disable-next-line no-unused-vars
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    // eslint-disable-next-line space-before-function-paren
    // eslint-disable-next-line no-undef
    it('should show the like button when the restaurant has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 1,
        });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });

    it('should show the unlike button when the restaurant has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 1,
        });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
    });

    it('should be able to like the restaurant', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 1
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

        expect(restaurant).toEqual({ id: 1 });
        // eslint-disable-next-line eol-last
        FavoriteRestaurantIdb.deleteRestaurant(1);
        // eslint-disable-next-line eol-last
    });

    it('should not add a restaurant again when its already liked', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 1
        });

        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

        FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant when it has no id', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
    // eslint-disable-next-line eol-last
});