const clicks = document.querySelector('#CLICK');
const compteurClicks = document.getElementById('#cpt');

let clicksNumber = 0;

clicks.addEventListener('click', () => {
    clicks++;

    if(clicks >=5 && clicks <=9){
        clicks.innerHTML= "Bravo, bel échauffement !";
    }
    
    if(clicks >=10){
        clicks.innerHTML= "Vous êtes passé maître en l'art du clic !";
    }
    
  console.log('onClickHandlerForBtn1::click');
});