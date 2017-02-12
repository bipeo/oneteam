jQuery(function() {
    

    function getSlick1Settings(){
  return {
            arrows: false,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 560,
                    settings: {
                        prevArrow: "<a class='slick-prev' href='#'><i class='fa fa-arrow-left' aria-hidden='true'></i></a>",
                        nextArrow: "<a class='slick-next' href='#'><i class='fa fa-arrow-right' aria-hidden='true'></i></a>",
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: true
                    },
                    breakpoint: 490,
                    settings: {
                        prevArrow: "<a class='slick-prev' href='#'><i class='fa fa-arrow-left' aria-hidden='true'></i></a>",
                        nextArrow: "<a class='slick-next' href='#'><i class='fa fa-arrow-right' aria-hidden='true'></i></a>",
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: true
                    }
                }
            ]
            
            
  }
        }
    
        
    function getSlick2Settings(){
  return {
            arrows: true,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 705,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
           
            
  }
        }
        

    

function parseCardsXml(data) {
  // console.log(data)
    $(data).find('notes').each(function(i,j)
    {           
   //  console.log($(j).data('town'))   
   //  console.log($(j).data('rus'))  

    $('.wrap_tabs_main').append('<div class="tab_item" data-inum="'+$(j).data('town')+'" id="'+$(j).data('town')+'" ><div class="slick_2 slick_slider"></div></div>')
    $(j).find('note').each(function(n,v){
        
         var cmt = $(v).attr("cit"),
            title = $(v).find('title').text(),
            pick = $(v).find('pick').text(),
            type = $(v).find('type').text(),
            price =$(v).find('price').text(),
            hours =$(v).find('hours').text(),
            min =  $(v).find('minutes').text();
            
            
            var timeFlag = '';
            var clockFlag = '';
            if(hours === "") {
                clockFlag = min;
                timeFlag = 'мин';
            } else {
                 clockFlag = hours;
                 timeFlag = 'час';
            }
 
            $('.slick_2').append('<div><div class="slick_item" >' +
                            '<img class="img_eksk" src="../pick/'+pick+'" alt="">' +
                            '<div class="wrap_for_height">' +
                               ' <strong class="name_1">'+
                                   title   +
                               ' </strong>' +
                              '<span class="descript_1">' +
                               '<em class="jtype">'+ type + '</em>'+
                               '<em class="jtown">, ' + $(j).data('rus') +'</em>' +
                              '</span>' +
                            '</div>' +
                            '<span class="time">от '+clockFlag+' '+timeFlag+'.</span> ' +
                            '<span class="price_eksk"><strong class="price_style">'+price+'</strong> '+
                            'руб<span class="symbol">&#92;</span>чел.</span> ' +
                           '<a class="btn_1" href="#">Забронировать</a>' +
                            '</div></div>');
                    
       $('.wrap_tabs_main .tab_item').eq(0).css({visibility: "visible", height:"auto"}).animate({opacity: 1.0 }); //addClass('change'); 
                    
             
                    
    });
   
    });
    
    
    
        function tabItem(th) {
    if(!th.hasClass('active')) {        
    var titem = $('.wrap_tabs_main .tab_item'); 
    $('.slick_town').removeClass('active');
    th.addClass('active');
    trimmed = $('.slick_town.active').attr('href').substring(1);
    console.log(trimmed);
    
        titem.each(function(k,v) {
    
    if($(v).data('inum') === trimmed ) {
            console.log('trimmid '+ trimmed)
            $('.tab_item').css({ visibility: "hidden", height:"0px"}).animate({opacity: 0 },100); //removeClass('change');
            $(v).css({visibility: "visible", height:"auto"}).animate({opacity: 1.0 },300); //addclass change
     } 
  }); 
        }
    }
    
    
     $('#slick_1 > div').each(function() {
         var st = $(this).find('.slick_town');
         st.on('click',function() {
         tabItem($(this));
            return false;
         })
    });
    
        }
  
  $.ajax({
    type: "GET" ,
    url: "../xmls/notes.xml" ,
    dataType: "xml" ,
 //  scriptCharset: "utf-8",
    success: function(data) {
    parseCardsXml(data);
    
    if(!$('.slick-slider').hasClass('slick-initialized')) {
    
    if ($('#slick_1').length) {
        
    $('#slick_1').show().slick(getSlick1Settings()); /* Initialize the slick again */
    }
     if ($('.slick_2').length) {
    $('.slick_2').slick(getSlick2Settings()); /* Initialize the slick again */
     }
    
        }
    }
    
        });
        
    
});