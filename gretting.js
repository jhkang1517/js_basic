const form = document.querySelector(".js-form")
    , input = form.querySelector("input")
    , greeting = document.querySelector(".js-greetings")
    , list = document.querySelector(".js-toDoForm");

const USER_LS = "currentUser"
    , SHOWING_ON = 'showing';

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); // 기본동작을 막는다.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    revealToDoList();
}

function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello, ${text}`;
}

function hideToDoList() {
    list.style.display = "none";
}

function revealToDoList() {
    list.style.display = "block";
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        hideToDoList();
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init();