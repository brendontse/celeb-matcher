$(document).ready(function() {
  $('form#userdata').submit(function(event) {
    event.preventDefault();

    var age = parseInt($('input#age').val());
    var gender = $("input#gender").val();

    if (age >= 35 && gender === 'male') {
      $('#result1').show();
    }else if (age<35 && gender ==="male") {
    $("#result2").show(); }
    else if (age>=35 && gender ==="female") {
      $("#result3").show();
    }else if (age<35&&gender==="female") {
      $("#result4").show();}
    

    console.log(age)


  });
});
