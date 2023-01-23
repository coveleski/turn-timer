const resetButton = document.querySelector('#resetTimer');
const pauseButton = document.querySelector('#pauseTimer');
const startButton = document.querySelector('#startTimer');
const endTurnButton = document.querySelector('#turnOver');
const addPlayerButton = document.querySelector('#addPlayer');

const configCard = document.querySelector("#configCard");
const controlsCard = document.querySelector("#controlsCard");
const timesCard = document.querySelector("#timesCard");

const initialTimeInput = document.querySelector("#startTime");
const bonusTimeInput = document.querySelector("#bonusTime");

// const players = querySelectorAll('.player');
const playersList = document.querySelector('#players')
let numPlayers = 4;
let initialTime = 0;
let bonusTime = 0;

startButton.addEventListener('click', function (e){
    configCard.classList.add('is-hidden');
    controlsCard.classList.remove('is-hidden');
    timesCard.classList.remove('is-hidden');

    initialTime = initialTimeInput.value;
    bonusTime = bonusTimeInput.value;

});

resetButton.addEventListener('click', function (e){
    configCard.classList.remove('is-hidden');
    controlsCard.classList.add('is-hidden');
    timesCard.classList.add('is-hidden');
    //todo: don't clear and save last settings?
    initialTime = 0;
    bonusTime = 0;
    initialTimeInput.value = "";
    bonusTimeInput.value = "";
});

endTurnButton.addEventListener('click', function (e){

});

addPlayerButton.addEventListener('click', function (e){
    addPlayerField();
});

pauseButton.addEventListener('click', function (e){
    //todo: pause timer

});

function addPlayerField(){
    let newField = document.createElement('div');
    newField.classList.add('field', 'has-addons')
    newField.setAttribute('id', `p${++numPlayers}`);

    let newLabel = document.createElement('p');
    newLabel.classList.add('control');
    //newLabel.id = `p${++numPlayers}`;

    let newInput = document.createElement('input');
    newInput.classList.add('input');
    newInput.setAttribute('type','text');
    newInput.setAttribute('placeholder','Player Name');

    let newButtonContainer = document.createElement('p');
    newButtonContainer.classList.add('control');

    let newButton = document.createElement('button');
    newButton.classList.add('button', 'is-danger');
    newButton.innerText = "X";

    newLabel.appendChild(newInput);
    newButtonContainer.appendChild(newButton);
    newField.appendChild(newLabel);
    newField.appendChild(newButtonContainer);

    playersList.insertBefore(newField, addPlayerButton.parentElement);
}