'use strict'

function sortirovka() {
    for (let i = 0; i < 1; i++){
        var razmer = +prompt("Задайте размер массива")
        var masiv = []

        if (razmer > 50){
            alert("Размер большеват :(");
            i--;
        }

    }
    
    for (let i = 0; i < 1; i++){

    var max = +prompt("max")
    var min = +prompt("min")

    if (max <= min){
        alert("Минимальное число не может быть больше максимального");
            i--;
        }
    }

    let tablece = "<table border='1' cellspacing='0'><tr>";

    for (var i = 0; i < razmer; i++){

        masiv.push(Math.floor(Math.random() * (max - min + 1)) + min);

        tablece = tablece + "<td style='height:30px; width:30px; text-align:center'>" + masiv[i] + "</td>";
    }
    tablece = tablece + "</tr>"



    masiv.sort(function (a, b){
        return a - b;
    });

tablece = tablece + "<tr>"

for (i = 0; i < razmer; i ++){
    tablece = tablece + "<td style='height:30px; width:30px; text-align:center'>" + masiv[i] + "</td>";
}
tablece = tablece + "</tr>"

document.getElementById("masiv").innerHTML = tablece;
} 