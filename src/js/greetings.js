const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// querySelector는 조건이 만족된 첫번째 요소를 가져옴

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event)
{
    event.preventDefault(); // 기본행동 막기 (이벤트, submit : 새로고침)
    loginForm.classList.add(HIDDEN_CLASSNAME);    
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName); // 로컬 스토리지에 저장하기
    paintGreetings(userName);
}

function paintGreetings(text)
{
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${text}`; // ~ 밑에 있는 `
}

// 값 저장하기!
// 새로고침시 youtube 에서 볼륨값을 기억하듯
// 이걸 해주는 것이 local storage
const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else
{
    paintGreetings(savedUserName);
}
