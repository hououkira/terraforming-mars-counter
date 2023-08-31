let plusbuttons = document.querySelectorAll(".plus");
let minusbuttons = document.querySelectorAll(".minus");
let resetbuttons = document.querySelectorAll(".reset");

let targets = [0, 0, 0, 0, 0, 0]; // 用于按钮是用来提升六种的资源数量还是产能，如果是资源则为0，如果是产能则为1

// 阻止双击事件
document.addEventListener('dblclick', function(e){
    e.preventDefault();
});

$(document).ready(function() {
    console.log("loaded");
  });


function increment(button) {
    if(targets[0] == 0){
        var $h1 = $(button).parent().parent().prev().find('.num');
        var currentCount = parseInt($h1.text(), 10);
        $h1.text(currentCount + 1);
    }
    else{
        var $h1 = $(button).parent().parent().prev().find('.production');
        var currentCount = parseInt($h1.text(), 10);
        $h1.text(currentCount + 1);
    }
}
  

function decrement(button) {
    if(targets[0] == 0){
        var $h1 = $(button).parent().parent().prev().find('.num');
        var currentCount = parseInt($h1.text(), 10);
        $h1.text(currentCount - 1);
    }
    else{
        var $h1 = $(button).parent().parent().prev().find('.production');
        var currentCount = parseInt($h1.text(), 10);
        $h1.text(currentCount - 1);
    }
}
  

function reset(button) {
    if(targets[0] == 0){
        var $h1 = $(button).parent().parent().prev().find('.num');
        $h1.text(0);
    }
    else{
        var $h1 = $(button).parent().parent().prev().find('.production');
        $h1.text(0);
    }
}

function toggleTarget(){
    
}
