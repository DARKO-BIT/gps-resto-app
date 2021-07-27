/* eslint-disable linebreak-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const assert = require('assert');

Feature('unLiking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

Scenario('unliking one restaurant', async({ I }) => {
    I.see('You have not chosen your favorite restaurant', '.restaurant__empty__label');
    I.amOnPage('/');
    I.seeElement('.restaurant-item__content h3 a');

    const firstRestaurant = locate('.restaurant-item__content h3 a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/like');
    I.seeElement('.restaurant-item');

    const likeRestaurantTitle = await I.grabTextFrom('.restaurant-item__content h3 a');
    assert.strictEqual(firstRestaurantTitle, likeRestaurantTitle);

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.restaurants');
    const unLikedRestaurant = await I.grabTextFrom('.restaurants');

    const emptyLabel = 'You have not chosen your favorite restaurant';
    assert.strictEqual(unLikedRestaurant, emptyLabel);
    // eslint-disable-next-line eol-last
});