
const previousEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const sliderEl = document.getElementById('slider')


nextEl.addEventListener('click', onNextClick);
previousEl.addEventListener('click', onPreviousClick);

autoScroll(); 

function onPreviousClick() {
    const slideWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= slideWidth;
};
function onNextClick() {
    const slideWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += slideWidth;
};

