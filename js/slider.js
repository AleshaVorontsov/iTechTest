$(function () {
    var $dataSlick = null;

    var $btnPrev = null;
    var $btnNext = null;
    var $currentSlide = null;
    var currentSlideIndex = null;
    var $prevSlide = null;
    var prevSlideIndex = null;
    var $nextSlide = null;
    var $wrap = null;
    var $callBtn = null;
    var $close = null;
    var nextSlideIndex = null;
    var delay = 3000; //интервал смены слайдов
    var interval = null;

    $(document).ready(function () {
        /*$dataSlick = $('.data-slick');

        $dataSlick.slick({
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 3
        });*/

        $btnPrev = $('#prev-slide');
        $btnNext = $('#next-slide');

        $btnPrev.on('click', _showPrevImage);
        $btnNext.on('click', _showNextImage);

        interval = setInterval(_showNextImage, delay);

        $wrap = $('#wrap');
        $callBtn = $('#call-btn');
        $close = $('.close');

        $wrap.on('click', function () { _show('none'); });
        $close.on('click', function () { _show('none'); });
        $callBtn.on('click', function () { _show('block'); });
    });

    var _show = function (state) {
        $('#call-window').css('display', state);
        $('#wrap').css('display', state);
    };

    var _showPrevImage = function () {
        clearInterval(interval);
        $currentSlide = $('.myslider .current');
        currentSlideIndex = $currentSlide.index();
        prevSlideIndex = currentSlideIndex - 1;
        $prevSlide = $('.myslider .slider-content').eq(prevSlideIndex);

        $currentSlide.fadeOut(400);
        $currentSlide.removeClass('current');

        if (prevSlideIndex == - 1) {
            $('.myslider .slider-content').each(function () {
                $(this).fadeOut(800);
            });
        }
        $prevSlide.fadeIn(800);
        $prevSlide.addClass('current');
        interval = setInterval(_showNextImage, delay);
    };

    var _showNextImage = function () {
        clearInterval(interval);
        $currentSlide = $('.myslider .current');
        currentSlideIndex = $currentSlide.index();
        nextSlideIndex = currentSlideIndex + 1;
        //console.log('nextSlideIndex=' + nextSlideIndex);
        $nextSlide = $('.myslider .slider-content').eq(nextSlideIndex);

        $currentSlide.fadeOut(400);
        let $slides = $('.myslider .slider-content');
        //console.log('last()=' + ($slides.last().index() + 1));
        $currentSlide.removeClass('current');

        if (nextSlideIndex == ($slides.last().index() + 1)) {
            $slides.eq(0).fadeIn(800);
            $slides.eq(0).addClass('current');
        }
        else {
            $nextSlide.fadeIn(800);
            $nextSlide.addClass('current');
        }
        interval = setInterval(_showNextImage, delay);
    };
});