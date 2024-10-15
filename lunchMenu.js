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