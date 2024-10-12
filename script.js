// 야간모드
function setColor(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
        alist[i].style.color = color;
        console.log(alist[i]);
        i = i + 1;
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');
    var targetInput = document.querySelector('input');
    if (self.value === 'night mode') {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'day mode'
        targetInput.style.color ='white';
        targetInput.style.backgroundColor='darkblue';

        setColor('powderblue');
    }
 else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'night mode'
    targetInput.style.color ='black';
    targetInput.style.backgroundColor='seashell';

    setColor('blue');
}
}

// 사이드 설정
function setside() {
    document.write(' <ol id="menu"> ')
    document.write('<li><a href="1.html">HTML</a></li>')
    document.write('<li><a href="2.html">CSS</a></li>')
    document.write('<li><a href="3.html">JavaScript</a></li>')
    document.write('<li><a href="9.html">5~9장</a> </li>')
    document.write('<li><a href="10.html" class="new">10~12장</a></li>')
    document.write('<li><a href="11.html" class="new">13장</a></li>')
    document.write('<li><a href="lunchMenu.html" class="new">제일 좋아하는 점심 메뉴!</a></li>')
    document.write(' </ol>')
}


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

// 12장 실습

// 점심 메뉴 실습
function changeImage(imageName) {
    var image = document.getElementById("lunchMenuDisplay");
    image.style.background = `url('${imageName}.jpg')`;
    image.style.backgroundRepeat = "no-repeat";
    image.style.backgroundSize = "contain";
    image.style.backgroundPosition = "center";
    if(imageName=='서면 롤링파스타') {
    image.innerHTML = "서면 롤링파스타<br>부산광역시 부산진구 서전로 10번길 60<br>추천메뉴 : 바질 페스토 크림 파스타 8900원";
    } else if(imageName=='장모족발') {
    image.innerHTML = "장모족발 서면점<br>부산광역시 부산진구 동천로 132번길 6<br>추천메뉴 : 매일삶는장모왕족 앞다리 소 24000원";
    } else { 
        image.innerHTML = "해피통닭<br>부산광역시 부산진구 중앙대로680번가길 70<br>추천메뉴 : 후반/양념반 22900원"
    }
}

