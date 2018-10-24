this.onload = function(){        
    AOS.init({
        duration: 1000
    })  
};

// counting down to
var countDownDate = new Date("Oct 29, 2018 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// login
function check(form){  
    if(form.userid.value == "sadiq" && form.pswrd.value == "password"){
     window.open('../dashboard/dashboard.html', '_self') 
    }
    else if(form.userid.value == "hauwa.umar" && form.pswrd.value == "hsu004") {
        window.open('../dashboard/pupils/hauwas.html', '_self') 
    }
    else if(form.userid.value == "ak.janga" && form.pswrd.value == "akj005") {
        window.open('../dashboard/pupils/jangak.html', '_self') 
    }
    else {
          alert("Username or Password Error") 
    }
 }