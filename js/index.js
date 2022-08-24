/* 수원뉴스 */
$(function(){
    var current = 0;
    var newslist = $('.news_wrap>ul>li');
    var time;

    function set() {
        time = setInterval(function () {
            var prev = newslist.eq(current);

            move(prev, 0, '-100%');
            current++;
            if (current == newslist.size()) {
                current = 0;
            }
            var next = newslist.eq(current);
            move(next, '100%', 0);
        }, 2000);
    }

    set();

    $('.news_wrap').hover(function () {
        clearInterval(time);
    }, function () {
        set();
    });

    function move(tg, start, end) {
        tg.css('top', start).stop().animate({
            top: end
        }, 300);
    }
}); 

/* 검색창 */
$(function(){
    $('.search input').focusin(function(){
        $(this).css({outline:'2px dashed #253b4d'})
    });
    $('.search input').focusout(function(){
        $(this).css({outline:'0'})
    });

    
});

/* 메뉴 */
$(function(){
    $('nav>.depth1>li').mouseenter(function(){
        $(this).find('.sub_bg').stop().slideDown(500);
    });
    $('nav>.depth1>li').mouseleave(function(){
        $(this).find('.sub_bg').stop().slideUp(500);    
    });
    
});

/* 모바일 메뉴 */
$(function(){
    $('.hamburger').click(function(){
        if($('.hamburger').hasClass('active')){
            $(this).removeClass('active');
            $('.m_nav').css('display', 'none');
            
        }else{
            $(this).addClass('active');
            $('.m_nav').css('display', 'block');   
        }
    });
});

$(function(){
    $('.m_nav_depth1>li').click(function(){
        $(this).find('.m_nav_depth2').slideToggle(600);
        $(this).siblings().find('.m_nav_depth2').slideUp(600);
    });
});

/* 배너 */
$(function(){

    var banner = $('.slide_Img>.slide_Img_wrap>li'); 
    var button = $('.btList>li'); 
    var leftBtn = $('.bt_wrap .prev'); 
    var rightBtn = $('.bt_wrap .next'); 
    var banner_current = 0; 
    var setIntervalId; 

    timer(); 

    function timer(){
        setIntervalId = setInterval(function(){

            var bn_prev = banner.eq(banner_current);
            var pn = button.eq(banner_current);

            bn_move(bn_prev, 0 , '-100%');
            pn.removeClass('on');

            banner_current++;

            if(banner_current == banner.size()){banner_current=0}

            var bn_next = banner.eq(banner_current);
            var pnn = button.eq(banner_current);

            bn_move(bn_next, '100%', 0);
            pnn.addClass('on');

        }, 3000);                
    };

    function bn_move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},500);
    }

    /* 동그라미 버튼을 클릭했을 때 */
    button.on({click:function(){
        var tg = $(this);
        var i = tg.index(); 

        button.removeClass('on'); 
        tg.addClass('on'); 

        move1(i); 

       }
    });

    function move1(i){
        if(banner_current==i) return 

        var banner_currentEl = banner.eq(banner_current); 
        var nextEl = banner.eq(i) 

        banner_currentEl.css({left:0}).stop().animate({left:'-100%'},500) 
        nextEl.css({left:'100%'}).stop().animate({left:0},500)

        banner_current = i; 
    }

    //호버시 멈추게 하는 기능

    $('.slide_Img').on({
        mouseover: function(){ 
            clearInterval(setIntervalId);
        }, mouseout: function(){
            timer();
        }
        
    });

    /* 화살표 클릭 */

    rightBtn.click(function(){

        var bn_prev=banner.eq(banner_current);
        var pn = button.eq(banner_current);

        bn_move(bn_prev, 0, '-100%');
        pn.removeClass('on');

        banner_current++; 

        if(banner_current == banner.size()){banner_current=0;}

        var bn_next=banner.eq(banner_current);
        var pnn = button.eq(banner_current);

        bn_move(bn_next, '100%', 0);
        pnn.addClass('on');

        return;

    });

        leftBtn.click(function(){

            var bn_prev=banner.eq(banner_current);
            var pn = button.eq(banner_current);

            bn_move(bn_prev, 0, '100%');
            pn.removeClass('on');

            banner_current--;

            if(banner_current==-banner.size()){banner_current=0;}

            var bn_next=banner.eq(banner_current);
            var pnn = button.eq(banner_current);

            bn_move(bn_next, '-100%', 0);
            pnn.addClass('on');

            return; 


        });

        function bn_move(bn_tg, start, end){ 
            bn_tg.css('left', start).stop().animate({left:end},600)
        }
    });

