async function addJson() {
    const response = await fetch("../packet.json");
    const arrCards = await response.json();

    let newArr = [];

    function shuffleCards(data) {
        const copy = [...data]
        for (let i = copy.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]]
        }
        return copy
    }


    for (let i = 0; i < 6; i++) {
        newArr.push(shuffleCards(arrCards));
    }

    let currentPage = 1;
    let items = 8
    let total = 6;

    function createCard(data) {

        const card = document.createElement('div');
        card.classList.add('pagination__card');

        card.insertAdjacentHTML('afterbegin', `
                  <img src="${data.img}" alt="${data.name}">
                  <div class="slide-name">${data.name}</div>
                  <button class="slider-card-button">Learn more</button>`
        )

        return card
    }


    function renderCards(data) {
        const cardsEl = document.querySelector('.pagination__cards')
        const shuffleArr = data[currentPage - 1]
        cardsEl.innerHTML = ``

        shuffleArr.forEach(item => {
            cardsEl.append(createCard(item))
        })
    }

    document.querySelector('.slider-control--next').addEventListener('click', () => {
        if(currentPage >= 6) return
        currentPage++;
        renderCards(newArr)
    })

    document.querySelector('.slider-control--next-end').addEventListener('click', () => {
        if(currentPage >= 6) return
        currentPage = 6;
        renderCards(newArr)
    })


    document.querySelector('.slider-control--prev').addEventListener('click', () => {
        if(currentPage <= 1) return
        currentPage--;
        renderCards(newArr)
    })

    document.querySelector('.slider-control--prev-start').addEventListener('click', () => {
        if(currentPage <= 1) return
        currentPage = 1;
        renderCards(newArr)
    })

    renderCards(newArr)

}

addJson()

