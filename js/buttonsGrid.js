let clickablebutton = document.getElementById("btn5");

clickablebutton.addEventListener("click", function() {
        
    var currentvalues = [];
    for(var i = 1; i < 10; i++){
        var currentbutton = "btn" + i.toString();
        var tempvalue = document.getElementById(currentbutton).innerHTML
        currentvalues.push(tempvalue);
    }
    
    document.getElementById("btn1").innerHTML = currentvalues[3];
    document.getElementById("btn2").innerHTML = currentvalues[0];
    document.getElementById("btn3").innerHTML = currentvalues[1];
    document.getElementById("btn4").innerHTML = currentvalues[6];
    document.getElementById("btn6").innerHTML = currentvalues[2];
    document.getElementById("btn7").innerHTML = currentvalues[7];
    document.getElementById("btn8").innerHTML = currentvalues[8];
    document.getElementById("btn9").innerHTML = currentvalues[5];
    
});