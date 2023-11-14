const header = document.querySelector('header')

// 스크롤을 올릴때
     // 헤더 나타내기
// 스크롤을 내릴때
     // 헤더 숨기기
     
let posY = 0;

window.addEventListener('scroll',()=>{
    if(posY < window.scrollY){ // 스크롤 내리면
        header.classList.add('hide'); // 헤더 숨기기
    }else{ // 그렇지않으면
        header.classList.remove('hide'); // 헤더 나타내기
    }

    // 스크롤이 맨 위에 있을때
    if(window.scrollY < 50) {
        header.classList.remove('scrolled');
    } else {
        header.classList.add('scrolled');
        // 색칠하기
    }
    // 스크롤이 맨 위에 있지 않을때
     
    // getBounding... 은 쓰지않습니다
    posY = window.scrollY;
})