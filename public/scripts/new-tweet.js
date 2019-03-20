$(".new-tweet form").submit(function(e){
  e.preventDefault();
  const length = $(".new-tweet textarea").val().length;
  if(length < 1){
    alert('Empty input!')
  } else if(length > 140){
    alert('This tweet is too long!')
  } else {
    const serialized = $(this).serialize();
    $(".new-tweet textarea").val("");//clear the text field
    $.post("/tweets", serialized, function(){
      console.log("lala")
    })
  }
})
