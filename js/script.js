var check = 1;
var target = $('.years, .customers, .workers'); // You counter class
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;

$(window).scroll(function() {
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem && check) {
    $('.years, .customers, .workers').each(function() {
      $(this).prop('Counter', -1).animate({
        Counter: $(this).text()
      },{
        duration: 3000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
    check = 0;
  }
});

$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger, .mobile-menu__nav').toggleClass('active');
    })
});