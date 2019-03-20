$(document).ready(function() {
    $("article").hover(function(){
        //console.log('hover')
        $(this).toggleClass("active");
        $(".icon").toggleClass("active");
    });
})