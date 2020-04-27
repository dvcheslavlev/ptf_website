$(document).ready(function(){
    $(".btn-blue.like-btn").click(function(){
      ga ('send', 'event', 'Like' , 'Click' , 'MainPageLike');
    });
});