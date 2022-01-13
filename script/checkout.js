function gcashClick() {
    document.getElementById('gcash').style.backgroundColor = "#0076F2"
    document.getElementById('gcash').style.border = "2px solid white"
    document.getElementById('gcash').style.color = "white"
    document.querySelector('.fa-mobile-alt').style.color = "white"

    document.getElementById('cod').style.backgroundColor = "white"
    document.getElementById('cod').style.border = "2px solid white"
    document.getElementById('cod').style.color = "black"
    document.querySelector('.fa-wallet').style.color = "black"
}

function codClick() {
    document.getElementById('cod').style.backgroundColor = "#F05D40"
    document.getElementById('cod').style.border = "2px solid white"
    document.getElementById('cod').style.color = "white"
    document.querySelector('.fa-wallet').style.color = "white"

    document.getElementById('gcash').style.backgroundColor = "white"
    document.getElementById('gcash').style.border = "2px solid white"
    document.getElementById('gcash').style.color = "black"
    document.querySelector('.fa-mobile-alt').style.color = "black"
}

function gcashHover() {
    document.getElementById('gcash').style.border = "2px solid #0076F2"
}
function gcashOut() {
    document.getElementById('gcash').style.border = "2px solid white"
}

function codHover() {
    document.getElementById('cod').style.border = "2px solid #F05D40"
}
function codOut() {
    document.getElementById('cod').style.border = "2px solid white"
}