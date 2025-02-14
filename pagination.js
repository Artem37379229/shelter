async function addJson() {
    const response = await fetch("./packet.json");
    const arrCards = await response.json();
    
    const currentPage = 1;
    const items = 8
    
    const addCards = () => {
        const cardsEl = document.querySelector('.pagination__cards')
        cardsEl.innerHTML = ''
    }
    addCards()   
    
}
addJson()