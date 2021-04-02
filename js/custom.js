$(function(){
$('.back-to-top').click(function(){

    $('html , boldy').animate({scrollTop:0} ,1500);
});

$(window).scroll(function(){

    var scrolling = $(this).scrollTop();
    if ( scrolling > 200 ){
        $('.back-to-top').fadeIn(500);
    }
   else{
    $('.back-to-top').fadeOut(500);
   }
   
   if ( scrolling > 100 ){
    $('.nav').addClass('bg');
    }
     else{
        $('.nav').removeClass('bg');
     }

});




//venobox part 



$(function(){

    $('.venobox').venobox(); 




});

//preloader part 

$(window).on('load' , function(){
    $('.preloader') .delay(1800).fadeOut(500);
    
    
    
    
    
    })
    
    //counter part 

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    
    
    
    
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
    
    
    
    
    
    });
    
    
    
    
        
        
        
    






