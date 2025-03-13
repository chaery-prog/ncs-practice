$(function(){
    let menuTimeout; // 메뉴 닫기 타이머 변수

    $('header ul>li, .sub_menu').mouseenter(function() {
        clearTimeout(menuTimeout); // 기존 타이머 제거
        $('.sub_menu').stop().slideDown(); // 애니메이션 중복 방지
    });

    $('header ul>li, .sub_menu').mouseleave(function() {
        menuTimeout = setTimeout(function() {
            $('.sub_menu').stop().slideUp();
        }, 1000); // 1초 후 메뉴 닫힘
    });


   
    
    $('.notice .tab >a').click(function(){
        const idx = $(this).index();
        $('.notice .tab >a').removeClass('On');
         $('.noList').removeClass('On');
        $(this).addClass('On');
        $('.noList').eq(idx).addClass('On');
        
    })
    
    
    $('.notice li:nth-child(1)').click(function(){
        $('.popup').fadeIn();
    });
    
    
    
    $('a.close').click(function(){
        $('.popup').fadeOut();
        
    })
        $('.go').click(function(){
                   window.location.href = $('#site').val()
                   })
  
  })
