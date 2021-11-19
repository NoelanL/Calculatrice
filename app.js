function button(value){
    document.getElementById('screen').innerHTML += value;
}
function buttonReset(){
    document.getElementById('screen').innerHTML = "";
}
function buttonAddition(){
    document.getElementById('screen').innerHTML += "+";
}
function buttonSoustraction(){
    document.getElementById('screen').innerHTML += "-";
}
function  buttonMultiplication(){
    document.getElementById('screen').innerHTML += "*";
}
function  buttonModulo(){
    document.getElementById('screen').innerHTML += "/";
}
function buttonEgale(){
    document.getElementById('screen').innerHTML = eval(document.getElementById('screen').innerHTML);
    console.log("Le resultat de votre calcul est de " + document.getElementById('screen').innerHTML);
}


