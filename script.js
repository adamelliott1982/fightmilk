let showContender = document.querySelector('#show-contender');
let changeColor = document.querySelector('#change-color');
let ball1 = document.getElementById('ball-1');
let ball2 = document.getElementById('ball-2');
let fighter2 = document.querySelector('#fighter-2');





// DPAD
let dirUp = document.querySelector('#d-up');
dirUp.addEventListener('click', function(){
    ball1.style.transform += 'translateY(-20px)'
});
let dirUpRight = document.querySelector('#d-up-right');
dirUpRight.addEventListener('click', function(){
    ball1.style.transform += 'translateY(-20px)'
    ball1.style.transform += 'translateX(20px)'
});



let dirRight = document.querySelector('#d-right');
dirRight.addEventListener('click', function(){
    ball1.style.transform += 'translateX(20px)'
});
let dirDownRight = document.querySelector('#d-down-right');
dirDownRight.addEventListener('click', function(){
    ball1.style.transform += 'translateY(20px)'
    ball1.style.transform += 'translateX(20px)'
});



let dirDown = document.querySelector('#d-down');
dirDown.addEventListener('click', function(){
    ball1.style.transform += 'translateY(20px)'
});
let dirDownLeft = document.querySelector('#d-down-left');
dirDownLeft.addEventListener('click', function(){
    ball1.style.transform += 'translateY(20px)'
    ball1.style.transform += 'translateX(-20px)'
});


let dirLeft = document.querySelector('#d-left');
dirLeft.addEventListener('mousedown', function(){
    ball1.style.transform += 'translateX(-20px)'
});
let dirUpLeft = document.querySelector('#d-up-left');
dirUpLeft.addEventListener('click', function(){
    ball1.style.transform += 'translateY(-20px)'
    ball1.style.transform += 'translateX(-20px)'
});




showContender.addEventListener('click', function(){
    console.log('hello');
    ball2.classList.remove('hidden')
    fighter2.classList.remove('hidden')
})

