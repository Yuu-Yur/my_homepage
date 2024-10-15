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
        targetInput.style.color = 'white';
        targetInput.style.backgroundColor = 'darkblue';

        setColor('powderblue');
    }
    else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night mode'
        targetInput.style.color = 'black';
        targetInput.style.backgroundColor = 'seashell';

        setColor('blue');
    }
}

// 사이드 설정
function setside() {
    const side = document.getElementById("side");
    const menu = `
    <ol id="menu"> 
    <li><a href="1.html">HTML</a></li>
    <li><a href="2.html">CSS</a></li>
    <li><a href="3.html">JavaScript</a></li>
    <li><a href="9.html">5~9장 html+CSS</a> </li>
    <li><a href="10.html" class="new">10~12장 CSS</a></li>
    <li><a href="13.html" class="new">13장~17장 JavaScript</a></li>
    <li><a href="lunchMenu.html" class="new">제일 좋아하는 점심 메뉴!</a></li>
    </ol>`;
    side.innerHTML = menu;
}
setside();

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


// 점심 메뉴 실습
let randomNumber = 0;
let selectedMenu = 0;
const menu = ['포항돼지국밥', '용이네탕슉', '화전국수', '서브웨이', '해피통닭', '봉추찜닭', '기장손칼국수', '샐러드바스켓', '문화양곱창', '온센'];
const price = ['9000원', '36000원', '7000원', '7400원', '18000원', '25000원', '5000원', '6500원', '40000원', '11000원'];
document.getElementById("lunchMenu").addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * menu.length);
    console.log(randomNumber);
    selectedMenu = menu[randomNumber];
    selectedprice = price[randomNumber];
    document.getElementById('lunchMenuDisplay').innerHTML = `${selectedMenu} <br> ${selectedprice}`;
    document.getElementById('lunchMenuDisplay').style.background = `url(images/${selectedMenu}.jpg) no-repeat`;
    document.getElementById('lunchMenuDisplay').style.backgroundSize = "contain";
    document.getElementById('lunchMenuDisplay').style.backgroundPosition = "center";
});

function addMenuItem() {
    const menuInput = document.getElementById('menuInput').value;
    const priceInput = document.getElementById('priceInput').value;

    // not menu입력 or not price입력로 체크
    if (!menuInput || !priceInput) {
        alert('메뉴 이름과 가격을 모두 입력하세요.');
        return;
    }

    // 배열에 추가
    menu.push(menuInput);
    price.push(priceInput);

    // 입력값 초기화
    document.getElementById('menuInput').value = '';
    document.getElementById('priceInput').value = '';

    // 메뉴 목록 업데이트
    updateMenuList();
}

function updateMenuList() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = ''; // 기존 목록 초기화

    // 현재 메뉴를 목록에 추가
    for (let i = 0; i < menu.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `${menu[i]} - ${price[i]}`;

        // 삭제 버튼 생성
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener("click", function() {
            deleteMenuItem(i);
        }); //이벤트 리스너로 삭제버튼에 각각 인덱스의 번호에 맞는 삭제 함수를 부여

        listItem.appendChild(deleteButton); // 삭제 버튼을 목록 항목에 추가
        menuList.appendChild(listItem); // 목록에 항목 추가
    };
}

function deleteMenuItem(index) {
    // 스플라이스로 받은 매개변수부터 1개의 인덱스를 제거
    menu.splice(index, 1);
    price.splice(index, 1);

    // 메뉴 목록 업데이트
    updateMenuList();
}

// 초기 메뉴 목록 표시
updateMenuList();