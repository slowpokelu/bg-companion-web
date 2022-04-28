let rng = `
<button class='w3-button w3-round-large w3-hover-purple' onclick="flip_coin()">Coinflip</button>

<button class='w3-button w3-round-large w3-hover-purple' onclick="random_number(4)">d4</button>
<button class='w3-button w3-round-large w3-hover-purple' onclick="random_number(6)">d6</button>
<button class='w3-button w3-round-large w3-hover-purple' onclick="random_number(8)">d8</button>
<button class='w3-button w3-round-large w3-hover-purple' onclick="random_number(10)">d10</button>
<button class='w3-button w3-round-large w3-hover-purple' onclick="random_number(12)">d12</button>
<button class='w3-button w3-round-large w3-hover-purple' onclick="random_number(20)">d20</button>
<button class='w3-button w3-round-large w3-hover-purple' onclick="random_number(100)">d100</button>
`;
// <button class='w3-button w3-round-large w3-hover-purple' onclick="random_number_input()">Random Number</button>

let links = `
<a href='https://deckstats.net/' target='_blank'>Deckstats</a><br>
<a href='https://www.moxfield.com/' target='_blank'>Moxfield</a><br>
<a href='https://scryfall.com/' target='_blank'>Scryfall</a><br>
<a href='https://www.cardmarket.com/en/Magic' target='_blank'>CardMarket</a><br>
<a href='https://edhrec.com/' target='_blank'>EDHRec</a><br>
<a href='https://spelltable.com/' target='_blank'>Spelltable</a><br>
<a href='https://cedh-decklist-database.com/' target='_blank'>cEDH Decklist Database</a><br>
<a href='https://mpcfill.com/' target='_blank'>MPC Fill</a><br>
<a href='https://makeplayingcards.com/' target='_blank'>MPC</a><br>
`;

function toggle_dark_white() {
    var element = document.body;
    element.classList.toggle("white-mode");
}

function lifetracker(){

}

function rngmenu(){
    hide_all()
    const menu = document.getElementById("menu");
    menu.style.visibility = "visible";
    menu.innerHTML = rng;
}

function flip_coin(){
    const element = document.getElementById("content");
    element.style.visibility = "visible";
    const res = Math.round(Math.random());
    if (res == 0) {
        element.innerHTML = "<h3>Heads</h3>";
    } else if (res == 1) {
        element.innerHTML = "<h3>Tails</h3>";
    }
}

function random_number(max){
    const element = document.getElementById("content");
    element.style.visibility = "visible";
    
    const res = Math.floor(Math.random() * max+1);

    element.innerHTML = "<h3>"+res+"</h3>";
}

function show_resources(){
    hide_all()
    const element = document.getElementById("menu");
    element.style.visibility = "visible";
    element.innerHTML = links;
}

function hide_all(){
    const collection = document.getElementsByClassName("hidden");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.visibility = "hidden";
      }
}