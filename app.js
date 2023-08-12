document.addEventListener('DOMContentLoaded', ()=>{
    const feedbackSlider = new Swiper('.feedback__slider', {
        slidesPerView: 3,
        spaceBetween: 40,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.feedback__next',
            prevEl: '.feedback__prev'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            }, 
            560: {
                slidesPerView: 2,
            },
            921: {
                slidesPerView: 3,
            }
            
        }
    })
})