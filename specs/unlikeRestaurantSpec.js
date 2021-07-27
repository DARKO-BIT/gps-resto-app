/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line spaced-comment
/*import LikeButtonInitiator from '../src/scripts/utils/like-button-presenter';*/
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';
// eslint-disable-next-line import/extensions
import * as TestFactories from './helpers/testFactories.js';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restaurant', () => {
    beforeEach(async() => {
        addLikeButtonContainer();
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    });

    afterEach(async() => {
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should display unlike widget when the restaurant has been liked', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeTruthy();
        // eslint-disable-next-line padded-blocks
    });

    it('should not display like widget when the restaurant has been liked', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeFalsy();
    });

    it('should be able to remove liked restaurant from the list', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });

    // eslint-disable-next-line eol-last
    it('should not throw error if the unliked restaurants is not in the list', async() => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

        await FavoriteRestaurantIdb.deleteRestaurant(1);

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
    // eslint-disable-next-line eol-last
});