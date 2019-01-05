// ==UserScript==
// @name         Fix Pandora Width
// @namespace    https://niema.net/
// @version      0.1
// @description  With adblocking, Pandora has an empty right column. This fixes that gap
// @author       niemasd
// @include     http://*pandora.com/*
// @include     https://*pandora.com/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @run-at document-start
// @grant    GM_addStyle
// ==/UserScript==

//(function() {
//    'use strict';
//
//    // Your code here...
//})();

//$('.DisplayAdControl').remove();
GM_addStyle ( `
    .region-topBar--rightRail {
        width: 100% !important;
    }
    .region-main--rightRail {
        width: 100% !important;
    }
    .region-bottomBar--rightRail {
        width: 100% !important;
    }
` );
