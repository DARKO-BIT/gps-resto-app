/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
    '/': Home, // default page
    '/home': Home,
    '/like': Like,
    '/detail/:id': Detail,

};

// eslint-disable-next-line eol-last
export default routes;