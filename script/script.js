$(document).ready(function(){
    $(".feedback__submit").click(function(){
      gtag('event', 'demo_like', {
        'event_category': 'click',
        'event_label': 'feedback'
    });
      console.log('like');
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
