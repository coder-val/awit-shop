function Shop() {
    document.getElementById("Shop").classList.add("active")
    document.getElementById("About").classList.remove("active")
    document.getElementById("Faq").classList.remove("active")
    document.getElementById("Contact").classList.remove("active")
}

function Shopp() {
    document.getElementById("Shopp").style.color = "rgb(117, 117, 117)"
    document.getElementById("Aboutt").style.color = "black"
    document.getElementById("Faqq").style.color = "black"
    document.getElementById("Contactt").style.color = "black"
}

function About() {
    document.getElementById("Shop").classList.remove("active")
    document.getElementById("About").classList.add("active")
    document.getElementById("Faq").classList.remove("active")
    document.getElementById("Contact").classList.remove("active")
}

function Aboutt() {
    document.getElementById("Shopp").style.color = "black"
    document.getElementById("Aboutt").style.color = "rgb(117, 117, 117)"
    document.getElementById("Faqq").style.color = "black"
    document.getElementById("Contactt").style.color = "black"
}

function Faq() {
    document.getElementById("Shop").classList.remove("active")
    document.getElementById("About").classList.remove("active")
    document.getElementById("Faq").classList.add("active")
    document.getElementById("Contact").classList.remove("active")
}

function Faqq() {
    document.getElementById("Shopp").style.color = "black"
    document.getElementById("Aboutt").style.color = "black"
    document.getElementById("Faqq").style.color = "rgb(117, 117, 117)"
    document.getElementById("Contactt").style.color = "black"
}

function Contact() {
    document.getElementById("Shop").classList.remove("active")
    document.getElementById("About").classList.remove("active")
    document.getElementById("Faq").classList.remove("active")
    document.getElementById("Contact").classList.add("active")
}

function Contactt() {
    document.getElementById("Shopp").style.color = "black"
    document.getElementById("Aboutt").style.color = "black"
    document.getElementById("Faqq").style.color = "black"
    document.getElementById("Contactt").style.color = "rgb(117, 117, 117)"
}

function showDropdown() {
    document.getElementById("user-dropdown").classList.add("showDropdown")
}

function hideDropdown() {
    document.getElementById("user-dropdown").classList.remove("showDropdown")
}

function openCart() {
    document.getElementById("cart-right-container").classList.add("cart-right-container-open")
    document.getElementById("cart-right").classList.add("cart-right-open")
    document.getElementById("fa-angle-right").classList.add("rotate-angle")
}

function closeCart() {
    document.getElementById("cart-right-container").classList.remove("cart-right-container-open")
    document.getElementById("cart-right-container").classList.add("cart-right-container-close")
    document.getElementById("cart-right").classList.remove("cart-right-open")
    document.getElementById("cart-right").classList.add("cart-right-close")
    document.getElementById("fa-angle-right").classList.remove("rotate-angle")
}

function showItem1() {
    document.getElementById("Item1").style.bottom = "0"
    document.getElementById("btn1").style.opacity = "1"
}

function hideItem1() {
    document.getElementById("Item1").style.bottom = "-20%"
    document.getElementById("btn1").style.opacity = "0"
}

function showItem2() {
    document.getElementById("Item2").style.bottom = "0"
    document.getElementById("btn2").style.opacity = "1"
}

function hideItem2() {
    document.getElementById("Item2").style.bottom = "-20%"
    document.getElementById("btn2").style.opacity = "0"
}

function showItem3() {
    document.getElementById("Item3").style.bottom = "0"
    document.getElementById("btn3").style.opacity = "1"
}

function hideItem3() {
    document.getElementById("Item3").style.bottom = "-20%"
    document.getElementById("btn3").style.opacity = "0"
}

function showItem4() {
    document.getElementById("Item4").style.bottom = "0"
    document.getElementById("btn4").style.opacity = "1"
}

function hideItem4() {
    document.getElementById("Item4").style.bottom = "-20%"
    document.getElementById("btn4").style.opacity = "0"
}

function modalOpen1() {
    document.getElementById("modal-item1").classList.add("modal-open")
    document.querySelector(".modal-background").style.display = "block"
}
function modalOpen2() {
    document.getElementById("modal-item2").classList.add("modal-open")
    document.querySelector(".modal-background").style.display = "block"
}
function modalOpen3() {
    document.getElementById("modal-item3").classList.add("modal-open")
    document.querySelector(".modal-background").style.display = "block"
}
function modalOpen4() {
    document.getElementById("modal-item4").classList.add("modal-open")
    document.querySelector(".modal-background").style.display = "block"
}

function modalClose() {
    document.getElementById("modal-item1").classList.remove("modal-open")
    document.getElementById("modal-item2").classList.remove("modal-open")
    document.getElementById("modal-item3").classList.remove("modal-open")
    document.getElementById("modal-item4").classList.remove("modal-open")
    document.querySelector(".modal-background").style.display = "none"
}

function openCartModel() {
    document.getElementById("modal-item1").classList.remove("modal-open")
    document.getElementById("modal-item2").classList.remove("modal-open")
    document.getElementById("modal-item3").classList.remove("modal-open")
    document.getElementById("modal-item4").classList.remove("modal-open")
    document.querySelector(".modal-background").style.display = "none"

    document.getElementById("cart-right-container").classList.add("cart-right-container-open")
    document.getElementById("cart-right").classList.add("cart-right-open")
    document.getElementById("fa-angle-right").classList.add("rotate-angle")
}

function addFavorite() {
    document.getElementById("far-heart").style.display = "none"
    document.getElementById("fas-heart").style.display = "inline-block"
}
function removeFavorite() {
    document.getElementById("far-heart").style.display = "inline-block"
    document.getElementById("fas-heart").style.display = "none"
}

function openHam() {
    x = document.getElementById('nav-hamburger')
    
    if (x.style.top == "80px") {
            x.style.top = "60px"
            x.style.opacity = 0
            x.style.zIndex = -1
    }
    else {
        x.style.top = "80px"
        x.style.opacity = 1 
        x.style.zIndex = 1
    }
}

function closeHam() {
    x = document.querySelector('.nav-hamburger')
    x.style.top = "60px"
    x.style.opacity = 0
    x.style.zIndex = -1
}