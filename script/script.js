$(document).ready(function(){

  $(".btn-blue.like-btn").click(function(){
    gtag('event', 'demo_like', {
      'event_category': 'click',
      'event_label': 'feedback'});
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
      $(".feedback__submit").hide();
      $(".feedback-form__wrap").append("<p class='thanks'>Thanks for leaving us your valuable feedback</p>");
    });
});
