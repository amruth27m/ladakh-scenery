$(document).ready(function () {
    console.log('index loaded');
    $('.navbar-burger').on('click',function (e) {
        $('#navbarMenuHero').slideToggle();
    })

//    TODO: Fix button animation
    $('.package-card').on('hover',function (e){
        console.log('Card function called')
        var property = {"color": "white", "background": "#7abd69"};
        $('.package-more-button').css(property);
    });
})