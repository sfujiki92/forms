$(document).ready(function(){
  $("#blanks form").submit(function(event) {
    var commentTextarea = $("textarea#comment").val();

    $(".comment").text(commentTextarea.toUpperCase());

    $("#commentBox").show();

    event.preventDefault();
  })
})
