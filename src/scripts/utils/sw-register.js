/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

// eslint-disable-next-line space-before-function-paren
const swRegister = async() => {
    if ('serviceWorker' in navigator) {
        await runtime.register();
        return;
    }
    // eslint-disable-next-line no-console
    console.log('Service worker not supported in this browser');
};

// eslint-disable-next-line eol-last
export default swRegister;