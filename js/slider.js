$(function () {
    var $btnPrev = null;
    var $btnNext = null;
    var $currentImage = null;
    var currentImageIndex = null;
    var $nextImage = null;
    var nextImageIndex = null;
    var $prevImage = null;
    var prevImageIndex = null;
    var interval = 5000; //интервал смены слайдов

    $(document).ready(function () {
        $btnPrev = $('.prev');
        $btnNext = $('.next');

        $btnPrev.on('click', _showPrevImage);
        $btnNext.on('click', _showNextImage);

        setInterval(_showNextImage, interval);
    });

    var _showPrevImage = function () {
        $currentImage = $('img.current');
        currentImageIndex = $currentImage.index();
        prevImageIndex = currentImageIndex - 1;
        $prevImage = $('img').eq(prevImageIndex);

        $currentImage.fadeOut(1000);
        $currentImage.removeClass('current');

        if (prevImageIndex == - 1) {
            $('img').each(function () {
                $(this).fadeOut(1000);
            });
        }
        $prevImage.fadeIn(1000);
        $prevImage.addClass('current');
    };

    var _showNextImage = function () {
        $currentImage = $('img.current');
        currentImageIndex = $currentImage.index();
        nextImageIndex = currentImageIndex + 1;
        $nextImage = $('img').eq(nextImageIndex);

        $currentImage.fadeOut(1000);
        $currentImage.removeClass('current');

        if (nextImageIndex == ($('img:last').index() + 1)) {
            $('img').eq(0).fadeIn(1000);
            $('img').eq(0).addClass('current');
        }
        else {
            $nextImage.fadeIn(1000);
            $nextImage.addClass('current');
        }
    };
});