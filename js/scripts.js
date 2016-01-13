$(document).ready(function() {
  $("#user-info form").submit(function(){
    var fName = $("#firstname").val();
    var lName = $("#lastname").val();
    var favFood = $("#food").val();
    var favMusic = $("#music").val();
    var favColor = $("#color").val();
    var favAnimal = $("#animal").val();


    $(".output1").text(fName);
    $(".output2").text(lName);
    $(".output3").text(favFood);
    $(".output4").text(favMusic);
    $(".output5").text(favColor);
    $(".output6").text(favAnimal);

    $("#confirm").show();
    event.preventDefault();

  });
});
