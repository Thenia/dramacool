// ==UserScript==
// @name         Dramacool subbed only
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide non subbed shows in dramacool
// @author       Thenia
// @match            // https://*.watchasian.*
// @match        https://www1.watchasian.id/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    // Get all the <li> elements with class "switch-block list-episode-item"
    const liElements = document.querySelectorAll('ul.switch-block.list-episode-item li');

    // Loop through each <li> element
    for (let i = 0; i < liElements.length; i++) {
        const liElement = liElements[i];

        // Check if the <li> element or any of its child elements contain the class "RAW"
        const hasRawClass = liElement.classList.contains('RAW') || liElement.querySelector('.RAW') !== null;

        if (hasRawClass) {
            // Hide the <li> element
            liElement.style.display = 'none';
        }
    }

})();
