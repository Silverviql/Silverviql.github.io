var start_a = 6;
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

parent.innerHTML = '<div class="numberA">' + a +  '+' + '</div>' +
             '<div class="numberB">' + b + '=' + '</div>' +
              '<div class="numberC">' + '?' + '</div>';

var finishA = 45+a*39;
// Рисование первой стрелки
function drawArcA(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    var startA = 45;

    var yAxis = 160;
    var yOffset = 100;

    context.moveTo(startA, yAxis);
    context.bezierCurveTo(startA, yAxis - yOffset, finishA, yAxis - yOffset, finishA, yAxis);


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
    var yOffset = 50;

    context.moveTo(startB, yAxis);
    context.bezierCurveTo(startB, yAxis - yOffset, finishB, yAxis - yOffset, finishB, yAxis);

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

   /* img.src = "https://i.stack.imgur.com/CLGdl.png";*/
    img.src = "sprite.png";
}
/*// проверка инпута A
var inputA =  document.querySelector('.inputA');
inputA.oninput = function() {
    if(Number(inputA.value) != a) {
        alert('неправильно')
    }
    else{
        alert(inputA.value)
    }

}

// проверка инпута B
var inputB =  document.querySelector('.inputB');
inputB.oninput = function() {
    if(Number(inputB.value) != b) {
        alert('неправильно')
    }
    else{
        alert(inputB.value)
    }
}*/

// проверка инпута A
$(".inputA").change(function() {

// If the value is less than 7, add a red border
    if ($(this).val() < a) {
     /*   $(this).css("border", "2px solid red");*/
        $(this).css("color", "red");
        $(".numberA").css("background", "yellow");

    }

// Else if the value is equal to 7, add a green border
    else if ($(this).val() == a) {
        $(this).css("border", "2px solid green");
        $(this).css("color", "black");
        drawArcB();
        $(".inputB").css("display", "block");
        setTimeout(function () {
            $('.divA').text($(".inputA").val())
            }, 2000
        );
        $(".numberA").css("background", "white");
    }

// Else if the value is greater than 7, add an orange border
    else if ($(this).val() > a) {
        $(this).css("border", "2px solid orange");
    }

// Else if the value is anything else, add a black border
    else {
        $(this).css("border", "2px solid black");
    }

});
// проверка инпута B
$(".inputB").change(function() {

// If the value is less than 7, add a red border
    if ($(this).val() < b) {
        $(this).css("color", "red");
        $(".numberB").css("background", "yellow");
    }

// Else if the value is equal to 7, add a green border
    else if ($(this).val() == b) {
        $(this).css("border", "2px solid green");
        $(this).css("color", "black");
        setTimeout(function () {
            $('.divB').text($(".inputB").val()); // Если использовать $(this).val() значение теряется.
        }, 1000)
        $(".numberB").css("background", "white");
        setTimeout(function () {
            inputC();
        }, 2000);
    }
// Else if the value is greater than 7, add an orange border
    else if ($(this).val() > b) {
        $(this).css("border", "2px solid orange");
    }

// Else if the value is anything else, add a black border
    else {
        $(this).css("border", "2px solid black");
    }

});

// проверка инпута C
function inputC() {
    $(".numberC").html('<input type="number" class="inputC">') ;

    $(".inputC").blur(function() {

// If the value is less than 7, add a red border
        if ($(this).val() < c) {
            $(this).css("color", "red");
        }

// Else if the value is equal to 7, add a green border
        else if ($(this).val() == c) {
            $(this).css("border", "2px solid green");
            $(this).css("color", "black");
            setTimeout(function () {
                $('.numberC').text($(".inputC").val()); // Если использовать $(this).val() значение теряется.
            }, 1000)
        }

// Else if the value is greater than 7, add an orange border
        else if ($(this).val() > c) {
            $(this).css("border", "2px solid orange");
        }

// Else if the value is anything else, add a black border
        else {
            $(this).css("border", "2px solid black");
        }

    });
}