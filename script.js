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
    document.write('<li><a href="9.html" class="new">5~9장</a> </li>')
    document.write('<li><a href="10.html" class="new">10~12장</a></li>')
    document.write('<li><a href="11.html" class="new">13장</a></li>')
    document.write(' </ol>')
    }