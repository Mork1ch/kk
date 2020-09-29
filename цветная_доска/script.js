function col(i, j, k = 9){
    num = (i * j) % k;
    switch (num){
    case 0: return 'white'; break;
    case 1: return '#00bfff';break;
    case 2: return 'blue'; break;
    case 3: return 'yellow'; break;
    case 4: return 'violet' ;break;
    case 5: return 'red'; break;
    case 6: return '#fffacd'; break;
    case 7: return '#00ffff'; break;
    case 8: return 'gray';break;
    default: return "white";
    }
    
    }
    function Spec(size = 30){
    size -= 1
    k = parseInt(prompt('Введите число от 2 до 9'));
    if ((k<2) || (k > 9)){
    alert("Error");
    return 0;
    }
    html = "<table align='center' border='1' cellspacing='0'>";
    for (var y = size; y >= 0; y--){
    html += "<tr>";
    for (var x = 0; x <= size; x++){
    color = col(y, x, k);
    html += "<td style='height:15px; width:15px; " +
    "background-color:" + color + ";'" +
    ">" ;
    }
    }
    html += "<tr>";
    document.write(html);
    }