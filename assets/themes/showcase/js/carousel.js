(function showcaseCarousel() {
	var carousel_items = document.getElementsByClassName('carousel_item'),
		carouselVideo = document.getElementsByClassName('carousel_video')[0],
		nextVisible = 1,
		runCarousel;

	function startCarousel() {
		runCarousel = setInterval(function() {
			moveCarousel(nextVisible);
		}, 5000);
	}

	function moveCarousel(currentlyVisible) {
		document.getElementsByClassName('visible')[0].classList.remove('visible');
		nextVisible++;
		carousel_items[currentlyVisible].classList.add('visible');
		if(currentlyVisible === carousel_items.length - 1) {
				nextVisible = 0;
		}
	}

	if(carouselVideo) {
		var playVideo = document.getElementsByClassName('playVideo')[0];

		if(playVideo){
			playVideo.addEventListener('click', function() {
				nextVisible = 0;
				moveCarousel(nextVisible);
				stopCarousel();
				carouselVideo.play();
				carouselVideo.controls = 'controls';
				this.style.display = 'none';
			});
		}

		carouselVideo.addEventListener('ended', function() {
			nextVisible = 1;
			moveCarousel(nextVisible);
			startCarousel();
			carouselVideo.load();
			carouselVideo.controls = '';
			playVideo.style.display = 'inline-block';
		});

	}

	function stopCarousel() {
		clearInterval(runCarousel);
	}

	if(carousel_items.length > 1) {
		startCarousel();
	}
}());