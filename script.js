$(function(){
  $('.header-right a').click(function(e){
    e.preventDefault();
    $(this).css('color','white');
    var headerHeight = 65;
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position - headerHeight
    },'slow');
  });
});
