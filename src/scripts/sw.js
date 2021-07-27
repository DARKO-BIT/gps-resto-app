/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-restricted-globals */
/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;
self.addEventListener('install', (event) => {
    event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request));
    // eslint-disable-next-line eol-last
});