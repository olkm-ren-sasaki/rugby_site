$(function(){
  $('.humberger').click(function(){
    if($('.header').hasClass('open')){
      $('.header').removeClass('open')
    }else{
      $('.header').addClass('open')
    }
  });
  $('a[href^="#"]').click(function(){
    $('.header').removeClass('open');
  })

});