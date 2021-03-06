// JpreLoader ------------------
	$('#main').jpreLoader({
		loaderVPos: '50%',
		autoClose: true,
	},
	function() {
		$('#main').animate({"opacity":'1'},{queue:false,duration:700,easing:"easeInOutQuad"});
		$('h1.animtext').textillate({ in: { effect: 'flipInX',delayScale: 2.5 } });
		setTimeout( function(){
			$('.fade').animate({"opacity":'1'},{queue:false,duration:1000,easing:"easeOutCubic"});
		},2200);
	});

function initChulan() {

// functions ------------------
	"use strict";

	$('h1.animtext').fitText(1.8,{minFontSize:'20px',maxFontSize:'72px'});

// counter ------------------

	/**
	* Duration scaled with individual scaling factor;
	* increment value scaled with individual scaling factor.
	*/

	function number(num, content, target, duration, scaler) {
		if (duration) {
			var count    = 0;
			var speed    = Math.round(scaler * parseFloat(duration / num));
			var interval = setInterval(function(){
				if(count - (2 * scaler - 1) < num) {
					target.html(count);
				}
				else {
					target.html(content);
					clearInterval(interval);
				}
				count += scaler > 1 ? Math.floor(Math.random() * (2 * scaler - 1)) + 1 : 1;
			}, speed);
		}
		else {
			target.html(content);
		}
	}
    function stats(duration) {
    	var MIN_TIMEOUT_DELAY = 4;
    	var maxNum = Math.floor(duration / MIN_TIMEOUT_DELAY);
    	$('.stats .num').each(function() {
    		var container = $(this);
    		var num = container.attr('data-num');
    		var content = container.attr('data-content');
    		number(num, content, container, duration, num > maxNum ? num / maxNum : 1);
    	});
	}

	/**
	* Duration scaled by universal minimum scaling factor;
	* increment value held constant.
	*
	*/

	/*

	function number(num, content, target, duration, scaler) {
		if (duration) {
			var count    = 0;
			var speed    = Math.round(parseFloat(scaler * (duration / num)));
			var interval = setInterval(function(){
				if(count - 1 < num) {
					target.html(count);
				}
				else {
					target.html(content);
					clearInterval(interval);
				}
				count++;
			}, speed);
		}
		else {
			target.html(content);
		}
	}
    function stats(duration) {
    	var scaler = 1;
    	var MIN_TIMEOUT_DELAY = 4;
    	var maxNum = Math.floor(duration / MIN_TIMEOUT_DELAY);
    	var tempScaler;
    	$('.stats .num').each(function() {
    		var container = $(this);
    		var num = container.attr('data-num');
    		if(num > maxNum) {
				tempScaler = num / maxNum;
				if(scaler < tempScaler) {
					scaler = tempScaler;
				}
    		}
    	});
    	$('.stats .num').each(function() {
			var container = $(this);
			var num = container.attr('data-num');
			var content  = container.attr('data-content');
			number(num, content, container, duration, scaler);
        });
	}

	*/

// Scroll animation   ----------------------------------------

	$('.animaper').appear();

	$(document.body).on('appear', '#about div.anim', function() {
		$(this).each(function(){
			setTimeout (function (){
				$('#about div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 );
		});
	});
	$(document.body).on('appear', '#resume div.anim', function() {
		$(this).each(function(){
			setTimeout (function (){
				$('#resume div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 );
		});
	});
	$(document.body).on('appear', '#work div.anim', function() {
		$(this).each(function(){
			setTimeout (function (){
				$('#work div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 );
		});
	});
	$(document.body).on('appear', '#projects div.anim', function() {
		$(this).each(function(){
			setTimeout (function (){
				$('#projects div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 );
		});
	});
	$(document.body).on('appear', '#services div.anim', function() {
		$(this).each(function(){
			setTimeout (function (){
				$('#services div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 );
		});
	});
	$(document.body).on('appear', '#contacts div.anim', function() {
		$(this).each(function(){
			setTimeout (function (){
				$('#contacts div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 );
		});
	});

    var $i = 1;
	$(document.body).on('appear', '.stats', function(e) {
		if ($i === 1) { stats(2600); }
		$i++;
		$('.num').removeClass('scale-small');
	});
	$(document.body).on('appear', '#facts ul li', function(e) {

		$('#facts ul li').removeClass('scale-small');
	});
	// $(".show-skills").click( function(){
	// 	$(this).find('i').toggleClass('but-rotade');
	// 	$('.piechart-holder').slideToggle(500);
	// 	setTimeout (function (){
	// 		$('.chart').easyPieChart({
	// 			easing: 'easeOutBounce',
	// 			onStep: function(from, to, percent) {
	// 				$(this.el).find('.percent').text(Math.round(percent));
	// 			}
	// 		});
	//
	// 	}, 500 );
	// var text = $('.show-skills').find('span').text();
	// var textOther = $('.view-skills').find('span').text();
  //   $('.show-skills').find('span').text(
  //       text == "Show Development Skills" ? "Hide Development Skills" : "Show Development Skills");
  //   $('.view-skills').find('span').text(
  //   	textOther == "View Development Skills" ? "Hide Development Skills" : "View Development Skills");
	// });
	// $(".view-skills").click( function(){
	// 	$('.show-skills').find('i').toggleClass('but-rotade');
	// 	$('.piechart-holder').slideToggle(500);
	// 	setTimeout (function (){
	// 		$('.chart').easyPieChart({
	// 			easing: 'easeOutBounce',
	// 			onStep: function(from, to, percent) {
	// 				$(this.el).find('.percent').text(Math.round(percent));
	// 			}
	// 		});
	//
	// 	}, 500 );
	// var text = $('.view-skills').find('span').text();
	// var textOther = $('.show-skills').find('span').text();
  //   $('.view-skills').find('span').text(
  //       text == "View Development Skills" ? "Hide Development Skills" : "View Development Skills");
  //   $('.show-skills').find('span').text(
  //   	textOther == "Show Development Skills" ? "Hide Development Skills" : "Show Development Skills");
	// });

// MagnificPopup  ----------------------------------------

	$('body').on("click", ".button.close-and-scroll", function(event) {
		event.preventDefault();
		var scrollHref = $(event.target).attr('href');
		$.magnificPopup.close();
		setTimeout(function() {
			$.scrollTo( scrollHref,950,{easing:'swing',offset: 0,'axis':'y'} );
			setTimeout(function() {
				// spin the wheels
			}, 900);
		}, 800);
	});

	jQuery.cachedScript = function(url, options) {
		options = $.extend(options || {}, {
			dataType: "script",
			cache: true,
			url: url
		});
		return jQuery.ajax(options);
	};

	$('.popup-with-move-anim').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll' ,
		fixedContentPos: false,
		fixedBgPos: true,
		closeBtnInside: false,
		midClick: true,
		removalDelay: 600,
		mainClass: 'my-mfp-slide-bottom',
		callbacks: {
			open: function() {
				window.MathJax = {
				    tex2jax: {
				      inlineMath: [ ['$','$'], ["\\(","\\)"] ],
				      processEscapes: true
				    }
				  };
				$.cachedScript("https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML").done(function() {
				}).fail(function(jqXHR, textStatus, errorThrown) {
					console.log(textStatus + "; " + errorThrown);
				});
				$.cachedScript("/js/bigfoot.min.js").done(function() {
					$.bigfoot({
						scope: ".mfp-content",
						//hoverDelay: 300,
						activateOnHover: true,
						deleteOnUnhover: true
					});
				}).fail(function(jqXHR, textStatus, errorThrown) {
					console.log(textStatus + "; " + errorThrown);
				});
				if(!$(".mfp-content .footnote.footnote-print-only").length) {
					setTimeout(function() {
						$.bigfoot({
							scope: ".mfp-content",
							//hoverDelay: 300,
							activateOnHover: true,
							deleteOnUnhover: true
						});
					}, 100);
				}
			},
			ajaxContentAdded: function() {
				$("#project-slider").owlCarousel({
					navigation : true,
					pagination:true,
					slideSpeed : 200,
					paginationSpeed : 400,
					singleItem: true,
					transitionStyle : "backSlide",
					autoHeight: true
				 });
				 $('.white-popup-block h2').textillate({in:{effect:'flipInX',delayScale: 1.5}});

			}
		}
	});

	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		removalDelay: 600,
		mainClass: 'my-mfp-slide-bottom',
	});

	$('.popup-gallery').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		removalDelay: 600,
		mainClass: 'my-mfp-slide-bottom',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});

	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		removalDelay: 600,
		mainClass: 'my-mfp-slide-bottom',
		image: {
			verticalFit: true
		}
	});

// OwlCarousel  ----------------------------------------

	$("#services-carusel").owlCarousel({
		navigation:true,
		slideSpeed : 500,
		pagination : false,
		items : 3,
      	itemsDesktop : false,
      	itemsDesktopSmall : [1200,2],
      	itemsTablet: [979,2],
      	itemsMobile : [740,1]

     });


	$('#testimonials-slider').owlCarousel({
		navigation : true,
		pagination:true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		transitionStyle : "backSlide"
	});

	$("#single-media").owlCarousel({
		navigation : false,
		slideSpeed : 500,
		pagination : true,
		singleItem:true,
     });
// Navigation + custoum  scripts----------------------------------------

	/*$('#options li').click(function(){
		$('#options li').removeClass('actcat');
		$(this).addClass('actcat');
	});*/

	$('.nav-button').click(function(){
		$('.link-holder').slideToggle(500);
	});

	$("a.scroll-link").bind('click', function(event) {
		event.preventDefault();
		$.scrollTo(
			$(this).attr('href'),950,{easing:'swing',offset: 0,'axis':'y'} );
			setTimeout( function(){
			//hidemenu();
		},900);
	});

	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollOffset: 30,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});

	var ww = $(window).width();

	if( ww < 959){

		$('.link-holder').onePageNav({
			currentClass: 'cur',
			changeHash: false,
			scrollSpeed: 750,
			scrollOffset: 30,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing',
		});
		$('.link-holder a').click(function(){
			setTimeout (function (){
				$('.link-holder').slideUp(500);
			}, 600 );
		});
	}

// Mixitup  ----------------------------------------

	var mixer = mixitup('#folio_container', {
		animation: {
      easing: 'ease',
      effects: 'fade rotateX',
      duration: 700,
      animateResizeContainer: false
    },
    load: {
      sort: 'order:asc'
    }
	});

	// $('#folio_container').mixItUp({
	// 	animation: {
	// 		effects: 'fade rotateX',
	// 		duration: 700,
	// 		easing: 'ease',
	// 		animateResizeContainer: false
	// 	},
	// 	load: {
	// 		sort: 'order:asc'
	// 	}
	// });

	// Accordion

	$('.accordion').accordion({
		"transitionSpeed": 500
	});

};

$(document).ready(function(){
	initChulan();
});
	var tabCol = 0;

	var ww4load = viewport().width;

    if (ww4load < 915 || (ww4load < 1175 && ww4load > 959)) {
        colTable();
        tabCol = 1;
    }
	$(window).resize(function(){
		var ww4 = $(window).width();
		var ww4alt = viewport().width;
		if(ww4alt < 959){
			$('.link-holder').css('display','none')
		}
		else if (ww4alt > 959){
			$('.link-holder').css('display','block')
		}
		if (ww4alt < 915 || (ww4alt < 1175 && ww4alt > 959)) {
            if(!tabCol) {
                colTable();
                tabCol = 1;
            }
        } else {
            if(tabCol) {
                rowTable();
                tabCol = 0;
            }
        }
	});

	function viewport() {
		var e = window, a = 'inner';
		if(!('innerWidth' in window)) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		return { width : e[a+'Width'], height : e[a+'Height']};
	}

    function colTable() {
        $('.classes-taken').unwrap();
        $('.classes-taken#cs-table').unwrap().unwrap().unwrap();
    }

    function rowTable() {
        $('.classes-taken').wrap('<td></td>').parent().attr("class", "table-container-cell").wrapAll('<table><tbody><tr></tr></tbody></table>').parent().parent().parent().attr("class", "table-container-table");
    }
// Contact submit  ----------------------------------------

	$("#submit_btn").click(function(){
		var user_name=$('input[name=name]').val();
		var user_email=$('input[name=email]').val();
		var user_message=$('textarea[name=message]').val();
		var proceed=true;
			if(user_name==""){
				$('input[name=name]').css('border','2px solid #F54A4B');
				proceed=false
			}
			if(user_email==""){
				$('input[name=email]').css('border','2px solid #F54A4B');
				proceed=false
			}
			if(user_message==""){
				$('textarea[name=message]').css('border','2px solid #F54A4B');
				proceed=false
			}
			if(proceed){
				post_data={'userName':user_name,'userEmail':user_email,'userMessage':user_message};
				$.post('//formspree.io/czinzow@wisc.edu',
				post_data,
				function(data){
					$("#result").hide().html('<div class="success">Thanks for the submission!  I&apos;ll get back to you shortly.</div>').fadeIn(700);
					$('#contact_form input').val('');
					$('#contact_form textarea').val('')}, "json").fail(
					function(err){
						$("#result").hide().html('<div class="error">'+err.statusText+'</div>').fadeIn(1500);
				});
			}
	});

	$("#contact_form input, #contact_form textarea").keyup(function(){
			$("#contact_form input, #contact_form textarea").css('border','2px solid #fff');
			$("#result").fadeOut(700)
	});

// google map styles and functions  --------

	var map;

	// coordinates   --------

	var UWMadison = new google.maps.LatLng(43.071623, -89.391290);
	function initialize() {
	   var styles = [
    {
		featureType: 'water',
		elementType: 'all',
		stylers: [
			{ hue: '#cdcdcd' },
			{ saturation: -100 },
			{ lightness: 18 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'landscape',
		elementType: 'all',
		stylers: [
			{ hue: '#e8e8e8' },
			{ saturation: -100 },
			{ lightness: 18 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'road',
		elementType: 'all',
		stylers: [
			{ hue: '#fdfdfd' },
			{ saturation: -100 },
			{ lightness: -1 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'road.local',
		elementType: 'all',
		stylers: [
			{ hue: '#fdfdfd' },
			{ saturation: -100 },
			{ lightness: -1 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'poi.park',
		elementType: 'all',
		stylers: [
			{ hue: '#c0c0c0' },
			{ saturation: -100 },
			{ lightness: -3 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{ hue: '#c0c0c0' },
			{ saturation: -100 },
			{ lightness: -3 },
			{ visibility: 'on' }
		]
	},{
		featureType: 'transit',
		elementType: 'all',
		stylers: [
			{ hue: '#ffffff' },
			{ saturation: -100 },
			{ lightness: -9 },
			{ visibility: 'on' }
		]
	}

	  ];
	  var mapOptions = {
		zoom:17,
		zoomControl: true,
		scaleControl: false,
		scrollwheel: false,
		disableDefaultUI:true,
		center: UWMadison,
		mapTypeControlOptions: {
		   mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'bestfromgoogle']
		}
	  };
	map = new google.maps.Map(document.getElementById("map_canvas"),
		 mapOptions);
	var styledMapOptions = {
		  name: "UWMadison"
	}
	var jayzMapType = new google.maps.StyledMapType(
		styles, styledMapOptions);
	map.mapTypes.set('bestfromgoogle', jayzMapType);
	map.setMapTypeId('bestfromgoogle');
	var companyImage = new google.maps.MarkerImage('images/marker.png',
		new google.maps.Size(64,64),
		new google.maps.Point(0,0),
		new google.maps.Point(64,64)
	);

	// marker coordinates   --------

	var companyPos = new google.maps.LatLng(43.071623, -89.391290);
	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,
		zIndex: 3
	});
}

//  definition of mobile browser------------------

	var isMobile = {
       Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }

    };

// if not mobile ------------------

	trueMobile = isMobile.any();

	if (trueMobile == null){
		$('.parallax-facts').parallax("70%", 0.3);
		$('.parallax-testimonials').parallax("70%", 0.3);
		$('.box').hover(function(){
			$(this).find('div.folio-overlay').stop(true,true).animate({opacity:'0.9', left:'10px', top:'10px'}, {queue:true, duration:500, easing:"swing"});
			$(this).find('div.folio-button').addClass('scale-big');
				},function(){
			$(this).find('div.folio-overlay').stop(true,true).animate({opacity:'0', left:'0', top:'0'}, {queue:true, duration:500, easing:"easeInOutBack"});
			$(this).find('div.folio-button').removeClass('scale-big');
		});

		$('.start-holder').hover(function(){
			$('.start-decor').addClass('start-rotade');
				},function(){
			$('.start-decor').removeClass('start-rotade');
		});
	}
