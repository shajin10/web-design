// Set the date we're counting down to
var countDownDate = new Date("dec 17, 2020 3:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="time"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);


function gerrt(){
  document.getElementById("pari_box").style.display="block";
}


function oder(){
  var data = document.getElementById("email").value;
  var data2 = document.getElementById("tel").value;

  if (data=="") {
    document.getElementById("ero_1").style.display="block";


    
  }
  else {
    document.getElementById("ero_1").style.display="none";
    alert("your email is : "+data +"   |||  your pohone no is : "+data2)

    
}


  }


  