function initClock() {
    // Get time
    var date = new Date();
    var offset = date.getTimezoneOffset();
    date.setMinutes(date.getMinutes() + offset); // convert to GMT time


    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    // update seconds
    document.getElementById("seconds").style.transform = "rotate("+seconds*6+"deg)";

    // update minutes 
    // degrees = 360/60*minutes+360/60/60*seconds = 6*minutes + 0.1*seconds
    document.getElementById("minutes").style.transform = "rotate("+(minutes*6+0.1*seconds)+"deg)";

    // update hours
    // degrees = 360/24*hours+15/60*minutes = 15*hours+0.25*minutes
    document.getElementById("hours").style.transform = "rotate("+((hours*15)+(minutes*0.25))+"deg)";
}
