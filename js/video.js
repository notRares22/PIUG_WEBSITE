$(document).ready(function () {
    // Get the video element
    var video = document.getElementById('carouselVideo');

    // When the video ends, trigger the next slide
    video.addEventListener('ended', function () {
        // Set a timeout based on the video duration
        var videoDuration = video.duration * 1000; // Convert duration to milliseconds
        setTimeout(function () {
            $('#carouselExample').carousel('next');
        }, videoDuration);
    });

    // When the carousel slide event is triggered
    $('#carouselExample').on('slide.bs.carousel', function (event) {
        // Pause the video when transitioning to the next slide
        video.pause();
    });

    // When the carousel slid event is triggered
    $('#carouselExample').on('slid.bs.carousel', function (event) {
        // Resume playing the video after the transition is complete
        video.play();
    });
});