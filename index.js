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
    if ((e.target.tagName) === 'A') {
        body.classList.remove('fixed-body')
        burgerBtn.classList.remove('burger-menu__rotate')
        headerMenu.classList.remove('menu-active')
    }
})

menuLink.forEach((link) => {
    link.addEventListener('click', (e) => {
        if (headerMenu.classList.contains('menu-active')) {
            headerMenu.addEventListener('transitionend', () => {
                document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
            }, {once: true})
        } else {
            document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
        }
    })
})




function getDate() {
    fetch("packet.json")
        .then(res => res.json())
        .then(data => {

            const shuffle = (data) => [...data].sort(() => Math.random() - 0.5)

            let currentCards = []

            function makeCard(data) {
                const slide = document.createElement('div');
                slide.classList.add('slide');

                slide.insertAdjacentHTML('afterbegin',`
                  <img src="${data.img}" alt="${data.name}">
                  <div class="slide-name">${data.name}</div>
                  <button class="slider-card-button">Learn more</button>`
                )

                return slide;
            }


            function getSize () {
                const width = window.innerWidth
                if (width >= 1024) return 3;
                if (width >= 768) return 2;
                return 1;
            }


            function getNextGroup () {
                const showCardsSize = getSize()
                const available = data.filter(pet => !currentCards.includes(pet))
                const shuffled = shuffle(available)
                return shuffled.slice(0, showCardsSize)
            }

            const slider = document.querySelector('.slides__content');

            function renderCards(data) {
                data.forEach(card => slider.append(makeCard(card)))
            }

            function changeCards(data) {
                slider.style.opacity = '0';
                setTimeout(() => {
                    slider.innerHTML = ``
                    renderCards(data);
                    slider.style.opacity = '1';
                }, 300);
            }

            function next() {
                currentCards = getNextGroup();
                changeCards(currentCards);
            }

            function prev() {
                currentCards = getNextGroup();
                changeCards(currentCards);
            }

            currentCards = getNextGroup();
            renderCards(currentCards);

            document.querySelector('.slider-button.next').addEventListener('click', next);
            document.querySelector('.slider-button.prev').addEventListener('click', prev);


        })
        .catch(err => console.log(err))
}

getDate()
