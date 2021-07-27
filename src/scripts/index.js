/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './generals/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './generals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
    // eslint-disable-next-line eol-last
    WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
    // eslint-disable-next-line eol-last
});