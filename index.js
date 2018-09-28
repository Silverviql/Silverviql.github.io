var start_a = 6; //Промежутки числе для задачи
var start_c = 11;
var start_d = 9;
var start_y = 14;
var arrA = [];
var arrC = [];

    while(start_a <= start_d){
        arrA.push(start_a++);
    }
    console.log(arrA);

    while(start_c <= start_y){
        arrC.push(start_c++);
    }
    console.log(arrC);

var randA = Math.floor(Math.random() * arrA.length);
var randC = Math.floor(Math.random() * arrC.length);

var a = arrA[randA];

var c = arrC[randC];

var b = c - a;

console.log(a,'--',b,'--',c);


const parent = document.querySelector('#parent');

parent.innerHTML = '<div class="numberA">' + a + '</div>' +
    '<div  class="plus">' + '+' + '</div>' +
    '<div class="numberB">' + b + '</div>' +
    '<div class="sum">' + '=' + '</div>' +
    '<div class="numberC">' + '?' + '</div>';

var finishA = 45+a*39;
// Рисование первой стрелки
function drawArcA(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    var startA = 45;

    var yAxis = 160;
    var yOffset = null;
    if (a>b){
        yOffset = 100;
    }else if(a == b) {
        yOffset = 100;
    }else {
        yOffset = 50;
    }


    context.moveTo(startA, yAxis);
    context.bezierCurveTo(startA, yAxis - yOffset, finishA, yAxis - yOffset, finishA, yAxis);
    context.lineTo(finishA-10,150);
    context.lineTo(finishA+10,150);
    context.lineTo(finishA,160);

    context.lineWidth = 2;
    context.strokeStyle = "#c15b8a";
    context.stroke();
};


// Рисование второй стрелки
var finishB = finishA+b*39;
function drawArcB(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    var startB = finishA;

    var yAxis = 160;
    var yOffset = null;
    if (a<b){
        yOffset = 100;
    }else if(a == b) {
        yOffset = 100;
    }else {
        yOffset = 50;
    }

    context.moveTo(startB, yAxis);
    context.bezierCurveTo(startB, yAxis - yOffset, finishB, yAxis - yOffset, finishB, yAxis);
    context.lineTo(finishB-10,150);
    context.lineTo(finishB+10,150);
    context.lineTo(finishB,160);

    context.lineWidth = 2;
    context.strokeStyle = "#c15b8a";
    context.stroke();
};

//Рисовани линейки
function drawImg() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    var img = new Image();
    context.moveTo(200, 150);

    img.onload = function() {
        context.drawImage(img, 10, 150);
    };

    img.src = "sprite.png";
}

// проверка инпута A
$(".inputA").change(function() {

// Если значение меньше то число в input красное, и в формуле число с желтым фоном.
    if ($(this).val() < a) {
        $(this).css("color", "red");
        $(".numberA").css("background", "yellow");

    }

// Если значение введено верно , то число в инпуте если было красным становится черным
// и отображается 2 стрелка и инпут ввода 2 числа
    else if ($(this).val() == a) {
        $(this).css("color", "black");
        drawArcB();
        $(".inputB").css("display", "block");
        setTimeout(function () {
            $('.divA').text($(".inputA").val())
            }, 2000
        );
        $(".numberA").css("background", "white");
    }

// Если значение меньше то число в input красное, и в формуле число с желтым фоном.
    else if ($(this).val() > a) {
        $(this).css("color", "red");
        $(".numberA").css("background", "yellow");
    }


});
// проверка инпута B
$(".inputB").change(function() {

    if ($(this).val() < b) {
        $(this).css("color", "red");
        $(".numberB").css("background", "yellow");
    }

    else if ($(this).val() == b) {
        $(this).css("color", "black");
        setTimeout(function () {
            $('.divB').text($(".inputB").val()); // Если использовать $(this).val() значение теряется.
        }, 1000)
        $(".numberB").css("background", "white");
        setTimeout(function () {
            inputC();
        }, 2000);
    }

    else if ($(this).val() > b) {
        $(this).css("color", "red");
        $(".numberB").css("background", "yellow");
    }



});

// проверка инпута C
function inputC() {
    $(".numberC").html('<input type="number" class="inputC">') ;

    $(".inputC").blur(function() {

        if ($(this).val() < c) {
            $(this).css("color", "red");
        }

        else if ($(this).val() == c) {
            $(this).css("color", "black");
            setTimeout(function () {
                $('.numberC').text($(".inputC").val());
            }, 1000)
        }

        else if ($(this).val() > c) {
            $(this).css("color", "red");
        }



    });
}