$(document).ready(function(){
    
    
/* Sticky navigaton */
    
    $('.js--section-features').waypoint(function(direction){ 
        if (direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
        }, {
            offset:'60px;'
        }); 
   
    
    
 /* Scroll button */
    $('.js--scroll-to-plan').click(function() {
        
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
        
    });
    
    $('.js--scroll-to-start').click(function() {
        
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
        
    });
    
    
    /* Navigation scroll */
    
     $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
   
    /* Animations on scroll */
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset:'50%'
    });
    
        $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset:'50%'
    });
    
        $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset:'50%'
    });
    
        $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset:'50%'
    });
    
    
   /* Mobile navigation */ 
    
   /* $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        
        nav.slideToggle(200);
    });*/
    
       $( ".hamburger-menu-1" ).hide();
        $( ".js--main-nav" ).hide();
        $( ".hamburger-menu" ).click(function() {
        $( ".js--main-nav" ).slideToggle( "slow", function() {
        $( ".hamburger-menu" ).hide();
        $( ".hamburger-menu-1" ).show();
        });
        });

        $( ".hamburger-menu-1" ).click(function() {
        $( ".js--main-nav" ).slideToggle( "slow", function() {
        $( ".hamburger-menu-1" ).hide();
        $( ".hamburger-menu" ).show();
        });
        }); 
    
    
    /*GOOGLE MAP */

       var map = new GMaps({
            div: '.map',
            lat: 44.8062158, 
            lng: 20.4698683
        });
        map.addMarker({
            lat: 44.8062158, 
            lng: 20.4698683,
            title: 'Belgrade',
            infoWindow: {
            content: '<p>Belgrade downtown</p>'
            }
            });
    
    
});














