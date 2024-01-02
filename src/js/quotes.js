const quotes =[
    {
        quote : "java랑 js는 다르다",
        author : "Me",
    },
    {
        quote : "게임 좀 그만해라",
        author : "Me",
    },
    {
        quote : "명언은 권위와 상황으로 만들어진다",
        author : "Me",
    },
    {
        quote : "이거 의미 있냐",
        author : "Me",
    },
    {
        quote : "three.js 공부하고 싶다",
        author : "Me",
    },
    {
        quote : "react 당신은 도대체..",
        author : "Me",
    },
    {
        quote : "프론트 END",
        author : "Me",
    },
    {
        quote : "지금이 저점이다",
        author : "Me",
    },
    {
        quote : "이걸 믿네 ㅋㅋ",
        author : "Me",
    },
    {
        quote : "이상은 높게, 시선은 곧게",
        author : "Me",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// float value들이 있음
// math.round를 이용하여 정수값으로 변경하기
// math.ceil 로 값 올리기
// math.floor 로 값 내리기
const todays = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todays.quote;
author.innerText = todays.author;
