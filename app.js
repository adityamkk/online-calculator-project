'use strict'; //Sets the function mode to strict

/*

VARIABLES

*/

var outputBox1 = ''; //value of the input display
var outputBox2 = ''; //value of the output display
var calc = ''; //value of the mathematical expression inputted
var historyInp = ['NaN','NaN','NaN','NaN','NaN','NaN','NaN',]; //Values of the input history
var historyOut = ['NaN','NaN','NaN','NaN','NaN','NaN','NaN',]; //Values of the output history

var isRadian = true; //boolean that switches between radian and degree mode
let darkModeEnabled = false; //boolean that switches between light and dark mode

addToHistory('NaN','NaN'); //initializes the addToHistory function

//ROW 1

document.querySelector('.add').addEventListener('click', function () {
    addValue('+','+');
});
document.querySelector('.subtract').addEventListener('click', function () {
    addValue('-','-');
});
document.querySelector('.multiply').addEventListener('click', function () {
    addValue('x','*');
});
document.querySelector('.divide').addEventListener('click', function () {
    addValue('/','/');
});
document.querySelector('.pi').addEventListener('click', function () {
    addValue('π','Math.PI');
});
document.querySelector('.e').addEventListener('click', function () {
    addValue('e','Math.E');
});
document.querySelector('.radian').addEventListener('click', function () {
    isRadian = true;
    document.getElementById('radian').style.borderStyle = 'inset';
    document.getElementById('degree').style.borderStyle = 'outset';
});
document.querySelector('.degree').addEventListener('click', function () {
    isRadian = false;
    document.getElementById('radian').style.borderStyle = 'outset';
    document.getElementById('degree').style.borderStyle = 'inset';
});

//ROW 2

document.querySelector('.exponent').addEventListener('click', function () {
    addValue('^','**');
});
document.querySelector('.sin').addEventListener('click', function () {
    if (isRadian){
        addValue('sin(','Math.sin(');
    } else {
        addValue('sin(','Math.sin((Math.PI/180)*');
    }
});
document.querySelector('.cos').addEventListener('click', function () {
    if (isRadian){
        addValue('cos(','Math.cos(');
    } else {
        addValue('cos(','Math.cos((Math.PI/180)*');
    }
});
document.querySelector('.tan').addEventListener('click', function () {
    if (isRadian){
        addValue('tan(','Math.tan(');
    } else {
        addValue('tan(','Math.tan((Math.PI/180)*');
    }
});

document.querySelector('.asin').addEventListener('click', function () {
    if (isRadian){
        addValue('asin(','Math.asin(');
    } else {
        addValue('asin(','(180/Math.PI)*Math.asin(');
    }
});
document.querySelector('.acos').addEventListener('click', function () {
    if (isRadian){
        addValue('acos(','Math.acos(');
    } else {
        addValue('acos(','(180/Math.PI)*Math.acos(');
    }
});
document.querySelector('.atan').addEventListener('click', function () {
    if (isRadian){
        addValue('atan(','Math.atan(');
    } else {
        addValue('atan(','(180/Math.PI)*Math.atan(');
    }
});

//ROW 3

document.querySelector('.ln').addEventListener('click', function () {
    addValue('ln(','Math.log(');
});
document.querySelector('.log').addEventListener('click', function () {
    addValue('log(','Math.log10(');
});
document.querySelector('.decimal').addEventListener('click', function () {
    addValue('.','.');
});
document.querySelector('.open-parenthesis').addEventListener('click', function () {
    addValue('(','(');
});
document.querySelector('.close-parenthesis').addEventListener('click', function () {
    addValue(')',')');
});
document.querySelector('.square-root').addEventListener('click', function () {
    addValue('(√','Math.sqrt(');
});
document.querySelector('.square').addEventListener('click', function () {
    addValue('^2','**2');
});

//ROW 4

document.querySelector('.one').addEventListener('click', function () {
    addValue('1','1');
});
document.querySelector('.two').addEventListener('click', function () {
    addValue('2','2');
});
document.querySelector('.three').addEventListener('click', function () {
    addValue('3','3');
});
document.querySelector('.four').addEventListener('click', function () {
    addValue('4','4');
});

