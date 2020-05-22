$(document).ready(function(){

  $(".btn-blue.like-btn").click(function(){
    gtag('event', 'demo_like', {
      'event_category': 'click',
      'event_label': 'feedback'});
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
    // $(this).prop("disabled",true);
    // $(this).css("opacity",'0.5');
    $(this).fadeOut(100);
    function showPunch() {
        $('.puch__animation__container_mobile').fadeIn(100);
        }
    setTimeout(showPunch, 300);
    function cleanPunch() {
        $('.puch__animation__container_mobile').hide();
        }
    setTimeout(cleanPunch, 1000);
  });

  $(".demo__wrap").click(function(){
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

$("body").on("mouseover", ".technology__card__video", function(){
  this.play();
  $(this).attr('loop', 'loop');
});
$("body").on("mouseleave", ".technology__card__video", function(){
  $(this).removeAttr('loop');
})

const activeCardChange = function() {
  $('.card__active').hide();
  $('.technology-item__active').removeClass('technology-item__active');
  $('.card__active').removeClass('card__active');
}

$('#3d_rec_item').click(function() {
  activeCardChange();
  $('#3d_rec_card').addClass('card__active');
  $('#3d_rec_card').fadeIn(400);
  $(this).addClass('technology-item__active');
});

$('#simp_gam_item').click(function() {
  activeCardChange();
  $('#simp_gam_card').addClass('card__active');
  $('#simp_gam_card').fadeIn(400);
  $(this).addClass('technology-item__active');
});


$('#2d_ads_item').click(function() {
  activeCardChange();
  $('#2d_ads_card').addClass('card__active');
  $('#2d_ads_card').fadeIn(400);
  $(this).addClass('technology-item__active');
});

$('#virt_adv_item').click(function() {
  activeCardChange();
  $('#virt_adv_card').addClass('card__active');
  $('#virt_adv_card').fadeIn(400);
  $(this).addClass('technology-item__active');
});

$('#virt_adv_item').hover(function() {
  $('#virt_adv_item .item__img_active').toggleClass('img_passive');
  $('#virt_adv_item .item__img_passive').toggleClass('img_passive');
});

$('#vis_eff_item').click(function() {
  activeCardChange();
  $('#vis_eff_card').addClass('card__active');
  $('#vis_eff_card').fadeIn(400);
  $(this).addClass('technology-item__active');
});

$('#3d_inf_item').click(function() {
  activeCardChange();
  $('#3d_inf_card').addClass('card__active');
  $('#3d_inf_card').fadeIn(400);
  $(this).addClass('technology-item__active');
});

$('#3d_ads_item').click(function() {
  activeCardChange();
  $('#3d_ads_card').addClass('card__active');
  $('#3d_ads_card').fadeIn(400);
  $(this).addClass('technology-item__active');
});

$('#adv_gam_item').click(function() {
  activeCardChange();
  $('#adv_gam_card').addClass('card__active');
  $('#adv_gam_card').fadeIn(400);
  $(this).addClass('technology-item__active');
});

$('#fi_anal_item').click(function() {
  activeCardChange();
  $('#fi_anal_card').addClass('card__active');
  $('#fi_anal_card').fadeIn(400);
  $(this).addClass('technology-item__active');
});

$(document).ready(function(){

  var owl = $('.owl-carousel');
  owl.owlCarousel();

  owl.on('dragged.owl.carousel', function(event) {
  	var slider_center = $('.owl-item.active.center').children();

    if (slider_center.hasClass('3d_rec_item_mob') || slider_center.hasClass('adv_gam_item_mob') || slider_center.hasClass('fi_anal_item_mob')) {
      $('.slider__1__head').hide();
      $('.slider__2__head').show();
    } else if (slider_center.hasClass('simp_gam_item_mob') || slider_center.hasClass('2d_ads_item_mob') || slider_center.hasClass('virt_adv_item_mob') 
    || slider_center.hasClass('vis_eff_item_mob') || slider_center.hasClass('3d_ads_item_mob') || slider_center.hasClass('3d_inf_item_mob')) {
      $('.slider__2__head').hide();
      $('.slider__1__head').show();
    }

    if (slider_center.hasClass('3d_rec_item_mob')) {
      activeCardChange();
      $('#3d_rec_card').addClass('card__active');
      $('#3d_rec_card').fadeIn(400);
    } 
    else if (slider_center.hasClass('simp_gam_item_mob')) {
      activeCardChange();
  		$('#simp_gam_card').addClass('card__active');
  		$('#simp_gam_card').fadeIn(400);
    } 
    else if (slider_center.hasClass('2d_ads_item_mob')) {
      activeCardChange();
      $('#2d_ads_card').addClass('card__active');
      $('#2d_ads_card').fadeIn(400);
    } 
    else if (slider_center.hasClass('virt_adv_item_mob')) {
      activeCardChange();
      $('#virt_adv_card').addClass('card__active');
      $('#virt_adv_card').fadeIn(400);
    } 
    else if (slider_center.hasClass('vis_eff_item_mob')) {
      activeCardChange();
      $('#vis_eff_card').addClass('card__active');
      $('#vis_eff_card').fadeIn(400);
    } 
    else if (slider_center.hasClass('3d_inf_item_mob')) {
      activeCardChange();
      $('#3d_inf_card').addClass('card__active');
      $('#3d_inf_card').fadeIn(400);
    } 
    else if (slider_center.hasClass('3d_ads_item_mob')) {
      activeCardChange();
      $('#3d_ads_card').addClass('card__active');
      $('#3d_ads_card').fadeIn(400);
    }
    else if (slider_center.hasClass('adv_gam_item_mob')) {
      activeCardChange();
      $('#adv_gam_card').addClass('card__active');
      $('#adv_gam_card').fadeIn(400);
    }
    else if (slider_center.hasClass('fi_anal_item_mob')) {
      activeCardChange();
      $('#fi_anal_card').addClass('card__active');
      $('#fi_anal_card').fadeIn(400);
    }
  })
});




