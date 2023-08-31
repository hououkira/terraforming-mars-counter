let plusbuttons = document.querySelectorAll(".plus");
let minusbuttons = document.querySelectorAll(".minus");
let resetbuttons = document.querySelectorAll(".reset");

// 阻止双击事件
document.addEventListener('dblclick', function(e){
    e.preventDefault();
});

$(document).ready(function() {
    console.log("loaded");
  });


function increment(button) {
    var $h1 = $(button).parent().parent().prev().find('h1');
    var currentCount = parseInt($h1.text(), 10);
    $h1.text(currentCount + 1);
}
  

function decrement(button) {
    var $h1 = $(button).parent().parent().prev().find('h1');
    var currentCount = parseInt($h1.text(), 10);
    currentCount > 0 ? $h1.text(currentCount - 1) : $h1.text(0);
}
  

function reset(button) {
    var $h1 = $(button).parent().parent().prev().find('h1').text(0);
}

