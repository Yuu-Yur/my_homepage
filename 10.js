// 10장 실습
function translate3d(a, b, c) {
    // 대상 요소 선택
    let target = document.getElementById("move");

    // 지정받은 방향a,b,c으로 200픽셀만큼 이동
    target.style.transform = `translate3d(${a}px, ${b}px, ${c}px)`;
}

function scale3d(a, b, c) {
    // 대상 요소 선택
    let target = document.getElementById("move");

    // 지정받은 방향a,b,c으로 200픽셀만큼 확대
    target.style.transform = `scale3d(${a}, ${b}, ${c})`;
}

function rotate3d(a, b, c, d) {
    // 대상 요소 선택
    let target = document.getElementById("move");

    // 지정받은 방향a,b,c으로 d deg만큼 회전
    target.style.transform = `rotate3d(${a}, ${b}, ${c}, ${d}deg)`;
}

function skew(a, b) {
    // 대상 요소 선택
    let target = document.getElementById("move");

    // 지정받은 방향으로 a deg, b deg 만큼 비틀기
    target.style.transform = `skew(${a}deg, ${b}deg)`;
}

function reset() {
    let target = document.getElementById("move");
    target.style.transform = "translate3d(0)";
    target.style.transform = "scale3d(0)";
    target.style.transform = "rotate3d(0)";
    target.style.transform = "skew(0)";
}

function translate3d2(a, b, c) {
    // 대상 요소 선택
    let target = document.getElementById("move2");

    // 지정받은 방향a,b,c으로 200픽셀만큼 이동
    target.style.transform = `translate3d(${a}px, ${b}px, ${c}px)`;
}

function scale3d2(a, b, c) {
    // 대상 요소 선택
    let target = document.getElementById("move2");

    // 지정받은 방향a,b,c으로 200픽셀만큼 확대
    target.style.transform = `scale3d(${a}, ${b}, ${c})`;
}

function rotate3d2(a, b, c, d) {
    // 대상 요소 선택
    let target = document.getElementById("move2");

    // 지정받은 방향a,b,c으로 d deg만큼 회전
    target.style.transform = `rotate3d(${a}, ${b}, ${c}, ${d}deg)`;
}

function skew2(a, b) {
    // 대상 요소 선택
    let target = document.getElementById("move2");

    // 지정받은 방향으로 a deg, b deg 만큼 비틀기
    target.style.transform = `skew(${a}deg, ${b}deg)`;
}

function reset2() {
    let target = document.getElementById("move2");
    target.style.transform = "translate3d(0)";
    target.style.transform = "scale3d(0)";
    target.style.transform = "rotate3d(0)";
    target.style.transform = "skew(0)";
}

function animation() {
    let target = document.getElementById("move3");
    target.style.animation = "translate 5s infinite";
}

function animationStop() {
    let target = document.getElementById("move3")
    target.style.animation = "none";
}
