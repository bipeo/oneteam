function alignCenter(elem) {
    elem.css({
      left: ($(window).width() - elem.width()) / 2 + 'px',
      top: ($(window).height() - elem.height()) / 2 + 'px'
    })
}
function popUp()
{  
  alignCenter($('.popUp'));
  $('.popUp, .popUpBg').fadeIn(700);
}
function popDown()
{  
  $('.popUp,.popUpBg').fadeOut(700);
}
$(document).ready(function(){
    /*$('.contBlocks .textBlocks .bl1 .tabsNav a').on('click', function(event) {
      event.preventDefault();
      $('.bl1Tab').hide();
      var contactTarget = $(this).attr('href');
      $(contactTarget).show();
      $('.contBlocks .textBlocks .bl1 .tabsNav li').removeClass('active');
      $(this).closest("li").addClass('active');
    });
    $('.contBlocks .textBlocks .bl2 .tabsNav a').on('click', function(event) {
      event.preventDefault();
      $('.bl2Tab').hide();
      var contactTarget = $(this).attr('href');
      $(contactTarget).show();
      $('.contBlocks .textBlocks .bl2 .tabsNav li').removeClass('active');
      $(this).closest("li").addClass('active');
    });
    $('.relBlForTabs .tabsNav a').on('click', function(event) {
      event.preventDefault();
      $('.specificContBlok').hide();
      var contactTarget = $(this).attr('href');
      $(contactTarget).show();
      $('.relBlForTabs .tabsNav li').removeClass('active');
      $(this).closest("li").addClass('active');
    });*/
    $('.exit,.popUpBg').click(function() { 
      popDown(); 
    });

    $('body').keydown(function(eventObject){
      if (eventObject.which == 27)
         popDown();
    });
    $('.buttonBlock a').on('click', function(event) {
      event.preventDefault();
      popUp();
    });
    var $page = $('html, body');
      $('.content_page3 a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
    $(".owl_st1Top").css({
      left: -($(".owl_st1Top").width() - $(".p1BanerTop").width()) / 2 + 'px'
    });
    $(".buttonBl").css({
      marginLeft: -($(".buttonBl").width() - $(".partnerBlok").width()) / 2 + 'px'
    });
    $(".formP6 .blok").on('click', function(){
      $(".formP6 .blok").removeClass("active");
      $(this).addClass("active");
      $(this).children().eq(1).focus();
    });
    $('.mapWrap').mouseup(function (e){
    var div = $(".rightCol,.mapCont .centerCol");
    if (!div.is(e.target)&& div.has(e.target).length === 0) {
      $('.mapCont .centerCol').hide();
      $('.mapCont .centerCol>div').hide();
    }
  });
    $('.rightCol .blok').click(function() { 
      if($('body').width()<641)
      {
        return false;
      }
      $(".rightCol .blok").removeClass("active");
      $(this).addClass("active");
      var ThisId=$(this).attr('id');
      $('.mapCont .centerCol').fadeIn(300);
      $('.mapCont .centerCol>div').hide();
      $('.mapCont .centerCol>div.'+ThisId).fadeIn(300);
    });
    $(window).resize(function() {
      alignCenter($('.popUp'));
      $(".owl_st1Top").css({
      left: -($(".owl_st1Top").width() - $(".p1BanerTop").width()) / 2 + 'px'
      });
      $(".buttonBl").css({
        marginLeft: -($(".buttonBl").width() - $(".partnerBlok").width()) / 2 + 'px'
      });
    })
});




