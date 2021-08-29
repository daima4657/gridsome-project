
const myBreakPoint = 768;


if (typeof window !== "undefined") {
	setTimeout(function () {
		scrollEffect();
	}, 2000);
	window.onscroll = function() {
			scrollEffect();
	};
}


function scrollEffect(){
	let scroll = document.documentElement.scrollTop || document.body.scrollTop
	let windowHeight = window.innerHeight;
	let w = window.innerWidth;
	let target = document.getElementsByClassName("js-scrl_target");
	console.log(target);

	for (var i = 0; i < target.length; i++) {
		/*if(target[i].dataset.scrl_target_instant === "true"){
			target[i].classList.add("is-fire");
			continue;
		}*/
			let rect = target[i].getBoundingClientRect();
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			let tgtPos = rect.top + scrollTop;
			let subjectHeight = target[i].innerHeight;
			let threshould = tgtPos - windowHeight + 200;
			console.log(threshould);

			if (scroll > threshould) {
					target[i].classList.add("is-fire");
			}
			else {
			}
	}
}

		//scroll action
		/*$(function () {
				setTimeout(function () {
						scrollEffect();
				}, 200);
				$(document).on('scroll', function () {
						scrollEffect();
						var scroll = $(window).scrollTop();
						//var htmlh = $("html").height();
						var wh = $(window).height();
						//var footerh = $('footer.ly_footer').height() + 65;
				});
		});

		function scrollEffect() {
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				var w = $(window).width();
				$(".js-scrl_target").each(function () {
						var tgtPos = $(this).offset().top;
						var subjectHeight = $(this).innerHeight();
						var threshould;
						if (w > myBreakPoint) {
								threshould = tgtPos - windowHeight + 200;
								//console.log(threshould+':'+scroll);
						}
						else {
								threshould = tgtPos - windowHeight + 200;
								//console.log(scroll + ':' + threshould);
						}
						//
						if (scroll > threshould) {
								$(this).addClass("js-scrl_targetFire");
						}
						else {
								//$(this).removeClass("js-scrl_targetFire");
						}
				});
		}*/