/* 탭메뉴 게시판 */
$(function(){
    var tabMenu = $('.board_tab > li');
    var tab_contents = $('.board_tab_cont ul');

    tab_contents.hide().eq(0).show();

    tabMenu.click(function(event){
        event.preventDefault();

        var target = $(this);
        var tab_i = target.index();
        
        tabMenu.removeClass('on');
        target.addClass('on');

        tab_contents.css('display','none'); 
        tab_contents.eq(tab_i).css('display','block');
    })
});
    
/* calendar:hover */
/* $('.calendar_open').click(function(){
    var clickNum = 1;
    if(clickNum==1){
        $(this).css('backgroundColor','#253b4d');
        $(this).find('i').css('color','#fff');
        clickNum = 0;
    }else{
        $(this).css('backgroundColor','#fff');
        $(this).find('i').css('color','#333');
    }
});  */
/* $('.calendar_open').focusin(function(){
    $(this).css('backgroundColor','#253b4d');
    $(this).find('i').css('color','#fff');
});
$('.calendar_open').focusout(function(){
    $(this).css('backgroundColor','#fff');
    $(this).find('i').css('color','#333');
}); */

/* 달력 */
$(function(){
    $('.calendar_open input').datepicker();
})


/* calendar slide */
$(function(){

    var calendar = $('.calendarWrap>ul');
    var leftBtn = $('.slide_calendar_prev');
    var rightBtn = $('.slide_calendar_next');
    var calendarCurrent = 0; //인덱스 번호

    /* 화살표 클릭 */
    rightBtn.click(function(){

        var laseweek=calendar.eq(calendarCurrent);

        moveweek(laseweek, 0, '-100%');

        calendarCurrent++; // 0->1->2

        if(calendarCurrent == calendar.size()){calendarCurrent=0;}

        var nextweek=calendar.eq(calendarCurrent);

        moveweek(nextweek, '100%', 0); //파라미터에 전달할 전달인자값

        return; //종료



    });

        leftBtn.click(function(){

            var laseweek=calendar.eq(calendarCurrent);

            moveweek(laseweek, 0, '100%');

            calendarCurrent--; //2->1->0

            if(calendarCurrent==-calendar.size()){calendarCurrent=0;}

            var nextweek=calendar.eq(calendarCurrent);

            moveweek(nextweek, '-100%', 0);

            return; //함수실행 종료



        });

        function moveweek(wtg, start, end){ //파라미터(매개변수)
            wtg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'}) //점점 빨라지도록
        }


});


