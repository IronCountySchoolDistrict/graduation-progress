import $ from 'jquery';

(function(){
  const creditsTemplate = $('#credits-template').html();
  const creditsSelect = $('table').eq(1);
  creditsSelect.before(creditsTemplate);
}());
