var imgArr = [
	"/img/test-1.jpg",
	"/img/test-2.jpg",
	"/img/test-3.jpg",
	"/img/test-4.jpg"
];

var index = parseInt(Math.random() * (imgArr.length-1));
// // document.getElementsByClassName("hero").style.background = "url("+currentImage+")";
// // document.getElementsByClassName("hero").style.background = "url("+currentImage+")";
// var aa=document.getElementsByClassName("navbar");
// console.log(aa);
// console.log(document.getElementById("app"));

currentPage = window.location.pathname;
jQuery(document).ready(function ($) {
	if (currentPage == "/"){
		$(window).load(function () {
			var currentImage = imgArr[index];
			console.log('yes...')
			$("div.hero").css({
				"background" : "url("+currentImage+")"
			})
		});
	}
});