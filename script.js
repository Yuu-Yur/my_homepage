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
    <li><a href="10.html">10~12장 CSS</a></li>
    <li><a href="13.html" class="new">13장~17장 JavaScript</a></li>
    <li><a href="lunchMenu.html" class="new">제일 좋아하는 점심 메뉴!</a></li>
    <li><a href="bootstrapBlog.html" class="new">부트스트랩으로 템플릿가져오기</a></li>
    </ol>
    `;
    side.innerHTML = menu;
}
setside();

