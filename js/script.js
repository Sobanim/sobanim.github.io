$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger, .mobile-menu__nav').toggleClass('active');
        // $('.mobile-menu__nav').slideToggle();
    })
});