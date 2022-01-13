function itemCr1() {
    document.getElementById('cr1').style.display = "none"
    document.getElementById('hr1').style.display = "none"

    let a = document.getElementById('cr1')
    let b = document.getElementById('cr2')
    let c = document.getElementById('cr3')
    let d = document.getElementById('cr4')
    
    if (a.style.display == "none" && b.style.display == "none" && c.style.display == "none" && d.style.display == "none") {
        document.getElementById('cart-right-content').style.display = "none"
        document.getElementById('cart-right-subtotal').style.display = "none"
        document.getElementById('cart-right-vc').style.display = "none"
        document.getElementById('cart-right-empty').style.display = "block"
    }
}
function itemCr2() {
    document.getElementById('cr2').style.display = "none"
    document.getElementById('hr2').style.display = "none"
    
    let a = document.getElementById('cr1')
    let b = document.getElementById('cr2')
    let c = document.getElementById('cr3')
    let d = document.getElementById('cr4')
    
    if (a.style.display == "none" && b.style.display == "none" && c.style.display == "none" && d.style.display == "none") {
        document.getElementById('cart-right-content').style.display = "none"
        document.getElementById('cart-right-subtotal').style.display = "none"
        document.getElementById('cart-right-vc').style.display = "none"
        document.getElementById('cart-right-empty').style.display = "block"
    }
}
function itemCr3() {
    document.getElementById('cr3').style.display = "none"
    document.getElementById('hr3').style.display = "none"
    
    let a = document.getElementById('cr1')
    let b = document.getElementById('cr2')
    let c = document.getElementById('cr3')
    let d = document.getElementById('cr4')
    
    if (a.style.display == "none" && b.style.display == "none" && c.style.display == "none" && d.style.display == "none") {
        document.getElementById('cart-right-content').style.display = "none"
        document.getElementById('cart-right-subtotal').style.display = "none"
        document.getElementById('cart-right-vc').style.display = "none"
        document.getElementById('cart-right-empty').style.display = "block"
    }
}
function itemCr4() {
    document.getElementById('cr4').style.display = "none"
    
    let a = document.getElementById('cr1')
    let b = document.getElementById('cr2')
    let c = document.getElementById('cr3')
    let d = document.getElementById('cr4')
    
    if (a.style.display == "none" && b.style.display == "none" && c.style.display == "none" && d.style.display == "none") {
        document.getElementById('cart-right-content').style.display = "none"
        document.getElementById('cart-right-subtotal').style.display = "none"
        document.getElementById('cart-right-vc').style.display = "none"
        document.getElementById('cart-right-empty').style.display = "block"
    }
}

function showcrX1() {
    document.getElementById('cr-x1').style.opacity = "1"
}
function showcrX2() {
    document.getElementById('cr-x2').style.opacity = "1"
}
function showcrX3() {
    document.getElementById('cr-x3').style.opacity = "1"
}
function showcrX4() {
    document.getElementById('cr-x4').style.opacity = "1"
}


function hidecrX1() {
    document.getElementById('cr-x1').style.opacity = "0"
}
function hidecrX2() {
    document.getElementById('cr-x2').style.opacity = "0"
}
function hidecrX3() {
    document.getElementById('cr-x3').style.opacity = "0"
}
function hidecrX4() {
    document.getElementById('cr-x4').style.opacity = "0"
}