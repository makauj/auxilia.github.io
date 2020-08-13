jQuery(document).ready(function() {
    var siteUrl = 'http://' + (document.location.hostname || document.location.host);
    $(document).delegate('a[href^="/"], a[href^="' + siteUrl + '"]', "click", function(e) {
        e.preventDefault();
        History.pushState({}, "", this.pathname);
    });
    // var _gaq = [
    //     ["_setAccount", "UA-65148661-1"],
    //     ["_trackPageview"]
    // ];
    (function(d, t) {
        var g = d.createElement(t),
            s = d.getElementsByTagName(t)[0];
        g.async = 1;
        g.src = ("https:" == location.protocol ? "//ssl" : "//www") + ".google-analytics.com/ga.js";
        s.parentNode.insertBefore(g, s)
    }(document, "script"));
    History.Adapter.bind(window, 'statechange', function() {
        var State = History.getState();
        $.get(State.url, function(data) {
            document.title = data.match(/<title>(.*?)<\/title>/)[1];
            $('.content').html($(data).find('.content'));
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            // _gaq.push(['_trackPageview', State.url]);
        });
    });
     AOS.init({
 	duration: 700,
 	easing: 'slide',
 	once: true
 });
});