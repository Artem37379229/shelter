const burgerBtn = document.querySelector('.header__burger-menu')
const body = document.querySelector('body')
const headerMenu = document.querySelector('.menu') 
const headerList = document.querySelector('.menu-list')
const menuLink = document.querySelectorAll('.menu-link')

burgerBtn.addEventListener('click', () => {
    body.classList.toggle('fixed-body')
    burgerBtn.classList.toggle('burger-menu__rotate')
    headerMenu.classList.toggle('menu-active')
})

headerList.addEventListener('click', (e) => {
    if((e.target.tagName) === 'A') {
        body.classList.remove('fixed-body')
        burgerBtn.classList.remove('burger-menu__rotate')
        headerMenu.classList.remove('menu-active')
    }
})

menuLink.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        if (headerMenu.classList.contains('menu-active')) {
            headerMenu.addEventListener('transitionend', () => {
                document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
            }, {once: true})
        } else {
            document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
        }
    })
})



// async function addJson() {
//     const response = await fetch("./packet.json");
//     const arrCards = await response.json();


//     const sortCards = () => {
//         arrCards.sort(() =>  Math.random() - 0.5)
//     }
//     sortCards()

// const slider = document.querySelector('.slides__content')
// let showCards = 3;

// const decstopWidth = window.matchMedia('(min-width:1000px)')
// const tableWidth = window.matchMedia('(min-width:501px) and (max-width: 949px')
// const mobileWidth = window.matchMedia('(min-width:320px) and (max-width: 500px)')


// function checkWindowWidth () {

//     if (decstopWidth.matches) {
//         showCards = 3
//     } else if (tableWidth.matches) {
//         showCards = 2
//     } else if (mobileWidth.matches) {
//         showCards = 1
//     }
//     console.log(showCards)
// }
// checkWindowWidth()
// decstopWidth.addEventListener('change', checkWindowWidth)
// tableWidth.addEventListener('change', checkWindowWidth)
// mobileWidth.addEventListener('change', checkWindowWidth)

// const clearSlider = () => {
//     slider.innerHTML = ''
// }
// clearSlider()

// const makeCard = (arr) => {
//     const slideEl = document.createElement('div')
//     slideEl.classList.add('slide')

//     const slideImage = document.createElement('img')
//     slideImage.src = arr.img

//     const textDiv = document.createElement('div')
//     textDiv.classList.add('slide-name')
//     textDiv.textContent = arr.name

//     const btnEl = document.createElement('button')
//     btnEl.classList.add('slider-card-button')
//     btnEl.textContent = 'Learn more'

//     slideEl.append(slideImage, textDiv, btnEl)
//     slider.appendChild(slideEl)
//     return slideEl
   
// }
// for(let i = 0; i < showCards; i++) {
//     makeCard(arrCards[i])
// }
// }
// addJson()
