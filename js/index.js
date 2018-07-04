$(document).ready(function() {
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
	$(".left-menus p").click(function(event) {
		alert("sorry it's blocked for experimental reason.")
	});
	$(".left-menus button").click(function(event) {
		alert("sorry it's blocked for experimental reason.")
	});
	$(".page-title-left").click(function(event) {
		alert("sorry it's blocked for experimental reason.")
	});
	$(".login-button").click(function(event) {
		alert("sorry it's blocked for experimental reason.")
	});
	$(".logo-span").click(function(event) {
		alert("sorry it's blocked for experimental reason.")
	});	
});