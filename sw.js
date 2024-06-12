var cacheName = 'Multikit';
var filesToCache = [
  './',
  './index.html',

  // ---------------------- CSS ---------------------- //
  // Vendor
  './assets/css/vendors/aos/dist/aos.css',
  './assets/css/vendors/swiper/swiper-bundle.min.css',
  './assets/css/vendors/swiper/swiper.min.css',
  './assets/css/vendors/bootstrap.css',
  './assets/css/vendors/bootstrap.rtl.min.css',
  // Main
  './assets/css/dark.css',
  './assets/css/hes-gallery.css',
  './assets/css/leaflet.css',
  './assets/css/mobiscroll.javascript.min.css',
  './assets/css/normalize.min.css',
  './assets/css/remixicon.css',
  './assets/css/style.css',
  './assets/css/swiper-bundle.min.css',

  //  ---------------------- JS  ---------------------- //
  // Bootstrap
  './assets/js/vendors/bootstrap/dist/js/bootstrap-alert.js',
  './assets/js/vendors/bootstrap/dist/js/bootstrap-toast.js',
  './assets/js/vendors/bootstrap/dist/js/bootstrap.bundle.min.js',
  // AOS
  './assets/js/vendors/aos/aos.js',
  // Swiper
  './assets/js/vendors/swiper/swiper-bundle.min.js',
  // Apex Chart
  './assets/js/vendors/apexcharts.min.js',
  // Main
  './assets/js/active-class.js',
  './assets/js/active-selection.js',
  './assets/js/country-dropdown.js',
  './assets/js/custom_swiper.js',
  './assets/js/custom-apexcharts.js',
  './assets/js/custom-map.js',
  './assets/js/flashlight-on.js',
  './assets/js/hide-show.js',
  './assets/js/homescreen-popup.js',
  './assets/js/image-change.js',
  './assets/js/leaflet.js',
  './assets/js/loader.js',
  './assets/js/messaging-2.js',
  './assets/js/messaging.js',
  './assets/js/mobiscroll.javascript.min.js',
  './assets/js/offcanvas-popup.js',
  './assets/js/open-camera.js',
  './assets/js/otp-4.js',
  './assets/js/otp-5.js',
  './assets/js/otp.js',
  './assets/js/password-show-hide.js',
  './assets/js/quantity-2.js',
  './assets/js/quantity.js',
  './assets/js/range-slider.js',
  './assets/js/script.js',
  './assets/js/search-open-close.js',
  './assets/js/sticky-header.js',
  './assets/js/story.js',
  './assets/js/swiper-bundle.min.js',
  './assets/js/theme-setting.js',
  './assets/js/timer1.js',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});