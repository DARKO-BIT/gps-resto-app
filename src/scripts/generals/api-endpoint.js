/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
    HOME: `${CONFIG.BASE_URL}list`,
    DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

// eslint-disable-next-line eol-last
export default API_ENDPOINT;