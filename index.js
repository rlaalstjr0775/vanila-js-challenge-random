const maxNumber = document.querySelector("#max-number");
const pickNumber = document.querySelector("#pick-number");
const playBtn = document.querySelector("#play-button");

const user = document.querySelector("#user");
const machine = document.querySelector("#machine");
const results = document.querySelector("#results");

function playBtnClick(event) {
    event.preventDefault();

    const userPick = parseInt(pickNumber.value);
    const userMax = parseInt(maxNumber.value); 
    const random = parseInt(Math.ceil(Math.random()*(userMax+1)-1));

    if (userPick === random) {
        results.innerHTML = "You Won!"
    } else if (userPick > userMax || userPick < 0 || userMax < 0) {
        alert("This is a wrong number!");
        location.reload(true);
    } else if ( (isNaN(userPick)) === true || (isNaN(userMax)) === true ) {
        alert("Put a number please!");
        location.reload(true);
    } else {
        results.innerHTML = "You Lose!"
    }

    user.innerHTML = `You chose: ${userPick},`
    machine.innerHTML = `the machine chose: ${random}.`
}

playBtn.addEventListener("click", playBtnClick);

