$(document).ready(function() {
    console.log("loaded");
    $('.num-input').on('keydown blur', function(e) {
        if (e.type === 'keydown' && e.keyCode !== 13) return;
        e.preventDefault();
        if(/^[1-9]\d*(\.\d+)?$/.test($(this).val()))
            $('#credit .num').text($(this).val());
            $(this).val('');
    });
});


function increment(button, type) {
    switch(type) {
        case 'num': {
            let $h1 = $(button).parent().parent().prev().find('.flex').find('.num');
            let currentCount = parseInt($h1.text(), 10);
            $h1.text(currentCount + 1);
        } break;
        case 'production': {
            let $h1 = $(button).parent().parent().prev().find('.flex').find('.production');
            let currentCount = parseInt($h1.text(), 10);
            $h1.text(currentCount + 1);
        } break;
    }
}
  

function decrement(button, type) {
    switch(type) {
        case 'num': {
            let $h1 = $(button).parent().parent().prev().find('.flex').find('.num');
            let currentCount = parseInt($h1.text(), 10);
            if(currentCount > 0) $h1.text(currentCount - 1);
        } break;
        case 'production': {
            let $h1 = $(button).parent().parent().prev().find('.flex').find('.production');
            let currentCount = parseInt($h1.text(), 10);
            if($(button).parent().parent().parent().attr('id') === 'credit') {
                if(currentCount > -5) $h1.text(currentCount - 1);
            }
            else {
                if(currentCount > 0) $h1.text(currentCount - 1);
            }
        } break;
    }
}
  

function reset(button, type) {
    switch(type) {
        case 'num': {
            if ($(button).parent().parent().parent().attr('id') === 'TR') {
                $(button).parent().parent().prev().find('.flex').find('.num').text(20);
            }
            else $(button).parent().parent().prev().find('.flex').find('.num').text(0);
        } break;
        case 'production': {
            $(button).parent().parent().prev().find('.flex').find('.num').text(1);
        } break;
    }
}

function production() {
    $('.num').each(function() { 
        if($(this).parent().parent().parent().attr('id') === 'TR') return;
        num = $(this).text();
        productionValue = $(this).next().text();
        $(this).text(parseInt(num, 10) + parseInt(productionValue, 10));    
        if($(this).parent().parent().parent().attr('id') === 'credit') {
            TR = $('#TR').find('.num').text();
            $(this).text(parseInt(num, 10) + parseInt(productionValue, 10) + parseInt(TR, 10));
        }
    })
}

