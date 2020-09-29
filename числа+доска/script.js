'use strict'

function Sum(){
    let m = parseInt(prompt("Введите первое число"));
    let n = parseInt(prompt("Введите второе число"));
    var sum = 0;
    for (m; m <= n; m++)
    {
        if (m % 2 == 1)
        sum += m;
    }
    document.write(sum);
}

function Str(){
    let a = parseInt(prompt("Введите первое число"));
    let b = parseInt(prompt("Введите второе число"));
    if (a<b){
    for (a; a<=b; a++)
    {
        if (a % 2 == 0)
        document.write(a + "&nbsp");
    }
    }
    else{
    for (b; b<=a; b++)
    {
        if (b % 2 == 0)
        document.write(b + "&nbsp");
    }
    }
}

function rnd(){
    var nums = prompt("Введите число","");
    var length = nums.length;      // Количество цифр
    nums = Number(nums);           // Переводим строку в число

    var temp = 0;                  // Для хранения цифр
    var result = 0;                // Конечный результат

for (var i = 0; i < length; i++) {
    temp = nums % 10;            // Сохраняем цифру в переменной
    result += temp;              // Складываем цифры числа
    nums = parseInt(nums /10);   // Переходим к следующей цифре в числе
}
    document.write(result);
}

function desk(){}