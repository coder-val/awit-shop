function itemRemove1() {
    let a = document.getElementById('item1')
    let b = document.getElementById('item2')
    let c = document.getElementById('item3')
    let d = document.getElementById('item4')
    a.style.display = "none"
    if (a.style.display == "none" && b.style.display == "none" && c.style.display == "none" && d.style.display == "none") {
        document.querySelector('.cart-summary').style.display = "none"
        document.getElementById('empty-cart').style.display = "block"
        document.querySelector('.cart-header').style.borderBottom = "none"
    }
}
function itemRemove2() {
    let a = document.getElementById('item1')
    let b = document.getElementById('item2')
    let c = document.getElementById('item3')
    let d = document.getElementById('item4')
    b.style.display = "none"
    if (a.style.display == "none" && b.style.display == "none" && c.style.display == "none" && d.style.display == "none") {
        document.querySelector('.cart-summary').style.display = "none"
        document.getElementById('empty-cart').style.display = "block"
        document.querySelector('.cart-header').style.borderBottom = "none"
    }
}
function itemRemove3() {
    let a = document.getElementById('item1')
    let b = document.getElementById('item2')
    let c = document.getElementById('item3')
    let d = document.getElementById('item4')
    c.style.display = "none"
    if (a.style.display == "none" && b.style.display == "none" && c.style.display == "none" && d.style.display == "none") {
        document.querySelector('.cart-summary').style.display = "none"
        document.getElementById('empty-cart').style.display = "block"
        document.querySelector('.cart-header').style.borderBottom = "none"
    }
}
function itemRemove4() {
    let a = document.getElementById('item1')
    let b = document.getElementById('item2')
    let c = document.getElementById('item3')
    let d = document.getElementById('item4')
    d.style.display = "none"
    if (a.style.display == "none" && b.style.display == "none" && c.style.display == "none" && d.style.display == "none") {
        document.querySelector('.cart-summary').style.display = "none"
        document.getElementById('empty-cart').style.display = "block"
        document.querySelector('.cart-header').style.borderBottom = "none"
    }
}


function showX1() {
    document.getElementById('x1').style.opacity = "1"
}
function showX2() {
    document.getElementById('x2').style.opacity = "1"
}
function showX3() {
    document.getElementById('x3').style.opacity = "1"
}
function showX4() {
    document.getElementById('x4').style.opacity = "1"
}


function hideX1() {
    document.getElementById('x1').style.opacity = "0"
}
function hideX2() {
    document.getElementById('x2').style.opacity = "0"
}
function hideX3() {
    document.getElementById('x3').style.opacity = "0"
}
function hideX4() {
    document.getElementById('x4').style.opacity = "0"
}