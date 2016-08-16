$(document).ready(function() {

$('input, select').styler();

$('.nav-toggle').click(function(){
	$(".overlay-boxify").toggleClass("open");
})

//карусель наши-клиенты
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    lazyLoad:true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
						items:1,
				},
				520:{
						items:1,
				},
				560:{
						items:4,
				},
				768:{
						items:5,
				},
				992:{
						items:6,
				},
				1200:{
						items:6,
        }
    }
})


//анимация цифр
$(".why-we").waypoint(function() {
		
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1500,
			easing: 'swing',
			step: function() {
				$(".why-we h3 span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".why-we h3 span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "1.8125em",
				numberStep: comma_separator_number_step},
				1200);
		});
		this.destroy();

	}, {
		offset: '65%'
	});

// Галерея
$(".mfp-gallery").each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			mainClass: 'mfp-zoom-in',
			type: 'image',
			tLoading: '',
			gallery:{
				enabled: true,
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function() {
					this.items[0].src = this.items[0].src + '?=' + Math.random(); 
				},
				open: function() {
					$.magnificPopup.instance.next = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
					}
					$.magnificPopup.instance.prev = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
					}
				},
				imageLoadComplete: function() { 
					var self = this;
					setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
				}
			}
		});
	});

//Preloader
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

}); 

$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});



});