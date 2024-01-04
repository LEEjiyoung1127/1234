$(document).ready(function(){



    $(window).scroll(function(){
        if ($(this).scrollTop() > 2000) {
            $("#new .new_img,#new .new_txt h2,#new .new_txt h3,#new .new_txt p").addClass('on');
        } else {
            $("#new .new_img,#new .new_txt h2,#new .new_txt h3,#new .new_txt p").removeClass('on');
        }
     
   
    });

    $(window).scroll(function(){
      if ($(this).scrollTop() > 4000 ) {
          $("#promotion").addClass('on');
        }else{
          $("#promotion").removeClass('on')
        }
   
 
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 1000 ) {
        $("#main_colleation").addClass('on');
      }else{
        $("#main_colleation").removeClass('on')
      }
 

});




  
 $('.prd_txt_list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.prd',
  autoplay:true

 

});
$('.prd').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.prd_txt_list',
  dots: true,
  
  focusOnSelect: true,
  autoplay:true
});
/* 제품 슬라이드 */

				




    const mb = new Swiper('.mb', {

      speed: 1000,
      loop: true,
      autoplay : {
        delay : 5000,  // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
      },
      
      pagination : {
        el : '.swiper-pagination',  // 버튼 태그 설정
        type : 'bullets',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
        clickable : true,  // 버튼 클릭 여부
        },
        navigation : {   
          nextEl : '.swiper-button-next',  // 다음 버튼
          prevEl : '.swiper-button-prev',  // 이전 버튼
          },
          

     });

  /* 메인배너 */


  



     const colat = new Swiper('.colat', {
      
      speed: 1000,
      loop: true,
        centeredSlides:true,
        autoplay : {
        delay : 5000,  // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
      },
      

      breakpoints: {
       
        1024: {  // 가로해상도가 1024px 이상일 경우
          slidesPerView: 3,
          spaceBetween: 30,
        },

        900:{
          slidesPerView: 2,
          spaceBetween: 30,
        }
      },
    });






    

});/* 문서준비 */