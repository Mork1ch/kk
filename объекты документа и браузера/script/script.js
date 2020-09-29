'use strict'

function date(){

    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    let date1 = new Date();
    let date2 = new Date("06/22/2020");

    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

    let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

    alert("Сегодня " + day + " " + months[month] + " " + year + " года" + "\n" + "До конца учебного года осталось " + Difference_In_Days + " Дней");
}

function NewWin(){
    window.open("file.html")
}

function tags(){
    var all = "";
    
    for(var i = 1; i < document.all.length; i++){
    all = all + i + " Тег: " + document.all[i].tagName + " id= " + document.all[i].id + "\n"
    }

    alert(all);
}

function line(){

    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));

    let newcolor = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    console.log(newcolor)

    document.getElementById('liniya').style.backgroundColor = newcolor
}

function picture(){

    document.getElementById('do').style.width = "0px"
   document.getElementById('do1').style.width = "0px"
    document.getElementById('do2').style.width = "0px"

    document.getElementById('do2').style.transform = "rotate(-48090deg)"
    document.getElementById('do').style.transform = "rotate(-48090deg)"
    document.getElementById('do1').style.transform = "rotate(-48090deg)"

    document.getElementById('do').style.transition = "5s"
    document.getElementById('do1').style.transition = "5s"
    document.getElementById('do2').style.transition = "5s"
}