var popup = document.getElementById('wrapper')
var btn = document.getElementById('auth')
var close = document.getElementById('btn-form-close')

/* var visible = true;
function closing() {
    if(visible) {
        document.getElementById('wrapper').style.display = 'none';
        visible = false;
    } else {
        document.getElementById('wrapper').style.display = 'block';
        visible = true
    }
} 
*/

btn.addEventListener("click", function(evt){
 });

close.addEventListener("click", function(evt){
    popup.classList.remove("wrapper-show");
 });
 
 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("wrapper-show")) {
        popup.classList.remove("wrapper-show");
      }
    }
  });