//tab culture_slide
$(function(){

    var tabMenu2 = $('.slide_calendar li');
    var tab_contents2 = $('.slide_culture .culture');

    tab_contents2.hide().eq(0).show();

    tabMenu2.click(function(event){
        event.preventDefault();

        var target2 = $(this);
        var tab_i2 = target2.index();
        
        tabMenu2.removeClass('on');
        target2.addClass('on');

        tab_contents2.css('display','none'); 
        tab_contents2.eq(tab_i2).css('display','block');
    })

    
    var slide1 = $('.slide1');
    var slide2 = $('.slide2');
    var slide3 = $('.slide3');
    var slide4 = $('.slide4');
    var slide5 = $('.slide5');
    var slide6 = $('.slide6');
    var slide7 = $('.slide7');
    var slide8 = $('.slide8');
    var slide9 = $('.slide9');
    var slide10 = $('.slide10');
    var slide11 = $('.slide11');
    var slide12 = $('.slide12');
    var slide13 = $('.slide13');
    var slide14 = $('.slide14');
    var imgWidth = $('.slide_wrap>ul>li').width(); 

    var setItervalSlide1;
    var setItervalSlide2;
    var setItervalSlide3;
    var setItervalSlide4;
    var setItervalSlide5;
    var setItervalSlide6;
    var setItervalSlide7;
    var setItervalSlide8;
    var setItervalSlide9;
    var setItervalSlide10;
    var setItervalSlide11;
    var setItervalSlide12;
    var setItervalSlide13;
    var setItervalSlide14;

    Slide1();
    function Slide1(){
        setItervalSlide1 = setInterval(function(){
            slide1.stop().animate({'left':-imgWidth},800,function(){
                $('.slide1>li:first').insertAfter('.slide1>li:last');
                slide1.css('left',0)
            })
        },3000);
    }    
    $('.slide1, .slide_culture_prev1, .slide_culture_next1').hover(function(){
        clearInterval(setItervalSlide1);
    }, function(){
        Slide1();
    });
    function Next1(){
        slide1.stop().animate({'left':-imgWidth},800,function(){
            $('.slide1>li:first').insertAfter('.slide1>li:last');
            slide1.css('left',0)
        });
    }
    function Prev1(){
        $('.slide1>li:last').insertBefore('.slide1>li:first');
        slide1.css('left',-imgWidth);
        slide1.animate({left:0},800);
    }
    $('.slide_culture_prev1').click(function(){
        Prev1();
    });
    $('.slide_culture_next1').click(function(){
        Next1();
    });

    Slide2();
    function Slide2(){
        setItervalSlide2 = setInterval(function(){
            slide2.stop().animate({'left':-imgWidth},800,function(){
                $('.slide2>li:first').insertAfter('.slide2>li:last');
                slide2.css('left',0)
            })
        },3000);
    }    
    $('.slide2, .slide_culture_prev2, .slide_culture_next2').hover(function(){
        clearInterval(setItervalSlide2);
    }, function(){
        Slide2();
    });
    function Next2(){
        slide2.stop().animate({'left':-imgWidth},800,function(){
            $('.slide2>li:first').insertAfter('.slide2>li:last');
            slide2.css('left',0)
        });
    }
    function Prev2(){
        $('.slide2>li:last').insertBefore('.slide2>li:first');
        slide2.css('left',-imgWidth);
        slide2.animate({left:0},800);
    }
    $('.slide_culture_prev2').click(function(){
        Prev2();
    });
    $('.slide_culture_next2').click(function(){
        Next2();
    });

    Slide3();
    function Slide3(){
        setItervalSlide3 = setInterval(function(){
            slide3.stop().animate({'left':-imgWidth},800,function(){
                $('.slide3>li:first').insertAfter('.slide3>li:last');
                slide3.css('left',0)
            })
        },3000);
    }    
    $('.slide3, .slide_culture_prev3, .slide_culture_next3').hover(function(){
        clearInterval(setItervalSlide3);
    }, function(){
        Slide3();
    });
    function Next3(){
        slide3.stop().animate({'left':-imgWidth},800,function(){
            $('.slide3>li:first').insertAfter('.slide3>li:last');
            slide3.css('left',0)
        });
    }
    function Prev3(){
        $('.slide3>li:last').insertBefore('.slide3>li:first');
        slide3.css('left',-imgWidth);
        slide3.animate({left:0},800);
    }
    $('.slide_culture_prev3').click(function(){
        Prev3();
    });
    $('.slide_culture_next3').click(function(){
        Next3();
    });

    Slide4();
    function Slide4(){
        setItervalSlide4 = setInterval(function(){
            slide4.stop().animate({'left':-imgWidth},800,function(){
                $('.slide4>li:first').insertAfter('.slide4>li:last');
                slide4.css('left',0)
            })
        },3000);
    }    
    $('.slide4, .slide_culture_prev4, .slide_culture_next4').hover(function(){
        clearInterval(setItervalSlide4);
    }, function(){
        Slide4();
    });
    function Next4(){
        slide4.stop().animate({'left':-imgWidth},800,function(){
            $('.slide4>li:first').insertAfter('.slide4>li:last');
            slide4.css('left',0)
        });
    }
    function Prev4(){
        $('.slide4>li:last').insertBefore('.slide4>li:first');
        slide4.css('left',-imgWidth);
        slide4.animate({left:0},800);
    }
    $('.slide_culture_prev4').click(function(){
        Prev4();
    });
    $('.slide_culture_next4').click(function(){
        Next4();
    });

    Slide5();
    function Slide5(){
        setItervalSlide5 = setInterval(function(){
            slide5.stop().animate({'left':-imgWidth},800,function(){
                $('.slide5>li:first').insertAfter('.slide5>li:last');
                slide5.css('left',0)
            })
        },3000);
    }    
    $('.slide5, .slide_culture_prev5, .slide_culture_next5').hover(function(){
        clearInterval(setItervalSlide5);
    }, function(){
        Slide5();
    });
    function Next5(){
        slide5.stop().animate({'left':-imgWidth},800,function(){
            $('.slide5>li:first').insertAfter('.slide5>li:last');
            slide5.css('left',0)
        });
    }
    function Prev5(){
        $('.slide5>li:last').insertBefore('.slide5>li:first');
        slide5.css('left',-imgWidth);
        slide5.animate({left:0},800);
    }
    $('.slide_culture_prev5').click(function(){
        Prev5();
    });
    $('.slide_culture_next5').click(function(){
        Next5();
    });

    Slide6();
    function Slide6(){
        setItervalSlide6 = setInterval(function(){
            slide6.stop().animate({'left':-imgWidth},800,function(){
                $('.slide6>li:first').insertAfter('.slide6>li:last');
                slide6.css('left',0)
            })
        },3000);
    }    
    $('.slide6, .slide_culture_prev6, .slide_culture_next6').hover(function(){
        clearInterval(setItervalSlide6);
    }, function(){
        Slide6();
    });
    function Next6(){
        slide6.stop().animate({'left':-imgWidth},800,function(){
            $('.slide6>li:first').insertAfter('.slide6>li:last');
            slide6.css('left',0)
        });
    }
    function Prev6(){
        $('.slide6>li:last').insertBefore('.slide6>li:first');
        slide6.css('left',-imgWidth);
        slide6.animate({left:0},800);
    }
    $('.slide_culture_prev6').click(function(){
        Prev6();
    });
    $('.slide_culture_next6').click(function(){
        Next6();
    });

    Slide7();
    function Slide7(){
        setItervalSlide7 = setInterval(function(){
            slide7.stop().animate({'left':-imgWidth},800,function(){
                $('.slide7>li:first').insertAfter('.slide7>li:last');
                slide7.css('left',0)
            })
        },3000);
    }    
    $('.slide7, .slide_culture_prev7, .slide_culture_next7').hover(function(){
        clearInterval(setItervalSlide7);
    }, function(){
        Slide7();
    });
    function Next7(){
        slide7.stop().animate({'left':-imgWidth},800,function(){
            $('.slide7>li:first').insertAfter('.slide7>li:last');
            slide7.css('left',0)
        });
    }
    function Prev7(){
        $('.slide7>li:last').insertBefore('.slide7>li:first');
        slide7.css('left',-imgWidth);
        slide7.animate({left:0},800);
    }
    $('.slide_culture_prev7').click(function(){
        Prev7();
    });
    $('.slide_culture_next7').click(function(){
        Next7();
    });

    Slide8();
    function Slide8(){
        setItervalSlide8 = setInterval(function(){
            slide8.stop().animate({'left':-imgWidth},800,function(){
                $('.slide8>li:first').insertAfter('.slide8>li:last');
                slide8.css('left',0)
            })
        },3000);
    }    
    $('.slide8, .slide_culture_prev8, .slide_culture_next8').hover(function(){
        clearInterval(setItervalSlide8);
    }, function(){
        Slide8();
    });
    function Next8(){
        slide8.stop().animate({'left':-imgWidth},800,function(){
            $('.slide8>li:first').insertAfter('.slide8>li:last');
            slide8.css('left',0)
        });
    }
    function Prev8(){
        $('.slide8>li:last').insertBefore('.slide8>li:first');
        slide8.css('left',-imgWidth);
        slide8.animate({left:0},800);
    }
    $('.slide_culture_prev8').click(function(){
        Prev8();
    });
    $('.slide_culture_next8').click(function(){
        Next8();
    });

    Slide9();
    function Slide9(){
        setItervalSlide9 = setInterval(function(){
            slide9.stop().animate({'left':-imgWidth},800,function(){
                $('.slide9>li:first').insertAfter('.slide9>li:last');
                slide9.css('left',0)
            })
        },3000);
    }    
    $('.slide9, .slide_culture_prev9, .slide_culture_next9').hover(function(){
        clearInterval(setItervalSlide9);
    }, function(){
        Slide9();
    });
    function Next9(){
        slide9.stop().animate({'left':-imgWidth},800,function(){
            $('.slide9>li:first').insertAfter('.slide9>li:last');
            slide9.css('left',0)
        });
    }
    function Prev9(){
        $('.slide9>li:last').insertBefore('.slide9>li:first');
        slide9.css('left',-imgWidth);
        slide9.animate({left:0},800);
    }
    $('.slide_culture_prev9').click(function(){
        Prev9();
    });
    $('.slide_culture_next9').click(function(){
        Next9();
    });

    Slide10();
    function Slide10(){
        setItervalSlide10 = setInterval(function(){
            slide10.stop().animate({'left':-imgWidth},800,function(){
                $('.slide10>li:first').insertAfter('.slide10>li:last');
                slide10.css('left',0)
            })
        },3000);
    }    
    $('.slide10, .slide_culture_prev10, .slide_culture_next10').hover(function(){
        clearInterval(setItervalSlide10);
    }, function(){
        Slide10();
    });
    function Next10(){
        slide10.stop().animate({'left':-imgWidth},800,function(){
            $('.slide10>li:first').insertAfter('.slide10>li:last');
            slide10.css('left',0)
        });
    }
    function Prev10(){
        $('.slide10>li:last').insertBefore('.slide10>li:first');
        slide10.css('left',-imgWidth);
        slide10.animate({left:0},800);
    }
    $('.slide_culture_prev10').click(function(){
        Prev10();
    });
    $('.slide_culture_next10').click(function(){
        Next10();
    });

    Slide11();
    function Slide11(){
        setItervalSlide11 = setInterval(function(){
            slide11.stop().animate({'left':-imgWidth},800,function(){
                $('.slide11>li:first').insertAfter('.slide11>li:last');
                slide11.css('left',0)
            })
        },3000);
    }    
    $('.slide11, .slide_culture_prev11, .slide_culture_next11').hover(function(){
        clearInterval(setItervalSlide11);
    }, function(){
        Slide11();
    });
    function Next11(){
        slide11.stop().animate({'left':-imgWidth},800,function(){
            $('.slide11>li:first').insertAfter('.slide11>li:last');
            slide11.css('left',0)
        });
    }
    function Prev11(){
        $('.slide11>li:last').insertBefore('.slide11>li:first');
        slide11.css('left',-imgWidth);
        slide11.animate({left:0},800);
    }
    $('.slide_culture_prev11').click(function(){
        Prev11();
    });
    $('.slide_culture_next11').click(function(){
        Next11();
    });

    Slide12();
    function Slide12(){
        setItervalSlide12 = setInterval(function(){
            slide12.stop().animate({'left':-imgWidth},800,function(){
                $('.slide12>li:first').insertAfter('.slide12>li:last');
                slide12.css('left',0)
            })
        },3000);
    }    
    $('.slide12, .slide_culture_prev12, .slide_culture_next12').hover(function(){
        clearInterval(setItervalSlide12);
    }, function(){
        Slide12();
    });
    function Next12(){
        slide12.stop().animate({'left':-imgWidth},800,function(){
            $('.slide12>li:first').insertAfter('.slide12>li:last');
            slide12.css('left',0)
        });
    }
    function Prev12(){
        $('.slide12>li:last').insertBefore('.slide12>li:first');
        slide12.css('left',-imgWidth);
        slide12.animate({left:0},800);
    }
    $('.slide_culture_prev12').click(function(){
        Prev12();
    });
    $('.slide_culture_next12').click(function(){
        Next12();
    });

    Slide13();
    function Slide13(){
        setItervalSlide13 = setInterval(function(){
            slide13.stop().animate({'left':-imgWidth},800,function(){
                $('.slide13>li:first').insertAfter('.slide13>li:last');
                slide13.css('left',0)
            })
        },3000);
    }    
    $('.slide13, .slide_culture_prev13, .slide_culture_next13').hover(function(){
        clearInterval(setItervalSlide13);
    }, function(){
        Slide13();
    });
    function Next13(){
        slide13.stop().animate({'left':-imgWidth},800,function(){
            $('.slide13>li:first').insertAfter('.slide13>li:last');
            slide13.css('left',0)
        });
    }
    function Prev13(){
        $('.slide13>li:last').insertBefore('.slide13>li:first');
        slide13.css('left',-imgWidth);
        slide13.animate({left:0},800);
    }
    $('.slide_culture_prev13').click(function(){
        Prev13();
    });
    $('.slide_culture_next13').click(function(){
        Next13();
    });

    Slide14();
    function Slide14(){
        setItervalSlide14 = setInterval(function(){
            slide14.stop().animate({'left':-imgWidth},800,function(){
                $('.slide14>li:first').insertAfter('.slide14>li:last');
                slide14.css('left',0)
            })
        },3000);
    }    
    $('.slide14, .slide_culture_prev14, .slide_culture_next14').hover(function(){
        clearInterval(setItervalSlide14);
    }, function(){
        Slide14();
    });
    function Next14(){
        slide14.stop().animate({'left':-imgWidth},800,function(){
            $('.slide14>li:first').insertAfter('.slide14>li:last');
            slide14.css('left',0)
        });
    }
    function Prev14(){
        $('.slide14>li:last').insertBefore('.slide14>li:first');
        slide14.css('left',-imgWidth);
        slide14.animate({left:0},800);
    }
    $('.slide_culture_prev14').click(function(){
        Prev14();
    });
    $('.slide_culture_next14').click(function(){
        Next14();
    });
    
});


