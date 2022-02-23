const switcher = document.getElementById("switch")
// const toggle = document.getElementById("toggle")
const price1 = document.getElementById("price1")
const price2 = document.getElementById("price2")
const price3 = document.getElementById("price3")

switcher.addEventListener('click', toggleSwitch)
// toggle.addEventListener('click', toggleSwitch)

function toggleSwitch() {
    if (switcher.classList.contains("switch-right")) {
        switcher.classList.remove("switch-right")
        switcher.classList.add("switch-left")
        console.log("switched to left")
        setTimeout(() => {
           price1.innerText = "199.99"
        price2.innerText = "249.99"
        price3.innerText = "399.99" 
        }, 100);
        
    }
    else{
        switcher.classList.remove("switch-left")
        switcher.classList.add("switch-right")
        console.log("switched to right")
        setTimeout(() => {
            price1.innerText = "19.99"
            price2.innerText = "24.99"
            price3.innerText = "39.99" 
         }, 100);
        
    }
}


var num = price.innerText

console.log(num)


// function hasClass(el, className)
// {
//     if (el.classList)
//         return el.classList.contains(className);
//     return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
// }

// function addClass(el, className)
// {
//     if (el.classList)
//         el.classList.add(className)
//     else if (!hasClass(el, className))
//         el.className += " " + className;
// }

// function removeClass(el, className)
// {
//     if (el.classList)
//         el.classList.remove(className)
//     else if (hasClass(el, className))
//     {
//         var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
//         el.className = el.className.replace(reg, ' ');
//     }
// }