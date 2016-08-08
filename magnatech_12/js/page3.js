$(document).ready(function(){
    $('.contBlocks .textBlocks .bl1 .tabsNav a').on('click', function(event) {
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
    });
    $(".owl_st1Top").css({
      left: -($(".owl_st1Top").width() - $(".p1BanerTop").width()) / 2 + 'px'
    });
    $(".buttonBl").css({
      marginLeft: -($(".buttonBl").width() - $(".partnerBlok").width()) / 2 + 'px'
    });
});




