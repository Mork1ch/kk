'use strict'

function coords() {
    document.getElementById('pole_1').innerHTML = '';


    function getXPositionOfElement() {

        var x_position = Math.floor(Math.random() * 800);

        return x_position + "px";

    }

    function getYPositionOfElement() {

        var y_position = Math.floor(Math.random() * 380);

        return y_position + "px";

    }

    var XCoord =  getXPositionOfElement()
    var YCoord =  getYPositionOfElement()

    var element = document.createElement('div');
    var x = "x = " + XCoord
    var y = "y = " + YCoord

    element.style.width = "80px";
    element.style.height = "40px";
    element.style.padding = "10px";
    element.style.position = "relative";
    element.style.backgroundColor = "rgb(230, 138, 101)";
    element.style.border = "5px solid red";

    element.style.left = XCoord
    element.style.top = YCoord

    element.innerHTML = x +  "<br>"  +  y;

    document.getElementById('pole_1').append(element);

}