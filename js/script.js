// function myClick() {
//     alert("click olundu")
// }
// function myClick() {
//     let but = document.querySelector('h1')

//     if (but.style.display != 'none') {
//         but.style.display = 'none'
//     }
//     else {
//         but.style.display = 'block'

//     }


//     let img = document.querySelector('img')
//     if (img.style.display != 'none') {
//         img.style.display = 'none'
//     }
//     else {
//         img.style.display = 'block'
//     }

// }

let rightButoon = document.querySelector(".right")


function RightMove() {
    let activeImg = document.querySelector("img.active")
    let nextImg = activeImg.nextElementSibling;

    if (nextImg != null && nextImg.classList.contains("icons") == false) {
        activeImg.classList.remove("active")
        nextImg.classList.add("active")
    }

    else {
        activeImg.parentElement.firstElementChild.classList.add("active")
        activeImg.classList.remove("active");
    }
}
let leftButoon = document.querySelector(".left")
function leftMove() {
    let activeImg = document.querySelector("img.active")
    let previousImg = activeImg.previousElementSibling;

    if (previousImg != null && previousImg.classList.contains("icons") == false) {
        activeImg.classList.remove("active")
        previousImg.classList.add("active")
    }

    else {
        activeImg.parentElement.lastElementChild.previousElementSibling.classList.add("active")
        activeImg.classList.remove("active");
    }

}
