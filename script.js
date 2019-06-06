$(function(){

  $('.fa-bars').click(function(){
    $('.menu-modal').fadeIn();
    $('#close').fadeIn();
  });

  $('#close').click(function(){
    $('.menu-modal').fadeOut();
  });


});
