var phrases = [
    'developer',
    'junior engineer at OpenTable',
    'italian',
    'football fan',
    'loves cycling'
    ],
    i = 0;

document.getElementById("descriptor").innerHTML = phrases[i];
i++;

setInterval(function(){
    if(i < phrases.length - 1) {
        document.getElementById("descriptor").innerHTML = phrases[i];
        i++;
    }
    else {
        document.getElementById("descriptor").innerHTML = phrases[i];
        i = 0;
    }

}, 5000);