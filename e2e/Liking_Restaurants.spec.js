/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('.restaurants');
    I.see('You have not chosen your favorite restaurant', '.restaurant__empty__label');
});

Scenario('liking one restauant', async({ I }) => {
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
    // eslint-disable-next-line eol-last
});