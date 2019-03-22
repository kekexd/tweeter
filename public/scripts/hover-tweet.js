$(document).ready(function() {
    $("article .tweet").hover(function(){
        console.log('hover')
        //$(this).toggleClass("active");
        $(".tweet-footer .icons").toggleClass("active");
    });
})