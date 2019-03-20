$(".new-tweet form").submit(function(e){
  e.preventDefault();
  const serialized = $(this).serialize();
  $.post("tweets", serialized, function(res){
    //console.log("lala")
  })//.done(function(){
  //   console.log("lala")
  // })
})