$(document).ready(function(){

  $(".btn-blue.like-btn").click(function(){
    gtag('event', 'demo_like', {
      'event_category': 'click',
      'event_label': 'feedback'});
    $(this).hide()
    function showPunch() {
        $('.puch__animation__container').fadeIn(100);
        }
    setTimeout(showPunch, 300);
    function cleanPunch() {
        $('.puch__animation__container').hide();
        }
    setTimeout(cleanPunch, 1000);
    function showButton() {
    	$('.btn-blue.like-btn').prop("disabled",true);
    	$('.btn-blue.like-btn').css({"opacity": '0.5',
                  						'cursor': 'default'});
    	$('.btn-blue.like-btn').fadeIn(100)
    }
    setTimeout(showButton, 1000);
  });

  $(".btn-blue.like-btn_mobile").click(function(){
    gtag('event', 'demo_like', {
      'event_category': 'click',
      'event_label': 'feedback'});
    $(this).prop("disabled",true);
    $(this).css("opacity",'0.5');
    $(this).hide();
    function showPunch() {
        $('.puch__animation__container_mobile').fadeIn(100);
        }
    setTimeout(showPunch, 300);
    function cleanPunch() {
        $('.puch__animation__container_mobile').hide();
        }
    setTimeout(cleanPunch, 1000);
    function showButton() {
    	$('.btn-blue.like-btn_mobile').prop("disabled",true);
    	$('.btn-blue.like-btn_mobile').css({"opacity": '0.5',
                  						'cursor': 'default'});
    	$('.btn-blue.like-btn_mobile').fadeIn(100)
    }
    setTimeout(showButton, 1000);
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

  $(".poll__invitation").click(function(){
    gtag('event', 'poll', {
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

$("body").on("mouseover", ".technology-item", function(){
  $(this).addClass('item__animated');
  $('.item__animated .technology__video_frame').removeClass('active_pic');
  $('.item__animated .technology__item__video').addClass('active_pic');
  $('.item__animated .technology__item__video')[0].play();
  $('.item__animated .technology__item__video').attr('loop', 'loop');
});
$("body").on("mouseleave", ".technology-item", function(){
  $('.item__animated .technology__item__video').removeAttr('loop');
  $(this).removeClass('item__animated');
})

const activeCardChange = function() {
  $('.card__active').hide();
  $('.card__active .technology__card__video').removeAttr('loop');
  $('.technology-item__active').removeClass('technology-item__active');
  $('.card__active').removeClass('card__active');
}

const activeMobItemChange = function() {
  $('.item__active .technology__video_mobile').removeAttr('loop');
  $('.item__active').removeClass('item__active');
}

$('#3d_rec_item').click(function() {
  activeCardChange();
  $('#3d_rec_card').addClass('card__active');
  $('#3d_rec_card').fadeIn(400);
  $('#3d_rec_card .technology__card__video')[0].play();
  $('#3d_rec_card .technology__card__video').attr('loop', 'loop');
  $(this).addClass('technology-item__active');
});

$('#simp_gam_item').click(function() {
  activeCardChange();
  $('#simp_gam_card').addClass('card__active');
  $('#simp_gam_card').fadeIn(400);
  $('#simp_gam_card .technology__card__video')[0].play();
  $('#simp_gam_card .technology__card__video').attr('loop', 'loop');
  $(this).addClass('technology-item__active');
});


$('#2d_ads_item').click(function() {
  activeCardChange();
  $('#2d_ads_card').addClass('card__active');
  $('#2d_ads_card').fadeIn(400);
  $('#2d_ads_card .technology__card__video')[0].play();
  $('#2d_ads_card .technology__card__video').attr('loop', 'loop');
  $(this).addClass('technology-item__active');
});

$('#virt_adv_item').click(function() {
  activeCardChange();
  $('#virt_adv_card').addClass('card__active');
  $('#virt_adv_card').fadeIn(400);
  $('#virt_adv_card .technology__card__video')[0].play();
  $('#virt_adv_card .technology__card__video').attr('loop', 'loop');
  $(this).addClass('technology-item__active');
});

$('#vis_eff_item').click(function() {
  activeCardChange();
  $('#vis_eff_card').addClass('card__active');
  $('#vis_eff_card').fadeIn(400);
  $('#vis_eff_card .technology__card__video')[0].play();
  $('#vis_eff_card .technology__card__video').attr('loop', 'loop');
  $(this).addClass('technology-item__active');
});

$('#3d_inf_item').click(function() {
  activeCardChange();
  $('#3d_inf_card').addClass('card__active');
  $('#3d_inf_card').fadeIn(400);
  $('#3d_inf_card .technology__card__video')[0].play();
  $('#3d_inf_card .technology__card__video').attr('loop', 'loop');
  $(this).addClass('technology-item__active');
});

$('#3d_ads_item').click(function() {
  activeCardChange();
  $('#3d_ads_card').addClass('card__active');
  $('#3d_ads_card').fadeIn(400);
  $('#3d_ads_card .technology__card__video')[0].play();
  $('#3d_ads_card .technology__card__video').attr('loop', 'loop');
  $(this).addClass('technology-item__active');
});

$('#adv_gam_item').click(function() {
  activeCardChange();
  $('#adv_gam_card').addClass('card__active');
  $('#adv_gam_card').fadeIn(400);
  $('#adv_gam_card .technology__card__video')[0].play();
  $('#adv_gam_card .technology__card__video').attr('loop', 'loop');
  $(this).addClass('technology-item__active');
});

$('#fi_anal_item').click(function() {
  activeCardChange();
  $('#fi_anal_card').addClass('card__active');
  $('#fi_anal_card').fadeIn(400);
  $('#fi_anal_card .technology__card__video')[0].play();
  $('#fi_anal_card .technology__card__video').attr('loop', 'loop');
  $(this).addClass('technology-item__active');
});

$(document).ready(function(){

  var owl = $('.owl-carousel');
  owl.owlCarousel();

  owl.on('dragged.owl.carousel', function(event) {
  	var slider_center = $('.owl-item.active.center').children();

    activeMobItemChange();

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
      $('.3d_rec_item_mob').addClass('item__active');
    } 
    if (slider_center.hasClass('simp_gam_item_mob')) {
      activeCardChange();
  		$('#simp_gam_card').addClass('card__active');
  		$('#simp_gam_card').fadeIn(400);
      $('.simp_gam_item_mob').addClass('item__active');
    } 
    if (slider_center.hasClass('2d_ads_item_mob')) {
      activeCardChange();
      $('#2d_ads_card').addClass('card__active');
      $('#2d_ads_card').fadeIn(400);
      $('.2d_ads_item_mob').addClass('item__active');
    } 
    if (slider_center.hasClass('virt_adv_item_mob')) {
      activeCardChange();
      $('#virt_adv_card').addClass('card__active');
      $('#virt_adv_card').fadeIn(400);
      $('.virt_adv_item_mob').addClass('item__active');
    } 
    if (slider_center.hasClass('vis_eff_item_mob')) {
      activeCardChange();
      $('#vis_eff_card').addClass('card__active');
      $('#vis_eff_card').fadeIn(400);
      $('.vis_eff_item_mob').addClass('item__active');
    } 
    if (slider_center.hasClass('3d_inf_item_mob')) {
      activeCardChange();
      $('#3d_inf_card').addClass('card__active');
      $('#3d_inf_card').fadeIn(400);
      $('.3d_inf_item_mob').addClass('item__active');
    } 
    if (slider_center.hasClass('3d_ads_item_mob')) {
      activeCardChange();
      $('#3d_ads_card').addClass('card__active');
      $('#3d_ads_card').fadeIn(400);
      $('.3d_ads_item_mob').addClass('item__active');
    }
    if (slider_center.hasClass('adv_gam_item_mob')) {
      activeCardChange();
      $('#adv_gam_card').addClass('card__active');
      $('#adv_gam_card').fadeIn(400);
      $('.adv_gam_item_mob').addClass('item__active');
    }
    if (slider_center.hasClass('fi_anal_item_mob')) {
      activeCardChange();
      $('#fi_anal_card').addClass('card__active');
      $('#fi_anal_card').fadeIn(400);
      $('.fi_anal_item_mob').addClass('item__active');
    }
    if (slider_center.hasClass('item__active')) {
      $('.item__active .technology__video_frame').removeClass('active_pic');
      $('.item__active .technology__video_mobile').addClass('active_pic');
      $('.item__active .technology__video_mobile')[0].play();
      $('.item__active .technology__video_mobile')[1].play();
      $('.item__active .technology__video_mobile').attr('loop', 'loop');
    }
  })
});

$('#octagon_link').click(function(){
  var tech_status = $('.technology__wrap_right').css('display')
  if (tech_status == 'block') {
    $('#octagon_link').attr('href', '#technology')
  } else {
    $('#octagon_link').attr('href', '#technology-mob')
  }
});
