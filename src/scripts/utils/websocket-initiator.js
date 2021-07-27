/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import NotificationHelper from './notification-helper';
import CONFIG from '../generals/config';

const WebSocketInitiator = {
    init(url) {
        const webSocket = new WebSocket(url);
        webSocket.onmessage = this._onMessageHandler;
    },

    _onMessageHandler(message) {
        const restaurant = JSON.parse(message.data);
        NotificationHelper.sendNotification({
            // eslint-disable-next-line no-undef
            title: `${restaurant.name} is on restaurant!`,
            options: {
                // eslint-disable-next-line no-undef
                body: restaurant.overview,
                // eslint-disable-next-line no-undef
                Image: `${CONFIG.BASE_IMAGE_URL + restaurant.picturedId_path}`,
            },
        });
    },
};

// eslint-disable-next-line eol-last
export default WebSocketInitiator;