/*====================
  Theme Setting Option Js
======================*/
let elements = document.querySelectorAll('.theme-icon');

elements.forEach(i => {
  i.addEventListener('click', function () {
    elements.forEach(j => j.classList.toggle('show'));
  });
});


$(window).on('load', function () {
  'use strict';
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js');
  }
});