//ROW 5

document.querySelector('.five').addEventListener('click', function () {
    addValue('5','5');
});
document.querySelector('.six').addEventListener('click', function () {
    addValue('6','6');
});
document.querySelector('.seven').addEventListener('click', function () {
    addValue('7','7');
});
document.querySelector('.eight').addEventListener('click', function () {
    addValue('8','8');
});

//ROW 6

document.querySelector('.nine').addEventListener('click', function () {
    addValue('9','9');
});
document.querySelector('.zero').addEventListener('click', function () {
    addValue('0','0');
});
document.querySelector('.backspace').addEventListener('click', function () {
    outputBox1 = '';
    calc = '';
    document.querySelector('.output-box-1').textContent = outputBox1;
});
document.querySelector('.equals').addEventListener('click', function () {
    //equals function
    try{
        outputBox2 = cutIfInteger(eval(calc));
    } 
    catch(outputBox) {
        outputBox2 = 'NaN';
    };
    addToHistory(outputBox1,outputBox2);
    document.querySelector('.output-box-1').textContent = '';
    outputBox1 = '';
    calc = '';
    document.querySelector('.output-box-2').textContent = outputBox2;
    document.getElementById('output-box-2').style.textAlign = 'center';
    //https://www.w3schools.com/js/js_errors.asp - try and catch
});


//Adds a value to the input display as well as the corresponding mathematical value to the "calc" variable
function addValue(displayValue, value) {
    outputBox1 = outputBox1 + displayValue;
    calc = calc + value;
    document.querySelector('.output-box-1').textContent = outputBox1;
    document.getElementById('output-box-1').style.textAlign = 'center';
    //https://www.tracedynamics.com/javascript-remove-character-from-string/ - string manipulation
}

//Rounding logic
function cutIfInteger(num) {
    if (Number.isInteger(num)) {
        return num;
    } else {
        return num.toFixed(6);
    }
    //https://www.w3schools.com/jsref/jsref_isinteger.asp#:~:text=The%20Number.,Otherwise%20it%20returns%20false.
}

/*

Typing

*/

document.addEventListener('keydown', function(event) {
    //These cases decide if you are pressing a certain button on the keyboard
    switch(event.keyCode){
        case 8:
            outputBox1 = '';
            calc = '';
            document.querySelector('.output-box-1').textContent = outputBox1;
            break;
        case (16 && 187) || 107:
            addValue('+','+');
            break;
        case 189 || 109:
            addValue('-','-');
            break;
        case 88 || (16 && 56) || 106:
            addValue('x','*');
            break;
        case 191 || 111:
            addValue('/','/');
            break;
        case (48 || 96):
            addValue('0','0');
            break;
        case (49 || 97):
            addValue('1','1');
            break;
        case (50 || 98):
            addValue('2','2');
            break;
        case (51 || 99):
            addValue('3','3');
            break;
        case (52 || 100):
            addValue('4','4');
            break;
        case (53 || 101):
            addValue('5','5');
            break;
        case (54 || 102):
            addValue('6','6');
            break;
        case (55 || 103):
            addValue('7','7');
            break;
        case 56 || 104:
            addValue('8','8');
            break;
        case 57 || 105:
            addValue('9','9');
            break;
        case 83:
            addValue('sin(','Math.sin(');
            break;
        case 67:
            addValue('cos(','Math.cos(');
            break;
        case 84:
            addValue('tan(','Math.tan(');
            break;
        case 80:
            addValue('π','Math.PI');
            break;
        case 69:
            addValue('e','Math.E');
            break;
        case 76:
            addValue('ln(','Math.log(');
            break;
        case 110 || 190:
            addValue('.','.');
            break;
        case 219:
            addValue('(','(');
            break;
        case 221:
            addValue(')',')');
            break;
        case 222:
            addValue('^','**');
            break;
        case 13:
            try{
                outputBox2 = cutIfInteger(eval(calc));
            } 
            catch(outputBox) {
                outputBox2 = 'Error';
            };
            //https://www.w3schools.com/js/js_errors.asp - try and catch
            addToHistory(outputBox1,outputBox2);
            document.querySelector('.output-box-1').textContent = '';
            outputBox1 = '';
            calc = '';
            document.querySelector('.output-box-2').textContent = outputBox2;
            document.getElementById('output-box-2').style.textAlign = 'center';
            break;
    }
    //https://www.techiedelight.com/detect-enter-key-press-javascript/#:~:text=In%20plain%20JavaScript%2C%20you%20can,an%20Enter%20key%20is%20pressed. - Key press detection
});

