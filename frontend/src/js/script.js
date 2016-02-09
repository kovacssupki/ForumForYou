'use strict';
document.addEventListener('mousewheel', function(e) {
    e.preventDefault();
    var steps = 60,
        interval = setInterval(function() {
            if (steps--) {
                document.body.scrollTop += e.deltaY > 0 ? 1 : -1;
            }
            else {
                clearInterval(interval);
            }
        }, 10);
});
