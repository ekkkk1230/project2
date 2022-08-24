$(function(){
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
            }, 800);
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
            $(this).find('.sub_bg').slideDown(500);
        });
        $('nav>.depth1>li').mouseleave(function(){
            $(this).find('.sub_bg').slideUp(500);    
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

    /* 페이지 정보 */
    $(function(){
    
        $('.page_info_depth ul').slideUp(0); 

        $('.page_info_depth1 li').on({ 
            click:function(){
                $('.page_info_depth1 ul').stop().slideToggle(500); 
                $(this).next().stop().slideDown(500);
            },
            focusout:function(){
                $('.page_info_depth1 ul').stop().slideUp(500); 
                $(this).next().stop().slideDown(500);
            }
        });
    
        $('.page_info_depth2 li').on({ 
            click:function(){
                $('.page_info_depth2 ul').stop().slideToggle(500); 
                $(this).next().stop().slideDown(500);
            },
            focusout:function(){
                $('.page_info_depth2 ul').stop().slideUp(500); 
                $(this).next().stop().slideDown(500);
            }
        });
    
        $('.page_info_depth3 li').on({ 
            click:function(){
                $('.page_info_depth3 ul').stop().slideToggle(500); 
                $(this).next().stop().slideDown(500);
            },
            focusout:function(){
                $('.page_info_depth3 ul').stop().slideUp(500); 
                $(this).next().stop().slideDown(500);
            }
        });
            
    });
    
    
    /* 사진 슬라이드 */
    $(function(){
        var banner = $('.photo>ul>li');
        var nextBtn = $('.photo_arrow>i.next_pt');
        var prevBtn = $('.photo_arrow>i.prev_pt');
        var stopBtn = $('.photo_arrow>i.stop_pt');
        var playBtn = $('.photo_arrow>i.play_pt');
        var bn_current = 0;
        var setIntervalId00;
        var p = $('.photo_number>p');
    
        timer();
    
        function timer(){
            setIntervalId00 = setInterval(function(){
                var bn_prev = banner.eq(bn_current);
                var bn_num = p.eq(bn_current);
    
                slide(bn_prev,0,'-100%');
                bn_num.removeClass('now');
    
                bn_current++;
    
                if(bn_current==banner.size()){bn_current=0;}
    
                var next = banner.eq(bn_current);
                var bn_numm = p.eq(bn_current);
    
                slide(next,'100%',0);
                bn_numm.addClass('now');
    
            },3000)
        }
    
        function slide(tg,start,end){
            tg.css('left',start).stop().animate({left:end},{duration:500,ease:'easeOutCubic'})
        }
    
    
        $('.photo_wrap').on('mouseover', function(){
            clearInterval(setIntervalId00);
        });
        $('.photo_wrap').on('mouseleave', function(){
            timer()
        });
    
        $(stopBtn).on('click', function(){
            clearInterval(setIntervalId00);
        });
        $(playBtn).on('click', function(){
            timer()
        });
    
    
        nextBtn.click(function(){
    
            var bn_prev = banner.eq(bn_current);
            var bn_num = p.eq(bn_current);
    
            slide(bn_prev,0,'-100%');
            bn_num.removeClass('now');
    
            bn_current++;
    
            if(bn_current==banner.size()){bn_current=0;}
            
            var next = banner.eq(bn_current);
            var bn_numm = p.eq(bn_current);
    
            slide(next,'100%',0);
            bn_numm.addClass('now');
    
            return false; 
        });
    
        prevBtn.click(function(){
    
            var bn_prev = banner.eq(bn_current);
            var bn_num = p.eq(bn_current);
    
            slide(bn_prev,0,'100%');
            bn_num.removeClass('now');
    
            bn_current--;
    
            if(bn_current== -banner.size()){bn_current=0;}
            
            var next = banner.eq(bn_current);
            var bn_numm = p.eq(bn_current);
    
            slide(next,'-100%',0);
            bn_numm.addClass('now');
    
            return false;
    
        });
    });
    
    /* 문화사업 안내 탭 */
    $(function(){
        var tabPage = $('.btn > div');
        var tab_contents = $('.item2 > ul.tab');
    
        tab_contents.hide().eq(1).show();
    
        tabPage.click(function(event){
            event.preventDefault();
    
            var target = $(this);
            var i = target.index();
            
            tabPage.removeClass('on');
            target.addClass('on');
    
            tab_contents.css('display','none'); 
            tab_contents.eq(i).css('display','flex');
        })
    });
        
    /* 문화사업 안내 버튼 */
    $(function(){
        $('.btn1').on("click",function(){
            $(this).find('img').attr("src", "./img/btn_tab1_on.gif");
            $('.btn2').find('img').attr("src", "./img/btn_tab2_off.gif");
        })
        $('.btn2').on("click",function(){
            $(this).find('img').attr("src", "./img/btn_tab2_on.gif");
            $('.btn1').find('img').attr("src", "./img/btn_tab1_off.gif");
        })
        
    });
    
    /* 문화사업 안내 */
    $(function(){
        $('.tab1>li').mouseenter(function(){
            $(this).find('.title_info').animate({top:'67%'});
        });
        $('.tab1>li').mouseleave(function(){
            $(this).find('.title_info').animate({top:'100%'});
        });
    });
    
    
    /* 게시판 페이지네이션 */
    
    allPagination();
    
    function allPagination(){
        var pageNum = 1;
        
        $('#all_pagination').twbsPagination({		
            totalPages: 10,
            visiblePages: 10,
            
            first: '<i class="fa-solid fa-angles-left"></i>',
            next: '<i class="fa-solid fa-angle-right"></i>',
            prev: '<i class="fa-solid fa-angle-left"></i>',
            last: '<i class="fa-solid fa-angles-right"></i>',
          
            onPageClick: function (event, page) {
               
                $('#all_content_page'+pageNum).hide(); 
                $('#all_content_page'+page).show(); 
                pageNum = page; 
            }
        });
    }
    
    
    
    
    /* 로그인페이지 버튼 */
    $(function(){
        var share_bt = $('.share');
    
        $(function(){
            $(share_bt).click(function(){
                $(this).next().slideToggle(400);
            });
        });
    });
    
    
    /* 로그인 페이지 input */
    $(function(){
        $('.input_box input').focusin(function(){
            $(this).css({border:'2px dashed #253b4d'})
        });
        $('.input_box input').focusout(function(){
            $(this).css({border:'1px solid #ddd'})
        });
    });
    

    /* 팝업 */
    $('.popup .url').click(function(){
        $('#pop').css('display','block');
    });
       
        $('#pop button').click(function(){
            $('#pop').css('display','none');
        });

    
    /* footer site list */
    $(function(){
    
        $('.site1>ul>li').click(function(){
            var height = $('.site1>ul>li').find('.sitelink').height();
    
            
            if(height == 0){
                $('.site1>ul>li').find('.sitelink').css('height','200');
            }
            else{
                $('.site1>ul>li').find('.sitelink').css('height','0');
            }
            $('.site2>ul>li').find('.sitelink').css('height','0');
    
        });
        });
    
    $(function(){
        $('.site2>ul>li').click(function(){
            var height = $('.site2>ul>li').find('.sitelink').height();
    
            if(height == 0){
                $('.site2>ul>li').find('.sitelink').css('height','200');
            }
            else{
                $('.site2>ul>li').find('.sitelink').css('height','0');
            }
            $('.site1>ul>li').find('.sitelink').css('height','0');
        });
    });
    
  
        



    
});