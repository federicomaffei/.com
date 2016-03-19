var phrases = [
    'software engineer at OpenTable',
    'italian living in London',
    'football fan',
    'cycling aficionado'
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