$(function(){
  $('.title').click(function(){
    if ($(this).text() === "eBooks") {
      window.open("https://apps.apple.com/jp/app/読書管理アプリ-ebooks/id1247081342");
    }else if($(this).text() === "アニメリスト"){
      window.open("https://apps.apple.com/jp/app/アニメリスト/id1202118481");
    }else if($(this).text() === "ポートフォリオサイト"){
      window.open('file:///Users/unicoonn1/Desktop/portfolio/unicoonn1.github.io/index.html#');
    }
  });


});
