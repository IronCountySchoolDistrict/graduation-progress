/*global $j*/
(function() {
    'use strict';
    var creditsTemplate = $j($j('#credits-template').html());
    var creditsSelect = $j('table').eq(1);
    creditsTemplate.insertBefore(creditsSelect);
}());