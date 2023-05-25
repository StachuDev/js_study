var cards = ["jaskier.png", "ciri.png", "geralt.png", "iorweth.png", "geralt.png", "yen.png", "jaskier.png",
    "triss.png", "triss.png", "yen.png", "iorweth.png", "ciri.png"];

// sprawdzamy czy tablica jest w pamięci
// alert(cards[3]);
// console.log(cards);

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

// zwraca listę elementów dokumentu, które mają klasę 'card'.
// var elements = document.querySelectorAll('.card');

// for (var i = 0; i < elements.length; i++) {
//   var element = elements[i];
//   element.addEventListener("click", function() { revealCard(i); });
//   // tutaj wykonaj działania na elemencie
// }


// metoda addEventListener w odróżnieniu od onload / onclick umożliwia 
// dodawanie kilku funkcji do jednego zdarzenia
// umozliwia rozdzielenie kodu js od html
c0.addEventListener("click", function () { revealCard(0); });
c1.addEventListener("click", function () { revealCard(1); });
c2.addEventListener("click", function () { revealCard(2); });
c3.addEventListener("click", function () { revealCard(3); });

c4.addEventListener("click", function () { revealCard(4); });
c5.addEventListener("click", function () { revealCard(5); });
c6.addEventListener("click", function () { revealCard(6); });
c7.addEventListener("click", function () { revealCard(7); });

c8.addEventListener("click", function () { revealCard(8); });
c9.addEventListener("click", function () { revealCard(9); });
c10.addEventListener("click", function () { revealCard(10); });
c11.addEventListener("click", function () { revealCard(11); });

// for(i=0; i<12; i++){
//     var cardId = "c" + i;
//     $("#" + cardId).addEventListener("click", function() { revealCard(cardId); });
// }

var oneVisable = false;
var turnCounter = 0;
var firstCardNum;
var lockRevealCard = false;
var revealPairCount = 0;

function coverCard(nr) {
    var img = "url(img/karta.png)";
    $('#c' + nr).css("background-image", img);
    $('#c' + nr).addClass('card');
    $('#c' + nr).removeClass('cardA');
}

function revealCard(nr) {
    var cardIsVisable = $('#c' + nr).css('opacity');
    if (cardIsVisable != 0 && lockRevealCard === false) {
        lockRevealCard = true;
        // pobieram zdjęcie wciśniętej karty
        var img = "url(img/" + cards[nr] + ")";

        // kożystając z jQuery chwytam elementy o id: 'c_' i zmieniam w nich css
        $('#c' + nr).css("background-image", img);
        $('#c' + nr).addClass('cardA');
        $('#c' + nr).removeClass('card');
        // alert(nr);
        if (oneVisable == false) {
            oneVisable = true;
            firstCardNum = nr;
            lockRevealCard = false;
        } else {
            // 
            if (cards[firstCardNum] == cards[nr]) {
                revealPairCount++;
                setTimeout(function () { hideTwoCards(firstCardNum, nr) }, 750);
                // alert(revealPairCount);


            } else {
                setTimeout(function () { coverTwoCards(firstCardNum, nr) }, 750);
            }
            turnCounter++;
            $('.score').html("Turn counter: " + turnCounter);

            oneVisable = false;

        }
    }

}

function hideTwoCards(nr1, nr2) {
    $('#c' + nr1).css('opacity', '0');
    $('#c' + nr2).css('opacity', '0');
    lockRevealCard = false;

    if (revealPairCount == 6) {
        $('.board').html('<h1>You win!<br>Done in ' + turnCounter + ' turns</h1>');
    }
}

function coverTwoCards(nr1, nr2) {
    coverCard(nr1);
    coverCard(nr2);
    lockRevealCard = false;
}
