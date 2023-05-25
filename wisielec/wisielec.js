var password = "Bez pracy nie ma kołaczy";
password = password.toUpperCase();

// .lenght to nie funckja ale właściwość
var pass_lenght = password.length;

var password_2 = "";

var mistakes_count = 0;

for(i=0; i<pass_lenght; i++){
    if(password.charAt(i) == " ") password_2 += " ";
    else password_2 += "-";
}

function showPassword(){
    document.getElementById("haslo").innerHTML = password_2;
}

window.onload = start;

var chars = new Array(32);
chars[0] = "A";
chars[1] = "Ą";
chars[2] = "B";
chars[3] = "C";
chars[4] = "Ć";
chars[5] = "D";
chars[6] = "E";
chars[7] = "Ę";
chars[8] = "F";
chars[9] = "G";
chars[10] = "H";
chars[11] = "I";
chars[12] = "J";
chars[13] = "K";
chars[14] = "L";
chars[15] = "Ł";
chars[16] = "M";
chars[17] = "N";
chars[18] = "Ń";
chars[19] = "O";
chars[20] = "Ó";
chars[21] = "P";
chars[22] = "R";
chars[23] = "S";
chars[24] = "Ś";
chars[25] = "T";
chars[26] = "U";
chars[27] = "W";
chars[28] = "Y";
chars[29] = "Z";
chars[30] = "Ź";
chars[31] = "Ż";

// method expose index-selected character in our password window 
String.prototype.setChar = function(index, char){
    if(index > this.length-1) return this.toString();
    else return this.slice(0, index) + char + this.slice(index+1);
}

function start(){
    var char_content = "";

    for(i=0; i<32; i++){
        // zmienna element zawiera wartości indexów kolejnych przycisków
        var element = "char" + i;
        //konkatynacja (łączenie napisów za pomocą "+")
        char_content += '<div class="litera" onclick="check('+ i +')" id="'+ element +'">'+ chars[i] +'</div>';
        if((i+1) % 7 == 0) char_content += '<div style="clear: both;"></div>';
    }

    document.getElementById("litery").innerHTML = char_content;

    showPassword();
}

function check(char_index){
    var right_char = false;

    for(i=0; i<pass_lenght; i++){
        if(password.charAt(i) == chars[char_index]){
            password_2 = password_2.setChar(i, chars[char_index]);
            right_char = true;
        }
    }
    
    if(right_char == true){
        var charId = "char" + char_index;
        document.getElementById(charId).style.backgroundColor = "#003300";
        document.getElementById(charId).style.color = "#00FF00";
        document.getElementById(charId).style.border = "3px solid #00FF00";
        document.getElementById(charId).style.cursor = "default";
        // document.getElementById(charId).style.backgroundColor = "#003300";
        showPassword();
    }
    else {
        var charId = "char" + char_index;
        document.getElementById(charId).style.backgroundColor = "#330000";
        document.getElementById(charId).style.color = "#C00000";
        document.getElementById(charId).style.border = "3px solid #C00000";
        document.getElementById(charId).style.cursor = "default";
        // funkcja setAttribute ustawia atrybuty diva (my zmieniamy funckje onclick na wartosc ';')
        document.getElementById(charId).setAttribute("onclick", ";");

        mistakes_count++;
        document.getElementById("wisielec").innerHTML = "<img src='img/s" + mistakes_count + ".jpg' alt=''>";
    }

    // win
    if(password == password_2)
    document.getElementById("litery").innerHTML = "Gratulacje! Podałeś właściwe hasło:" + password +
    '</br></br> <span class="reset" onclick="location.reload()">Jeszcze raz!</span>';

    // game over
    if(mistakes_count >= 9)
    document.getElementById("litery").innerHTML = "Game over! Właściwe hasło:" + password +
    '</br></br> <span class="reset" onclick="location.reload()">Jeszcze raz!</span>';

    
}