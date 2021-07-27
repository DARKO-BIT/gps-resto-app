/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import API_ENDPOINT from '../generals/api-endpoint';

class RestaurantSource {
    static async getRestaurant() {
        const response = await fetch(API_ENDPOINT.HOME);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }
}

// eslint-disable-next-line eol-last
export default RestaurantSource;