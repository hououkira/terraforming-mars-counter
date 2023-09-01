let credit = {
    num: 0,
    production: 1
}
let steel = {
    num: 0,
    production: 1
}
let titanium = {
    num: 0,
    production: 1
}
let plants = {
    num: 0,
    production: 1
}
let energy = {
    num: 0,
    production: 1
}
let heat = {
    num: 0,
    production: 1
}
let TR = {
    num: 20,
}

let data = {
    credit: credit,
    steel: steel,
    titanium: titanium,
    plants: plants,
    energy: energy,
    heat: heat,
    TR: TR
}

function save() {
    localStorage.setItem('data', JSON.stringify(data));
}


function load() {
    if (localStorage.getItem('data') !== null) {
        data = JSON.parse(localStorage.getItem('data'));
    }
}

function clearAll() {
    let r = window.confirm('确定要重置全部吗？');
    if (r === true) 
    {
        localStorage.clear();
        location.reload();
    }
}

function dataToHTML() {
    load()
    $('#credit .num').text(data.credit.num);
    $('#credit .production').text(data.credit.production);
    $('#steel .num').text(data.steel.num);
    $('#steel .production').text(data.steel.production);
    $('#titanium .num').text(data.titanium.num);
    $('#titanium .production').text(data.titanium.production);
    $('#plants .num').text(data.plants.num);
    $('#plants .production').text(data.plants.production);
    $('#energy .num').text(data.energy.num);
    $('#energy .production').text(data.energy.production);
    $('#heat .num').text(data.heat.num);
    $('#heat .production').text(data.heat.production);
    $('#TR .num').text(data.TR.num);
}

function HTMLToData() {
    data.credit.num = parseInt($('#credit .num').text(), 10);
    data.credit.production = parseInt($('#credit .production').text(), 10);
    data.steel.num = parseInt($('#steel .num').text(), 10);
    data.steel.production = parseInt($('#steel .production').text(), 10);
    data.titanium.num = parseInt($('#titanium .num').text(), 10);
    data.titanium.production = parseInt($('#titanium .production').text(), 10);
    data.plants.num = parseInt($('#plants .num').text(), 10);
    data.plants.production = parseInt($('#plants .production').text(), 10);
    data.energy.num = parseInt($('#energy .num').text(), 10);
    data.energy.production = parseInt($('#energy .production').text(), 10);
    data.heat.num = parseInt($('#heat .num').text(), 10);
    data.heat.production = parseInt($('#heat .production').text(), 10);
    data.TR.num = parseInt($('#TR .num').text(), 10);
    save();
}

// 处理信用点输入框，只能输入数字
$(document).ready(function() {
    $('.num-input').on('keydown blur', function(e) {  
        if (e.type === 'keydown' && e.keyCode !== 13) return;
        e.preventDefault();
        if(/^[0-9]\d*(\.\d+)?$/.test($(this).val())) // 由于不能输入负号，所以限制其只能为整数
            $('#credit .num').text(parseInt($(this).val(), 10));
            HTMLToData()
            $(this).val('');
    });
    dataToHTML();
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
    HTMLToData()
    console.log('here')
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
    HTMLToData()
}

// 专为信用点数设计的增加减少5的函数

function increment5() {
    let $h1 = $('#credit .num');
    let currentCount = parseInt($h1.text(), 10);
    $h1.text(currentCount + 5);
    HTMLToData()
}


function decrement5() {
    let $h1 = $('#credit .num');
    let currentCount = parseInt($h1.text(), 10);
    if(currentCount > 4) $h1.text(currentCount - 5);
    HTMLToData()
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
    HTMLToData()
}

function production() {
    let r = window.confirm('确定要进行生产吗？\n在进入生产阶段时，目前的所有电能都会转化为热能');
    if (r === true) {
        // 首先将剩余的电能转化为热能
        let energy = parseInt($('#energy .num').text(), 10);
        let heat = parseInt($('#heat .num').text(), 10);
        $('#energy .num').text(0);
        $('#heat .num').text(energy + heat);
        $('.num').each(function() { 
            if($(this).parent().parent().parent().attr('id') === 'TR') return;  // 改造点数不参与计算
            num = $(this).text();
            productionValue = $(this).next().text();
            $(this).text(parseInt(num, 10) + parseInt(productionValue, 10));    
            if($(this).parent().parent().parent().attr('id') === 'credit') {
                TR = $('#TR .num').text();
                $(this).text(parseInt(num, 10) + parseInt(productionValue, 10) + parseInt(TR, 10));  // 最终的信用点数等于信用点数+信用点数产量+改造点数
            }
        })
        HTMLToData()
    }
}

