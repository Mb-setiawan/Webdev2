// setting tanggal expired
var countDownDate = new Date("Jan 10, 2022 00:00:00").getTime();

// update fungsi setiap 1 detik
var x = setInterval(function() {

    // setting tanggal awal
    var now = new Date().getTime();

    // taggal expired dikurang tanggal awal
    var distance = countDownDate - now;
    
    // hitung rumus konversi waktu hari tanggal menit dan jam
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if (days<10) {
        days = document.getElementById("days").innerHTML = "0" + days;
    }
    if (hours<10) {
        hours = document.getElementById("hours").innerHTML = "0" + hours;
    }
    if (minutes<10) {
        minutes = document.getElementById("minutes").innerHTML = "0" + minutes ;
    }
    if (seconds<=10) {
        seconds = document.getElementById("seconds").innerHTML = "0" + seconds;
    }
    if (distance<0){
      document.getElementById("content2").style.display="none";
    }
    // output hasil hitungan
    document.getElementById("days").innerHTML = days + ""
    document.getElementById("hours").innerHTML = hours + ""
    document.getElementById("minutes").innerHTML = minutes + ""
    document.getElementById("seconds").innerHTML = seconds + ""
}, 1000);

// product display des
function show2(){
  
}


// testimoni slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("card-container");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none ";  
  }
  x[slideIndex-1].style.display = "flex";  
}

