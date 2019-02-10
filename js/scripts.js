$(document).ready(function(){
  $("#blanks form").submit(function(event) {
    var commentInput = $("input#comment").val();

    $(".comment").text(commentInput);

    $("#commentBox").show();

    event.preventDefault();
  })
})
