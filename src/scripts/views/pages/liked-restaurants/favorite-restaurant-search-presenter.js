/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
class FavoriteRestaurantSearchPresenter {
    constructor() {
        this._listenToSearchRequestByUser();
    }

    _listenToSearchRequestByUser() {
        this._queryElement = document.getElementById('query');
        this._queryElement.addEventListener('change', (event) => {
            this._latestQuery = event.target.value;
        });
    }

    get _latestQuery() {
        return this._latestQuery;
    }
}

// eslint-disable-next-line eol-last
export default FavoriteRestaurantSearchPresenter;