/*

Copying Text to Clipboard

*/
//https://flaviocopes.com/clipboard-api/ - Clipboard API
document.querySelector('.inp-0').addEventListener('click', function() {
    const copyText = historyInp[0];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});
document.querySelector('.inp-1').addEventListener('click', function() {
    const copyText = historyInp[1];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});
document.querySelector('.inp-2').addEventListener('click', function() {
    const copyText = historyInp[2];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});
document.querySelector('.inp-3').addEventListener('click', function() {
    const copyText = historyInp[3];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});
document.querySelector('.inp-4').addEventListener('click', function() {
    const copyText = historyInp[4];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});
document.querySelector('.inp-5').addEventListener('click', function() {
    const copyText = historyInp[5];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});
document.querySelector('.inp-6').addEventListener('click', function() {
    const copyText = historyInp[6];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});

document.querySelector('.out-0').addEventListener('click', function() {
    const copyText = historyOut[0];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});
document.querySelector('.out-1').addEventListener('click', function() {
    const copyText = historyOut[1];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});
document.querySelector('.out-2').addEventListener('click', function() {
    const copyText = historyOut[2];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});
document.querySelector('.out-3').addEventListener('click', function() {
    const copyText = historyOut[3];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});
document.querySelector('.out-4').addEventListener('click', function() {
    const copyText = historyOut[4];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});
document.querySelector('.out-5').addEventListener('click', function() {
    const copyText = historyOut[5];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});
document.querySelector('.out-6').addEventListener('click', function() {
    const copyText = historyOut[6];
    navigator.clipboard.writeText(copyText);
    console.log('copied to clipboard');
});

document.querySelector('.output-box-1').addEventListener('click', function() {
    const copyText = document.querySelector('.output-box-1').textContent;
    navigator.clipboard.writeText(copyText);
    console.log('Copied to clipboard!');
});
document.querySelector('.output-box-2').addEventListener('click', function() {
    const copyText = document.querySelector('.output-box-2').textContent;
    navigator.clipboard.writeText(copyText);
    console.log('Copied to clipboard!');
});
//https://www.w3schools.com/howto/howto_js_copy_clipboard.asp - copying to clipboard;

/*

DISPLAY MODE

*/

document.querySelector('.display-mode').addEventListener('click', function() {
    if(darkModeEnabled) {
        //Light Mode
        document.body.style.background = 'white';
        //Heading color
        document.getElementById('heading').style.color = '#555';
        //Output Boxes
        document.getElementById('output-box-1').style.color = '#555';
        document.getElementById('output-box-1').style.backgroundColor = 'white';
        document.getElementById('output-box-2').style.color = '#555';
        document.getElementById('output-box-2').style.backgroundColor = 'white';
        //Change Button
        document.querySelector('.display-mode').textContent = 'Dark Mode';

        darkModeEnabled = false;
        //https://www.w3schools.com/js/js_htmldom_css.asp - changing style
    } else {
        //Dark Mode
        document.body.style.background = '#2d3436';
        //Heading color
        document.getElementById('heading').style.color = '#ecf0f1';
        //Output Boxes
        document.getElementById('output-box-1').style.color = 'white';
        document.getElementById('output-box-1').style.backgroundColor = '#2d3436';
        document.getElementById('output-box-2').style.color = 'white';
        document.getElementById('output-box-2').style.backgroundColor = '#2d3436';
        //Change Button
        document.querySelector('.display-mode').textContent = 'Light Mode';

        darkModeEnabled = true;
        //https://www.w3schools.com/js/js_htmldom_css.asp - changing style
    }
});

