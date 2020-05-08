$(document).ready(function() {
    $("#mobile-nav-btn").click(function() {
        $(".mobile-menu").fadeToggle();
        document.body.style.top = `-${window.scrollY}px`;
        document.documentElement.style.overflowY = "hidden";
    });

    $("#mobile-menu-close").click(function() {
        document.documentElement.style.overflowY = "overlay"
        $(".mobile-menu").fadeToggle();
        const scrollY = document.body.style.top;
        $("body").css("top", "");
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });
});
