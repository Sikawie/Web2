const clicks = document.querySelector('#CLICK');
const compteurClicks = document.getElementById('cpt');

let clicksNumber = 0;

clicks.addEventListener('click', () => {
    clicksNumber++;

    if (clicksNumber >= 5 && clicksNumber <= 9) {
        clicks.innerHTML = "Bravo, bel échauffement !";
    }

    if (clicksNumber >= 10) {
        clicks.innerHTML = "Vous êtes passé maître en l'art du clic !";
    }

    compteurClicks.innerHTML = clicksNumber;

    console.log('onClickHandlerForBtn1::click');
});