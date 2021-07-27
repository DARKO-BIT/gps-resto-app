/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const NotificationHelper = {
    sendNotification({ title, options }) {
        if (!this._checkAvailability()) {
            console.log('Notification not supported in this browser');
            return;
        }

        if (!this._checkPermission()) {
            console.log('User did not yet granted permission');
            this._requestPermision();
            return;
        }

        this._showNotification({ title, options });
    },
    _checkAvailability() {
        return !!('notification' in window);
    },

    _checkPermission() {
        return Notification.permission === 'granted';
    },

    async _requestPermision() {
        const status = await Notification.requestPermission();

        if (status === 'denied') {
            console.log('Notification Denied');
        }

        if (status === 'default') {
            console.log('Permission Closed');
        }
    },

    async _showNotification({ title, options }) {
        const ServiceWorkerRegistration = await navigator.serviceWorker.ready;
        ServiceWorkerRegistration.showNotification(title, options);
    },

};

// eslint-disable-next-line eol-last
export default NotificationHelper;