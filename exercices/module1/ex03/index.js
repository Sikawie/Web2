const compteurClicks = document.querySelector('#CLICK');
let clicks = 0;

compteurClicks.addEventListener('click', () => {
    clicks++;

    if(clicks >=5 && clicks <=9){
        compteurClicks.innerHTML= "Bravo, bel échauffement !";
    }
    if(clicks >=10){
        compteurClicks.innerHTML= "Vous êtes passé maître en l'art du clic !";
    }
    
  console.log('onClickHandlerForBtn1::click');
});