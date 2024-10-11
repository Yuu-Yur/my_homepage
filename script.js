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

function moveX() {
    // 대상 요소 선택
    let target = document.getElementById("move");

    // 애니메이션 클래스 추가
    target.style.transform = "translateX(200px)";
  }

function reset() {
    var target = document.getElementById("move");
    target.style.transform = "translate(0)";
    target.style.transform = "translate3d(0)";
    target.style.transform = "scale(0)";
    target.style.transform = "scale3d(0)";
    target.style.transform = "rotate(0)";
    target.style.transform = "rotate3d(0)";
    target.style.transform = "skew(0)";
}

// 점심 메뉴 실습
function changeImage(imageName, price) {
    var image = document.getElementById("lunchMenuDisplay");
    image.style.background = `url('${imageName}.jpg')`;
    image.style.backgroundRepeat = "no-repeat";
    image.style.backgroundSize = "contain";
    image.style.backgroundPosition = "center";
    image.innerHTML = imageName + "<br>" + price;
    image.style.fontSize = "30px";
    image.style.color = "white";
    image.style.fontWeight = "bold";
    image.style.textTransform = "uppercase";
}