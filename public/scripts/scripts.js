$(document).ready(function () {
    $('#connect').hover(
        function () {
            $('.dropdown-menu').stop(true,true).slideDown('medium');
        },
        function () {
            $('.dropdown-menu').stop(true,true).slideUp('fast');
        }
    });
});
