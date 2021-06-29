jQuery(document).ready(function() {
    AOS.init({
        duration: 700,
        easing: 'slide',
        once: true
    });
    (function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
})();
});