 $(document).ready(function(){

$('.depth2,.header_bg').hide();

/* $(".gnb > li").hover(function(){
   $(".depth2").stop().fadeToggle();
}); */


$(".gnb > li").hover(function(){
        $(this).find('.depth2,.header_bg').stop().fadeToggle();
      
});






/* $(".gnb > li").click(function(){
        var indexNum = $(this).index();

        $(".depth2").eq(indexNum).fadeIn().siblings().fadeOut();
}); 
 */


   










});/*문서준비완료 */