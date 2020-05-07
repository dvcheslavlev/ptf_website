$(document).ready(function(){

  $(".btn-blue.like-btn").click(function(){
    // gtag('event', 'demo_like', {
    //   'event_category': 'click',
    //   'event_label': 'feedback'});
    // $(this).prop("disabled",true);
    // $(this).css({"opacity": '0.5',
    //               'cursor': 'default'});
    $(this).fadeOut(100);
    function showPunch() {
        $('.puch__animation__container').fadeIn(100);
        }
    setTimeout(showPunch, 300);
    function cleanPunch() {
        $('.puch__animation__container').hide();
        }
    setTimeout(cleanPunch, 1000);
  });

  $(".btn-blue.like-btn_mobile").click(function(){
    gtag('event', 'demo_like', {
      'event_category': 'click',
      'event_label': 'feedback'});
    $(this).prop("disabled",true);
    $(this).css("opacity",'0.5');
  });

  $(".youtube__frame").click(function(){
    gtag('event', 'youtube_demo_preview', {
      'event_category': 'click',
      'event_label': 'feedback'});
  });

  $(".feedback__submit").click(function(){
    gtag('event', 'feedback_submit', {
      'event_category': 'click',
      'event_label': 'feedback'});
  });

  $('.feedback-form__wrap').on('submit', function(e){
                   // validation code here
      e.preventDefault();
      data = $(".feedback-form__wrap").serialize();
      jQuery.post("script/info.php", data);
      $('#feedback__text').hide();
      $(".feedback__submit").hide();
      $(".feedback-form__wrap").append("<p class='thanks head-secondary'>Thanks for leaving us your valuable feedback</p>");
    });
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    responsiveClass:true,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        450:{
            items:3
        },
        577:{
            items:4,
        }
    }
});

$('.mobile-nav__btn').click(function() {
  var menu_status = $('.header__navbar_mobile').css('display')
  if (menu_status == 'block') {
    $('#home').animate({
      padding:'50px 0 0 0'
    }, 200);

    } else {
      $('#home').animate({
      padding:'110px 0 0 0'
    }, 200);
  }
  $('.header__navbar_mobile').slideToggle(200);
});

//   вот так работает на соответствущих десктопных клетках но не работает на мобильных.... мобильные объекты (клетки) 
// это #simp_gam_mob и #3d_rec_mob соот-но

$('#3d_rec').click(function() {
  $('.card__active').hide();
  $('.technology-item__active').removeClass('technology-item__active');
  $('.card__active').removeClass('card__active');
  $('#3d_rec_card').addClass('card__active');
  $('#3d_rec_card').fadeIn(400);
  $(this).addClass('technology-item__active');
});

$('#3d_rec_mob').click(function() {
  $('.card__active').hide();
  $('.card__active').removeClass('card__active');
  $('#3d_rec_card').addClass('card__active');
  $('#3d_rec_card').fadeIn(400);
});

$('#simp_gam').click(function() {
  $('.card__active').hide();
  $('.technology-item__active').removeClass('technology-item__active');
  $('.card__active').removeClass('card__active');
  $('#simp_gam_card').addClass('card__active');
  $('#simp_gam_card').fadeIn(400);
  $(this).addClass('technology-item__active');
});

$('#simp_gam_mob').click(function() {
  $('.card__active').hide();
  $('.card__active').removeClass('card__active');
  $('#simp_gam_card').addClass('card__active');
  $('#simp_gam_card').fadeIn(400);
});
