'use strict';

function Date(){
    var day, month, DayOfWeek;

    for (let i = 0; i < 1; i++){

        day = prompt("Введите день");

        if ((day > 31 || day < 1) || day === null || day.length > 2){
            alert("Ошибка! Допустимы значения от 1 до 31!");
            i--;
        }
    }

    for (let i = 0; i < 1; i++){

    month = +prompt("Введите номер месяца");

    if ((month > 12 || day < 1) && month !=null){
        alert("Ошибка! Допустимы значения от 1 до 12!");
        i--;
    }else{
        switch(month){
            case 1: month = ("Января");
            break;
            case 2: month = ("Февраля");
            break;
            case 3: month = ("Марта");
            break;
            case 4: month = ("Апреля");
            break;
            case 5: month = ("Мая");
            break;
            case 6: month = ("Июня");
            break;
            case 7: month = ("Июля");
            break;
            case 8: month = ("Августа");
            break;
            case 9: month = ("Сентября");
            break;
            case 10: month = ("Октября");
            break;
            case 11: month = ("Ноября");
            break;
            case 12: month = ("Декабря");
            break;
            default: alert("Ошибка, данные введены некорректно!"); i--;
            break;
        }
    }
}

    for (let i = 0; i < 1; i++){

    DayOfWeek = +prompt("Введите номер дня недели");

    if ((DayOfWeek > 7 || DayOfWeek < 1) && DayOfWeek !=null){
        alert("Ошибка! Допустимы значения от 1 до 7!");
        i--;
    } else{
        switch(DayOfWeek){
            case 1: DayOfWeek = ("Понедельник");
            break;
            case 2: DayOfWeek = ("Вторник");
            break;
            case 3: DayOfWeek = ("Среда");
            break;
            case 4: DayOfWeek = ("Четверг");
            break;
            case 5: DayOfWeek = ("Пятница");
            break;
            case 6: DayOfWeek = ("Суббота");
            break;
            case 7: DayOfWeek = ("Воскресенье");
            default: alert("Ошибка, данные введены некорректно!"); i--;
            break;
        }
    }
}
    if ((month == "Февраля" && day > 29) || (month == "Апреля" && day == 31) || (month == "Июня" && day == 31) || (month == "Сентября" && day == 31) || (month == "Ноября" && day == 31)){
            alert("Ошибка, проверьте введённые данные!")
    }else{
        document.write("<p style='color: red; font-size: 2em;'>" + day + " " + month + "-" + DayOfWeek +" </p>");
    }
}

function Sum(){
    for (let i = 0; i < 1; i++){
        var InputNumber = prompt("Введите четырёхзначное число");

        var a1 = InputNumber%10;
        if ((a1 != 1 && a1 != 2 && a1 != 3 && a1 != 4 && a1 != 5 && a1 != 6 && a1 != 7 && a1 != 8 && a1 != 9) || (InputNumber.length != 4)){
                i--;
                alert ("Ошибка! Необходимо ввести четырёхзначное число!");
        }

        // if (InputNumber.length != 4){
        //     alert ("Ошибка! Необходимо ввести четырёхзначное число!");
        //     i--;
        // }
    }

    console.log(typeof(InputNumber));
    
    var a1 = InputNumber%10;
    console.log(typeof(a1));
    InputNumber = parseInt(InputNumber/10);
    var a2 = InputNumber%10;
    InputNumber = parseInt(InputNumber/10);
    var a3 = InputNumber%10;
    InputNumber = parseInt(InputNumber/10);
    var a4 = InputNumber%10;

    var Sum = a1+a2+a3+a4;
    var Proizv = a1*a2*a3*a4;

    console.log(typeof(Sum));
    console.log(typeof(Proizv));
    
    document.write("<p>Сумма чисел - " + Sum + "</p> <br> <p> Произведение чисел - " + Proizv);
}

function rnd(){
    var min = parseInt(prompt ("Введите минимальное число"));
    var max = parseInt(prompt ("Введите максимальное число"));
    var Number = parseInt(min + Math.random()*(max+1-min));
    document.write(" <span>Ваше случайное число - </span><span> " + Number + "</span>");
}