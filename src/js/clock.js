const clock = document.querySelector("h2#clock");

//setInterval(sayHello,5000); // 시간마다 호출
//setTimeout(sayHello,5000); // 한번만 호출

function getClock()
{
    const date = new Date();
    const zero = "0";
    
    const hours = String(date.getHours()).padStart(2,zero);
    const minute =  String(date.getMinutes()).padStart(2,zero);
    const second =  String(date.getSeconds()).padStart(2,zero);
    
    clock.innerText = `${hours} : ${minute} : ${second}`;
}

getClock();
setInterval(getClock,1000);


