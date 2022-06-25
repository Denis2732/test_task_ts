polyfillForEach() 
polyfillSVG()

let playVideo = document.querySelector('.video__play')
let video = document.querySelector('video')
let videoPoster = document.querySelector('.video__poster')
let videoPreview = document.querySelectorAll('.video-row__img')
let checkbox = document.querySelector('#check')
let check = document.querySelectorAll('.check')
let price = document.querySelectorAll('.tariff__description-prise')

video.volume = 0.2
//! Запуск основного видео
playVideo.addEventListener('click', function(){
    video.setAttribute('src', './video/video.mp4')
    playVideo.style.display = "none"
    videoPoster.style.display = "none"
    video.play()
})

//! Возвращаем preview и кнопку play
video.addEventListener('click', function(){
    video.pause();
    playVideo.style.display = "inline"
    videoPoster.style.display = "inline"
    videoPreview.forEach(function(elem, index) {
        elem.classList.remove('active')
    })
})

//! По клику на preview подменяем и запускаем видео
videoPreview.forEach(function(elem, index) {
    elem.addEventListener('click', function(){
        video.setAttribute('src', './video/video' + index + '.mp4')
        playVideo.style.display = "none"
        videoPoster.style.display = "none"
        video.play()
        //! Стоп на preview 
        if(elem.classList.contains('active')){
            video.pause();
            playVideo.style.display = "inline"
            videoPoster.style.display = "inline"
        }
        elem.classList.toggle('active')
        
    })
})

//! Переключатель и изменения цены
checkbox.addEventListener('click', function(){
    if(checkbox.checked) {  
        check[1].classList.add('disabled')
        check[0].classList.remove('disabled')
        price[0].innerHTML = "6000&#8381;"
        price[1].innerHTML = "12000&#8381;"
    } else {
        console.log(checkbox.checked); 
        check[0].classList.add('disabled')
        check[1].classList.remove('disabled')
        price[0].innerHTML = "500&#8381;"
        price[1].innerHTML = "1000&#8381;"
    }
})

//! Кастомные label и изменения цены
check.forEach(function(elem, index){
    elem.addEventListener('click', function(){
        if(index == 1){
            checkbox.checked = true; 
            check[1].classList.add('disabled')
            check[0].classList.remove('disabled')
            console.log(checkbox.checked);
            price[0].innerHTML = "6000&#8381;"
            price[1].innerHTML = "12000&#8381;"
        } 
        if(index == 0) {
            checkbox.checked = false; 
            check[0].classList.add('disabled')
            check[1].classList.remove('disabled')
            console.log(checkbox.checked); 
            price[0].innerHTML = "500&#8381;"
            price[1].innerHTML = "1000&#8381;"
        }
    })
})
