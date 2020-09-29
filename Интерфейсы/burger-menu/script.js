var ham = document.getElementById("burger");
var menu = document.getElementById("menu");
var visible = false;

ham.addEventListener("click", function(evt){
    if (visible == false){
        menu.classList.add("menushow");
        visible = true;
    }else{
        menu.classList.remove("menushow");
        visible = false
    }
 });