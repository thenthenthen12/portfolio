$(function(){
    $('.slide__scroll-link').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 500)
      })
      
    $('.footer__link-top').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 500)
      })
    $('.gnb .inner a').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 500)
      })
      


        

    //header 스크립트


    window.addEventListener("wheel", function (e) {
        e.preventDefault();
    }, { passive: false });
    
    var page = 1;
    
    var $html = $("html");

    var lastPage = $("section").length;

    $html.animate({ scrollTop: 0 }, 10);


    $(window).on("wheel", function (e) {

        if ($html.is(":animated")) return;

        if (e.originalEvent.deltaY > 0) {
            if (page == lastPage) return;

            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;

            page--;
        }
        var posTop = (page - 1) * $(window).height();

        $html.animate({ scrollTop: posTop });

    });



    $('.nav-btn').click(function(){
        $('.gnb').toggleClass('on')
        $('header .logo').toggleClass('on')
        $(this).toggleClass('on')
    })

    $('.gnb .inner span:nth-child(1)').click(function(){
        $('body, html').animate({
            scrollTop: 953
        }, 1500)
    })
    $('.gnb .inner span:nth-child(2)').click(function(){
        $('body, html').animate({
            scrollTop: 2859
        }, 1500)
    })
    $('.gnb .inner span:nth-child(3)').click(function(){
        $('body, html').animate({
            scrollTop: 3812
        }, 1500)
    })
    $('.gnb .inner span:nth-child(4)').click(function(){
        $('body, html').animate({
            scrollTop: 4765
        }, 1500)
    })
    $('.gnb .inner span:nth-child(5)').click(function(){
        $('body, html').animate({
            scrollTop: 5718
        }, 1500)
    })
    $('.gnb .inner span:nth-child(6)').click(function(){
        $('body, html').animate({
            scrollTop: 6671
        }, 1500)
    })
    $('.gnb .inner span:nth-child(7)').click(function(){
        $('body, html').animate({
            scrollTop: 7624
        }, 1500)
    })
    $('.gnb .inner span:nth-child(8)').click(function(){
        $('body, html').animate({
            scrollTop: 8577
        }, 1500)
    })
    $('.gnb .inner span:nth-child(9)').click(function(){
        $('body, html').animate({
            scrollTop: 9530
        }, 1500)
    })
    $('.gnb .inner span:nth-child(10)').click(function(){
        $('body, html').animate({
            scrollTop: 10483
        }, 1500)
    })
    $('.gnb .inner span:nth-child(11)').click(function(){
        $('body, html').animate({
            scrollTop: 11436
        }, 1500)
    })
    $('.gnb .inner span:nth-child(12)').click(function(){
        $('body, html').animate({
            scrollTop: 12389
        }, 1500)
    })
    
    console.log($('.slide--1').offset().top)
    console.log($('.slide--3').offset().top)
    console.log($('.slide--4').offset().top)
    console.log($('.slide--5').offset().top)
    console.log($('.slide--6').offset().top)
    console.log($('.slide--7').offset().top)
    console.log($('.slide--8').offset().top)
    console.log($('.slide--9').offset().top)
    console.log($('.slide--10').offset().top)
    console.log($('.slide--11').offset().top)
    console.log($('.slide--12').offset().top)
    console.log($('.slide--13').offset().top)

    //slide 0 스크립트
    
    $('.slide--0 .intro__txt .text:nth-child(1)').click(function(){
        $(this).addClass('on')
        $(this).next().addClass('on')
        $('.slide--0 .left1').removeClass('on')
        $('.slide--0 .left1').addClass('on1')
        $('.slide--0 .left2').addClass('on1')
        $('.intro__title').addClass('on')

    })

    $('.intro').mouseenter(function(){
        $('.slide--0 .left1').addClass('on')
        $('.slide--0 .left2').addClass('on')
        $('.intro__title').addClass('on1')
        $('.slide--0 .intro__txt').addClass('on1')
    })









    //slide 1 스크립트
    $('.slide--1 .col--2 > div .img> div').click(function(){
        $('.slide--1 .col--2 > div .img > div .info').addClass('on')
        $('.slide--1 .col--2 > div .img').addClass('on')
        $(this).addClass('on')
        $(this).siblings().addClass('on1')
        $('.slide--1 >span').addClass('on')
    })
    $('.slide--1 > span').click(function(){
        $('.slide--1 .col--2 > div .img > div').removeClass('on')
        $('.slide--1 .col--2 > div .img > div').removeClass('on1')
        $('.slide--1 .col--2 > div .img > div .info').removeClass('on')
        $('.slide--1 .col--2 > div .img').removeClass('on')
        $(this).removeClass('on')

    })





    $('.slide').mouseenter(function(){
        $(this).addClass('on1')
    })
    $('.slide').mouseleave(function(){
        $(this).removeClass('on1')
    })



    

})