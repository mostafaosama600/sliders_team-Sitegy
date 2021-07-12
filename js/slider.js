// textarea
// var textarea = document.getElementById("textarea");
// var span = document.getElementById('span');
// var p = document.getElementById('pargraph');
// var text = parseInt(span.textContent);
// textarea.onkeyup = function(){
//     span.textContent = text - textarea.value.length;
//     if(span.textContent < 0){
//         span.style.color = "red";
//         pargraph.style.color = "red"
//     }
//     else{
//         span.style.color = "black";
//         pargraph.style.color = "black"
//     }
// }
//show/hide password
// var input1 = document.getElementById('pass1');
// var checkbox = document.getElementById('chk');
// var showHide = document.getElementById('showHide');
// checkbox.onclick = function(){
//     if(checkbox.checked){
//         input1.setAttribute('type',text);
//         showHide.textContent = 'show password';
//     }
//     else{
//         input1.setAttribute('type','password');
//         showHide.textContent = 'Hide password';
//     }
// }


var slide = document.getElementById('slide');
var upArrow = document.getElementById('upArrow');
var downArrow = document.getElementById('downArrow');
let x = 0;
upArrow.onclick = function(){
    if(x > '-900'){
        x = x - 300;
        slide.style.top = x + 'px'
    }
}
downArrow.onclick = function(){
    if(x < 0){
        x = x + 300;
        slide.style.top = x + 'px'
    }
}