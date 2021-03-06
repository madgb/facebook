$(document).ready(function() {
	//mobile adjustment
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
	if( isMobile.any() ) alert('This Experiment cannot be cunducted via mobile');
	if( isMobile.any() ) $("body").css('display', 'none');


	//block clickable buttons
	$(".left-menus p").click(function(event) {
		alert("It's blocked for experimental reason.")
	});
	$(".left-menus button").click(function(event) {
		alert("It's blocked for experimental reason.")
	});
	$(".page-title-left").click(function(event) {
		alert("It's blocked for experimental reason.")
	});
	$(".login-button").click(function(event) {
		alert("It's blocked for experimental reason.")
	});
	$(".logo-span").click(function(event) {
		alert("It's blocked for experimental reason.")
	});	
	$(".cover-infos .coverInfo > span").click(function(event) {
		alert("It's blocked for experimental reason.")
	});
	$(".block-click").click(function(event) {
		alert("It's blocked for experimental reason.")
	});



	//scroll design
	$(window).on( 'scroll', function(){
		if($(window).scrollTop()>45){
			$(".left-content").css("position","fixed");
			$(".gb-container").css("margin-top","0");
			$(".topbar").css("display","none");
		}else{
			$(".left-content").css("position","absolute");
			$(".topbar").css("display","block");
			$(".gb-container").css("margin-top","75px");	
		}
	});



	//fake like function
	$(".like-click").on("click", function(){
		let $color = $(this).css("color");

		if($color === "rgb(88, 144, 252)"){
			$(this).css("color","rgb(75, 79, 86)");

		} else {
			$(this).css("color","rgb(88, 144, 252)");
		}
		// var count = $(this).parent().parent().parent().find(".like-result span").html();
		// count++;
		// $(this).parent().parent().parent().find(".like-result span").html(count);
		// $(this).parent().parent().parent().find(".like-result").css("color","#5890fc");
	})


	//comment slide
	$(".comment-slide").hide();
	$(".view-comment").on('click', function() {
		$(this).parent().parent().parent().find(".comment-slide").slideToggle();
	});	
});