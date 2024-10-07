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