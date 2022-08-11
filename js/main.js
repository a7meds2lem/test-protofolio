// ========================== typed.js =============================
var options = {
    strings: ['Freelancer.', 'Developer.'],
    typeSpeed: 70,
    loop: true,
  loopCount: Infinity,
  backDelay: 700,
  smartBackspace: true,
  backSpeed: 60,
  };
  var typed = new Typed('.typing', options);
//   =================================    =================================

// ============counter================================

$(document).ready(function($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:2,  
    stagePadding:10,
    dotsEach:true,
  });
});


// ======================================= mixitup =====================
var mixer = mixitup('.forMixitUp');
// ============================= =============================== 
$('.buttons .btn1').click(function(){
   $(this).css({'backgroundColor' : '#09c' , 'color' : '#fff'});
   $(this).siblings().css({'backgroundColor' : '#fff', 'color' : '#09c' })
})
// ====================================== nav ===================
let addoffset = $('#aboutMe').offset().top
// console.log(addoffset);
$(window).scroll(function(){
  if($(window).scrollTop() >= addoffset-80)
  {
    $('.navbar').css({'backgroundColor' : '#000' , 'transition' : '1s'})
  }
  else{
    $('.navbar').css({'backgroundColor' : 'transparent' , 'transition' : '1s'})
  }
})
// ====================================== top button ==========================================
let btnoffset = $('#resume').offset().top
$(window).scroll(function(){
   if($(window).scrollTop() >= btnoffset)
   {
      $('.upArrow ').css({'opacity' : 1 , 'transition' : 'all .3s'})
   }
   else{
    $('.upArrow ').css({'opacity' : 0 , 'transition' : 'all .3s'})
  }
})