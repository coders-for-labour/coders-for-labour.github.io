// Set namespace (useful for when we have multiple components)
var CORBYN = CORBYN || {}

CORBYN.HeroBanner = {
  SELECTOR: null,
  IS_MOBILE: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),

  init: function() {
    // If the .hero-banner element exists, begin processing this class
    if (document.querySelector('.hero-banner')) {
      this.SELECTOR = document.querySelector('.hero-banner')
      this.initBuild()
    }
  },

  initBuild: function() {
    // Check if there has been a video url
    // given to the data-video attribute
    var videoExists = this.helper_getVideoUrl()
    // If so, and the user is not on a mobile
    // device, build video.
    if (videoExists && !this.IS_MOBILE) {
      this.buildVideo();
    // ...otherwise, just build an image
    } else {
      this.buildImage();
    }
  },

  // A helper function to get the video url from data-video attribute
  helper_getVideoUrl: function() {
    return this.SELECTOR.querySelector('.hero-banner__video').getAttribute('data-video');
  },

  // Find the .hero-banner__player element, build the <video> tag,
  // put the <video> tag inside the .player element.
  buildVideo: function() {
    var __player = this.SELECTOR.querySelector('.hero-banner__player');
    var url = this.helper_getVideoUrl();
    var html = '<video src="'+url+'" autoplay preload muted loop></video>';
    __player.innerHTML = html;
  },

  // Find the .hero-banner__image element, get the image url
  // and set that url as it's background
  buildImage: function() {
    var __image = this.SELECTOR.querySelector('.hero-banner__image');
    var url = __image.getAttribute('data-image');
    __image.style.backgroundImage = 'url('+url+')';
  }
}

CORBYN.HeroBanner.init()