$(function(){
  $('.header-right a').click(function(e){
    e.preventDefault();
    var headerHeight = 65;
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position - headerHeight,
      'background-color':'rgba(255,255,255,1)'
    },'slow');
  });
});