/* sns slider */
$(function(){
    var slider_sns = $('.suwoncultural>.sns_contents>ul>li');
    var slider_current = 0;
    var repeat1;
    var nextBtn = $('.photo_arrow>i.next_pt');
    var prevBtn = $('.photo_arrow>i.prev_pt');
    var stopBtn = $('.photo_arrow>i.stop_pt');
    var playBtn = $('.photo_arrow>i.play_pt');
    var p = $('.photo_number>p');

    var slider_sns_wrap = $('.suwoncultural>.sns_contents');
    var photo_control = $('.photo_control');

    slider_sns_wrap.mouseover(function(){
        photo_control.animate({top:-50});
    });
    slider_sns_wrap.mouseleave(function(){
        photo_control.animate({top:0});
    });

    slider_suwoncultural(); 

    function slider_suwoncultural(){
        repeat1 = setInterval(function(){

            var sl_prev = slider_sns.eq(slider_current);
            var sl_num = p.eq(slider_current);

            sl_move(sl_prev, 0 , '-100%');
            sl_num.removeClass('now');

            slider_current++;

            if(slider_current == slider_sns.size()){slider_current=0}

            var sl_next = slider_sns.eq(slider_current);
            var sl_numm = p.eq(slider_current);

            sl_move(sl_next, '100%', 0);
            sl_numm.addClass('now');

        }, 3000);                
    };

    function sl_move(img, start, end){
        img.css('left', start).stop().animate({left:end},{duration:500,ease:'easeOutCubic'});
    }

    $('.suwoncultural').on('mouseover', function(){
        clearInterval(repeat1);
    });
    $('.suwoncultural').on('mouseleave', function(){
        slider_suwoncultural()
    });

    $(stopBtn).on('click', function(){
        clearInterval(repeat1);
    });
    $(playBtn).on('click', function(){
        slider_suwoncultural()
    });


    nextBtn.click(function(){

        var sl_prev = slider_sns.eq(slider_current);
        var sl_num = p.eq(slider_current);

        sl_move(sl_prev,0,'-100%');
        sl_num.removeClass('now');

        slider_current++;

        if(slider_current == slider_sns.size()){slider_current=0}
        
        var sl_next = slider_sns.eq(slider_current);
        var sl_numm = p.eq(slider_current);

        sl_move(sl_next,'100%',0);
        sl_numm.addClass('now');

        return false; 
    });

    prevBtn.click(function(){

        var sl_prev = slider_sns.eq(slider_current);
        var sl_num = p.eq(slider_current);

        sl_move(sl_prev,0,'100%');
        sl_num.removeClass('now');

        slider_current--;

        if(slider_current == slider_sns.size()){slider_current=0}
        
        var sl_next = slider_sns.eq(slider_current);
        var sl_numm = p.eq(slider_current);

        sl_move(sl_next,'-100%',0);
        sl_numm.addClass('now');

        return false;

    });
});

