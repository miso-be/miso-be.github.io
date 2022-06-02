$(function(){
   $('.top_banner i').on('click', function(){
       $('.top_banner').slideUp();
   });

   $('.main_slider').on('afterChange', function(e,s,c){
    console.log(e,s,c)
    var TG = $('.slick-current')
    TG.addClass('xxx').siblings().removeClass('xxx')
    $('.num').text((c ? c+1 : 1) + '/' + s.slideCount);
    });

$('.main_slider').slick({
    // arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover:false,
    // 버튼 나오게 하는 코드
    dots: true,
});


})