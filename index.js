
// var countDown = getTime();


var countDownDate = new Date("Nov 2, 2030 00:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("cap1").innerHTML =  hours;
  document.getElementById("cool1").innerHTML =  hours;
  document.getElementById("cap2").innerHTML =  minutes;
  document.getElementById("cool2").innerHTML =  minutes;
  document.getElementById("cap3").innerHTML =  seconds;
  document.getElementById("cool3").innerHTML =  seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementsByClassName("cool1").innerHTML = "EXPIRED";
  }
}, 1000);