//hovering over output box 1
//https://www.w3schools.com/jsref/prop_style_background.asp - background manipulation
//https://forums.digitalpoint.com/threads/how-to-change-hover-style-with-javascript.1045520/ - hover and active class manipulation in js
document.getElementById('output-box-1').onmouseover = function() {
    if(darkModeEnabled) {
        this.style.backgroundColor = '#353b48';
    } else {
        this.style.backgroundColor = '#ecf0f1';
    }
    //https://www.w3schools.com/js/js_htmldom_css.asp - changing style
}
document.getElementById('output-box-1').onmouseleave = function() {
    if(darkModeEnabled) {
        this.style.backgroundColor = '#2d3436';
    } else {
        this.style.backgroundColor = 'white';
    }
    //https://www.w3schools.com/js/js_htmldom_css.asp - changing style
}

//hovering over output box 2
document.getElementById('output-box-2').onmouseover = function() {
    if(darkModeEnabled) {
        this.style.backgroundColor = '#353b48';
    } else {
        this.style.backgroundColor = '#ecf0f1';
    }
    //https://www.w3schools.com/js/js_htmldom_css.asp - changing style
}
document.getElementById('output-box-2').onmouseleave = function() {
    if(darkModeEnabled) {
        this.style.backgroundColor = '#2d3436';
    } else {
        this.style.backgroundColor = 'white';
    }
    //https://www.w3schools.com/js/js_htmldom_css.asp - changing style
}

//Adds an input and output value to the history and shifts the other values down one
//Makes the text bolded and red when the player's operation results in an error
function addToHistory(inp,out) {
    var i = 6;
    for (i = 6; i >= 1; i--) {
        historyInp[i] = historyInp[i-1];
        historyOut[i] = historyOut[i-1];
        document.querySelector('.inp-' + i).textContent = historyInp[i];
        document.querySelector('.out-' + i).textContent = historyOut[i];
    };
    historyInp[0] = inp;
    historyOut[0] = out;
    document.querySelector('.inp-0').textContent = historyInp[0];
    document.querySelector('.out-0').textContent = historyOut[0];
    if (out == 'Error' || out == 'NaN') {
        document.getElementById('out-0').style.color = 'red';
        document.getElementById('out-0').style.fontWeight = '800';
        document.getElementById('inp-0').style.color = 'red';
        document.getElementById('inp-0').style.fontWeight = '800';
    } else {
        document.getElementById('out-0').style.color = 'black';
        document.getElementById('out-0').style.fontWeight = '200';
        document.getElementById('inp-0').style.color = 'black';
        document.getElementById('inp-0').style.fontWeight = '200';
    } 
};

//https://www.tracedynamics.com/javascript-remove-character-from-string/ - string manipulation
//https://www.w3schools.com/js/js_errors.asp - try and catch
//https://www.w3schools.com/jsref/jsref_isinteger.asp#:~:text=The%20Number.,Otherwise%20it%20returns%20false. - is integer function
//https://www.w3schools.com/js/js_loop_for.asp - for loops
//https://www.w3schools.com/js/js_htmldom_css.asp - changing style
//output box width question was answered with the help of my Computer Science teacher
//https://www.dummies.com/web-design-development/site-development/how-to-put-text-boxes-in-an-html5-form/ - Text boxes
//https://www.w3schools.com/howto/howto_js_copy_clipboard.asp - copying to clipboard;
//https://www.techiedelight.com/detect-enter-key-press-javascript/#:~:text=In%20plain%20JavaScript%2C%20you%20can,an%20Enter%20key%20is%20pressed. - Key press detection
//https://www.w3schools.com/jsref/event_onkeypress.asp - Key press detection
//https://flaviocopes.com/clipboard-api/ - Clipboard API
//https://www.w3schools.com/jsref/prop_style_background.asp - background manipulation
//https://forums.digitalpoint.com/threads/how-to-change-hover-style-with-javascript.1045520/ - hover and active class manipulation in js