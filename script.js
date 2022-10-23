var cards = document.getElementsByClassName("card");

function flipping(event){
        event.target.classList.toggle("back")
        event.target.classList.toggle("front")
}

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    card.addEventListener("click", flipping);
}
