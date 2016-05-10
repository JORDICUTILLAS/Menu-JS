$(document).ready(function(){

	$('#menu-container>nav>ul>li').click(function(){
		$(this).addClass('current-menu-item');
		$(this).siblings().removeClass('current-menu-item');
	});

   /*$('#menu-container>nav>ul>li').hover(function(){
      $(this).find('.sub-menu').fadeToggle(300);    
    });

   $('#menu-container>nav>ul>li').click(function(){
        $(this).find('.sub-menu').toggle(300);    
      });*/

	$('#mobile-button').click(function() {   
    $('#menu-container').show();
    $('#mobile-button').hide();
    $('#mobile-close').show();
  });

	$('#mobile-close').click(function(){    
    $('#menu-container').hide();    
    $('#mobile-close').hide();
    $('#mobile-button').show();
  });

  $(window).resize(function() {
    if($(window).width() >= 990) {
      $('#mobile-button,#mobile-close').hide();
      $('#menu-container>nav>ul>li').hover(function(){
      $(this).find('.sub-menu').fadeToggle(300);    
    });

    } else {
      if($('#menu-container').is(':visible')) {
        $('#mobile-close').show();
        $('#menu-container>nav>ul>li').click(function(){
        $(this).find('.sub-menu').toggle(300);    
      });
      } else {
        $('#mobile-button').show();
        $('#menu-container>nav>ul>li').click(function(){
        $(this).find('.sub-menu').toggle(300);    
      });
      }
    }
  });


  if($(window).width() >= 990) {    
    $('#menu-container>nav>ul>li').hover(function(){
      $(this).find('.sub-menu').fadeToggle(300);    
    });

  } else {
    if($('#menu-container').is(':visible')) {      
      $('#menu-container>nav>ul>li').click(function(){
        /*$('.sub-menu').find(':visible').children().toggle();*/
        $(this).find('.sub-menu').toggle(300);

      });
    } else {      
      $('#menu-container>nav>ul>li').click(function(){
        /*$('.sub-menu').find(':visible').children().toggle();*/
        $(this).find('.sub-menu').toggle(300);    
      });
    }
  }


});
