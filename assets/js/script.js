let arrowUp = document.querySelectorAll('.arrowUp'); // Boutton qui retreci/agrandi les card
let arrowDown = document.querySelectorAll('.arrowDown'); // Boutton qui retreci/agrandi les card
let descriptionCard = document.querySelectorAll('.descriptionCard'); // Description des cards
let imgCard = document.querySelectorAll('.imgCard'); // Image des cards

    // Au click de la fleche vers le haut, retrecir la card
for(let i = 0; i < arrowUp.length; i++){
    arrowUp[i].addEventListener('click', () => {
    arrowUp[i].classList.add('none');
    descriptionCard[i].classList.add('none');
    imgCard[i].classList.add('none');
    arrowDown[i].classList.remove('none');
});
}

    // Au click de la fleche vers le bas, agrandir la card
for(let i = 0; i < arrowDown.length; i++){
    arrowDown[i].addEventListener('click', () => {
    arrowUp[i].classList.remove('none');
    descriptionCard[i].classList.remove('none');
    imgCard[i].classList.remove('none');
    arrowDown[i].classList.add('none');
});
}
