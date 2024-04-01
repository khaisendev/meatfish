function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function startAnimationIfVisible() {
  $('.number-counting').each(function() {
    if (!$(this).data('isCounting') && isElementInViewport(this)) {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $this.data('isCounting', true);
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {duration: 3000, easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    }
  });
}
$(document).ready(function() {
  startAnimationIfVisible();
});
$(window).scroll(function() {
  startAnimationIfVisible();
});


var main = new Splide( '#main-slider', {
   heightRatio  : 0.6,
   pagination   : false,
   arrows       : true,
   cover        : true,
   gap          : 10,
   breakpoints: {
    1100: {
      
    }
   }
});

var thumbnails = new Splide( '#thumbnail-slider', {
   rewind       : true,
   fixedWidth   : 180,
   fixedHeight  : 94,
   isNavigation : true,
   gap          : 12,
   focus        : 'center',
   pagination   : false,
   cover        : true,
   arrows       : false,
   dragMinThreshold: {
     mouse: 4,
     touch: 10,
   },
   breakpoints : {
    640: {
       fixedWidth  : 66,
       fixedHeight : 38,
     },
   },
});
main.sync( thumbnails );
main.mount();
thumbnails.mount();
