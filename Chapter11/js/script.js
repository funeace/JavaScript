//画面を開いた時は、tab1なので、それ以外は見えないようにしている 
$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click',function(){
  $('#tab-contents .tab').hide();
  $('#tab-menu .active').removeClass('active');
  $(this).addClass('active');
  $($(this).attr("href")).show();
  return false;
});

