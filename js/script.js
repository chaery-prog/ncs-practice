var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });

$(function () {


    const menuItem = $('header ul li')
    const subItem = $('header ul li>dl ')

    const tabItem = $('.content .tab-wrap span')
    const tabContent = $('.tab-content-wrap>ul')
    const popup = $('.popup')


    tabItem.click(function () {
        const i = $(this).index()
        console.log(i);
        tabItem.removeClass('on')
        $(this).addClass('on')
        tabContent.removeClass('active')
        tabContent.eq(i).addClass('active')

    })

    $('.notice').children('li').eq(0).click(function () {
        popup.fadeIn()//fadeOut()
    })

    $('.popup .close').eq(0).click(function () {
        popup.fadeOut()
    })

    let menuTimeout;
    menuItem.hover(
        function () {
            openSubMenu($(this))
        },
        function () {
            closeSubMenu($(this))
        }
    )

    function openSubMenu(menuItem) {
        // clearTimeout()은 JavaScript에서 setTimeout()으로 설정된 타이머를 취소하는 함수입니다.
        clearTimeout(menuTimeout)
        subItem.stop().slideUp()
        menuItem.children('dl').stop().slideDown()
    }
    function closeSubMenu(menuItem) {

        menuTimeout = setTimeout(function () {
            menuItem.children('dl').stop().slideUp()

        }, 300)
    }

})