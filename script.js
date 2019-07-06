$(function(){
  $('.header-right a').click(function(){
    var headerHeight = 65;
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position - headerHeight
    },'slow');
  });

  $('.title').click(function(){
    $(this).text('変更');
  });

});
