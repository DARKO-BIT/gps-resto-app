/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable linebreak-style */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb';

const createLikeButtonPresenterWithRestaurant = async(restaurant) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
    });
};

// eslint-disable-next-line eol-last
// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line eol-last
export { createLikeButtonPresenterWithRestaurant };