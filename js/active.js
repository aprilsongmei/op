(function ($) {'use strict';var $window = $(window);
// :: Preloader Active Code
$window.on('load', function () {$('#preloader').fadeOut('slow', function () {$(this).remove();});});
// :: Counterup Active Code
$('.counter').counterUp({time: 1000,delay: 50});
// :: ScrollUp Active
if ($.fn.scrollUp) {$.scrollUp({scrollSpeed: 1500,scrollText: '<i class="fa fa-angle-up"></i>'});}
// :: Gallery Menu Style Code
$('.portfolio-menu button.btn').on('click', function () {$('.portfolio-menu button.btn.btn-md').removeClass('active');$(this).addClass('active');})
// :: onePageNav Active JS
if ($.fn.onePageNav) {$('#nav').onePageNav({currentClass: 'active',scrollSpeed: 1500,easing: 'easeOutQuad'});}
// :: matchHeight Active JS
if ($.fn.matchHeight) {$('.item').matchHeight();}
// :: Wow Active Code
if ($window.width() > 767) {new WOW().init();}
// :: Left Side Menu Active Code
$('.left-arrow-btn').on('click', function () {$('body').toggleClass('left-side-menu-close');});
// :: Sticky Active JS
$window.on('scroll', function () {if ($window.scrollTop() > 0) {$('.header_area').addClass('sticky');} else {$('.header_area').removeClass('sticky');}});
// :: PreventDefault a Click
$("a[href='#']").on('click', function ($) {$.preventDefault();});
})(jQuery);
//Vue2
Vue.use(VueLazyload);
new Vue({el: '#about',data:{imgUrl: backgroups.about}}) 
new Vue({el: '#team',data: {singles: singles}})
new Vue({el: '#projects',data: {projects: projects}})
new Vue({el: '#contact',data: {imgUrl: backgroups.contact}})
new Vue({el: '.cool_facts_do_area',data:{imgUrl: backgroups.facts}})
new Vue({el: '.goodbye-area',data:{imgUrl: backgroups.goodbye}})