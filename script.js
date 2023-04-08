

$(window).on('scroll', function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

    var scrollPercent = (s / (d - c)) * 100;

    console.clear();
    scrollbar = document.getElementById("scroll");
    scrollbar.style.width = `${scrollPercent}%`;
})

$(window).on('load', function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

    var scrollPercent = (s / (d - c)) * 100;

    console.clear();
    scrollbar = document.getElementById("scroll");
    scrollbar.style.width = `${scrollPercent}%`;
})