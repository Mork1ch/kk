'use strict'

function function_1() {

    alert("Привет!")

}

var button = document.getElementById("clickbutton")
button.addEventListener("click", function(){alert("Привет!")})

function color_change(){

    function randColor() {
        var r = Math.floor(Math.random() * (256)),
            g = Math.floor(Math.random() * (256)),
            b = Math.floor(Math.random() * (256));
        return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }

    document.getElementById('rectangle').style.backgroundColor = randColor()

}