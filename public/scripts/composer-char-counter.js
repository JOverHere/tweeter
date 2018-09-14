$(document).ready(function() {
  // --- our code goes here ---
  var counter
 // selects .form, on 'keyup' click event performs function
  $( ".form" ).on( "input", function() {
    //sets counter var to 140, decreases as value.length decreases
    counter = 140 - this.value.length;
    //finds .counter sibling of this, and changes html of counter class
    $(this).siblings(".counter").html(counter);
    // statement to change color of counter
    if(counter < 0){
      $(this).siblings(".counter").addClass("counter-color");
    } else {
      $(this).siblings(".counter").removeClass("counter-color");
    }

 });

});