$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            margin: 48,
            items: 3,
            dots: false,
            loop: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 32,
                },
                601: {
                    items: 3,
                    margin: 0,
                  
                }
                ,
                1001: {
                    items: 3,
                    margin: 32,

                }


            }
        }
    );
});

const videoBtn = document.querySelector('#video-btn')
const videoPicture = document.querySelector('.video__picture')
const videoWrapper = document.querySelector('.video')
const video = document.querySelector('#video-file')


videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        videoPicture.classList.add('hidden')
        videoWrapper.classList.remove('video-overlay')
        videoBtn.classList.add('none')
        video.play()
    } else {
        videoWrapper.classList.add('video-overlay')
        videoBtn.classList.remove('none')
        video.pause()
    }
})

const openNavbtn = document.querySelector('#openMobileNav')
const mobileNav = document.querySelector('#mobileNav')
const closeMobilebtn = document.querySelector('#closeMobileNav')
openNavbtn.onclick = function () {
    mobileNav.classList.remove('none')
    document.body.classList.add('no-scroll')

}
closeMobilebtn.onclick = function() {
    mobileNav.classList.add('none')
    document.body.classList.remove('no-scroll')
}