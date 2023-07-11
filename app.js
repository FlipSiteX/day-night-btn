const btn = document.getElementById('btn')
const circle = document.getElementById('circle')
const smile = document.getElementById('smile')

btn.onclick = function () {
    if (circle.classList == 'animf') {
        circle.classList.add('animb');
        circle.classList.remove('animf');
        document.body.style.background = 'black';
        btn.style.borderColor = 'white';
        smile.classList.add('opac');
        setTimeout(function(){
            smile.classList.remove( 'opac' );
          }, 400);
        smile.textContent = '🌚';
    }
    else {
        circle.classList.add('animf');
        circle.classList.remove('animb');
        document.body.style.background = 'white';
        btn.style.borderColor = 'black';
        smile.classList.add('opac');
        setTimeout(function(){
            smile.classList.remove( 'opac' );
          }, 400);
        smile.textContent = '🌞';
    }
}