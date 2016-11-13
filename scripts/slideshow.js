var slideshow = (function(document) {
	ns = {};

	var imgs;
	var prevSlideIndex;
	var currentSlideIndex;
	var nextSlideIndex;
	var slideShowTimer;

	function fadeIn(imgIdx, fadeTime, fadeInc) {
		imgs[imgIdx].style.display = "block";
		imgs[imgIdx].style.opacity = 0;
		var op = 0.1;
		var timer = setInterval(function(){
			if (op>=1) {
				clearInterval(timer);
			}
			imgs[imgIdx].style.opacity = op;
			op += fadeInc;
		}, fadeTime*fadeInc);
	}

	function fade(prevImgIdx, nextImgIdx, fadeTime, fadeInc) {
		var op = 1.0;
		var timer = setInterval(function(){
			if (op<0.05) {
				imgs[prevImgIdx].style.display = "none";
				clearInterval(timer);
				fadeIn(nextImgIdx, fadeTime/2.0, fadeInc);
			}
			imgs[prevImgIdx].style.opacity = op;
			op -= fadeInc;
		}, (fadeTime/2.0)*fadeInc);	
	}

	function imposeIndexBoundaries() {
		if (nextSlideIndex > imgs.length-1) {
			nextSlideIndex = 0;
		} else if (nextSlideIndex < 0) {
			nextSlideIndex = imgs.length-1;
		}
		if (currentSlideIndex > imgs.length-1) {
			currentSlideIndex = 0;
		} else if (currentSlideIndex < 0) {
			currentSlideIndex = imgs.length-1;
		}
		if (prevSlideIndex > imgs.length-1) {
			prevSlideIndex = 0;
		} else if (prevSlideIndex < 0) {
			prevSlideIndex = imgs.length-1;
		}
	}

	function forward() {
		imposeIndexBoundaries();
	    	fade(currentSlideIndex, nextSlideIndex, 1000, 0.01);
	    	nextSlideIndex++; currentSlideIndex++; prevSlideIndex++;
	}

	function backward() {
		imposeIndexBoundaries();
	    	fade(currentSlideIndex, prevSlideIndex, 1000, 0.01);
	    	nextSlideIndex--; currentSlideIndex--; prevSlideIndex--;
	}

	function startSlideshow() {
		slideShowTimer = setInterval(function() {
			forward();
		} , 6000);
	}

	function stopSlideshow() {
		clearInterval(slideShowTimer);
	}

	ns.scrollForward = function() {
		stopSlideshow();
		forward();
	}

	ns.scrollBackward = function() {
		stopSlideshow();
		backward();
	}

	ns.initializeSlideshow = function() {
		imgs = document.getElementsByClassName("outreach-slide-show");
		for (var i = 1; i < imgs.length; i++) {
	      		imgs[i].style.display = "none";
	    	}
		prevSlideIndex = imgs.length-1;
		currentSlideIndex = 0;
		nextSlideIndex = 1;
		// this is not backwards compatible with old browsers, need to sort this
		window.addEventListener('focus', startSlideshow);    
		window.addEventListener('blur', stopSlideshow);
	}

	return ns;
})(document);