/* sns -insta */
$(function(){
    var menu = $('.insta .sns_contents ul > li');
    menu.find('.hover').hide();


    menu.hover(function(){
        var menutg = $(this);
        var menuindex = menutg.find('.hover');
        menuindex.fadeIn(500);

    }, function(){
        var menutg = $(this);
        var menuindex = menutg.find('.hover');
        menuindex.fadeOut(500);
    });

});

/* culture_icon */
$(function(){
    $('.culture_site_list>li').on('mouseover', function(){
        $(this).parent('ul').prev('.icon_pt').css('backgroundColor','#3a609d');
        $(this).parent('ul').prev('.icon_pt').find('img').css('filter','brightness(0)');
        $(this).parent('ul').prev('.icon_pt').find('img').css('filter','invert(1)');
    });
    $('.culture_site_list>li').on('mouseleave', function(){
        $(this).parent('ul').prev('.icon_pt').css('backgroundColor','#fff');  
        $(this).parent('ul').prev('.icon_pt').find('img').css('filter','brightness(1)');
        $(this).parent('ul').prev('.icon_pt').find('img').css('filter','invert(0)'); 
    });
        
});

/* fotoer */
$(function(){

    $('.site1>ul>li').click(function(){
        var height = $('.site1>ul>li').find('.sitelink').height();

        if(height == 0){
            $('.site1>ul>li').find('.sitelink').css('height','200');
        }else{
            $('.site1>ul>li').find('.sitelink').css('height','0');
        }
        
        $('.site2>ul>li').find('.sitelink').css('height','0');

    });


    $('.site2>ul>li').click(function(){
        var height = $('.site2>ul>li').find('.sitelink').height();

        if(height == 0){
            $('.site2>ul>li').find('.sitelink').css('height','200');
        }else{
            $('.site2>ul>li').find('.sitelink').css('height','0');
        }

        $('.site1>ul>li').find('.sitelink').css('height','0');
    });

});
