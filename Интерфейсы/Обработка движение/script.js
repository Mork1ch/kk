'use strict'

var rect = document.getElementById('rectangle1'); //Записываем объект в переменную

rect.onmousedown = function (e) {              //сама функция движения. Выполняется при onmousedown

    let coords = getCoords(rect);              //получаем координаты
    let shiftX = e.pageX - coords.left;      //расположение курсора относительно объекта
    let shiftY = e.pageY - coords.top;

    rect.style.position = 'absolute';       //размещение в абсолютных координатах
    document.body.appendChild(rect);
    moveAt(e);

    rect.style.zIndex = 1000;

    function moveAt(e) {                    //функция движения (меняем стили)
        rect.style.left = e.pageX - shiftX + 'px';
        rect.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function (e) {   //выполняем движение при Onmousemove
        moveAt(e);
    };

    rect.onmouseup = function () {          //Обнуляем онмаусмув и онмаусап при отпускании
        document.onmousemove = null;
        rect.onmouseup = null;
    };

}

rect.ondragstart = function () {                //отключение встроенного Drag'n'drop
    return false;
};

function getCoords(elem) {                      //возвращает объект с координатами объекта
    var box = elem.getBoundingClientRect();     //Функция возвращает размеры и координаты относительно экрана
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}   

var rect1 = document.getElementById('rectangle2'); //Записываем объект в переменную

rect1.onmousedown = function (e) {              //сама функция движения. Выполняется при onmousedown

    let coords = getCoords(rect1);              //получаем координаты
    let shiftX = e.pageX - coords.left;      //расположение курсора относительно объекта
    let shiftY = e.pageY - coords.top;

    rect1.style.position = 'absolute';       //размещение в абсолютных координатах
    document.body.appendChild(rect1);
    moveAt(e);

    rect1.style.zIndex = 1000;

    function moveAt(e) {                    //функция движения (меняем стили)
        rect1.style.left = e.pageX - shiftX + 'px';
        rect1.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function (e) {   //выполняем движение при Onmousemove
        moveAt(e);
    };

    rect1.onmouseup = function () {          //Обнуляем онмаусмув и онмаусап при отпускании
        document.onmousemove = null;
        rect1.onmouseup = null;
    };

}

rect1.ondragstart = function () {                //отключение встроенного Drag'n'drop
    return false;
};



function change (x){
    if (x == 0){
        rect1.style.zIndex = 1000
        rect.style.zIndex = 100
    }else{
        rect1.style.zIndex = 100
        rect.style.zIndex = 1000
    }
}