var overflowslidername = document.querySelector('.overflowslidername');

  var isDown = false;
  var startX;
  var scrollLeft;

  overflowslidername.addEventListener('mousedown', function(e) {
    isDown = true;
    startX = e.pageX - overflowslidername.offsetLeft;
    scrollLeft = overflowslidername.scrollLeft;
  });

  overflowslidername.addEventListener('mouseleave', function() {
    isDown = false;
  });

  overflowslidername.addEventListener('mouseup', function() {
    isDown = false;
  });

  overflowslidername.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - overflowslidername.offsetLeft;
    var walk = (x - startX) * 2; // Adjust the multiplier to control scrolling speed
    overflowslidername.scrollLeft = scrollLeft - walk;
  });

  // For touch devices
  overflowslidername.addEventListener('touchstart', function(e) {
    isDown = true;
    startX = e.touches[0].pageX - overflowslidername.offsetLeft;
    scrollLeft = overflowslidername.scrollLeft;
  });

  overflowslidername.addEventListener('touchend', function() {
    isDown = false;
  });

  overflowslidername.addEventListener('touchmove', function(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.touches[0].pageX - overflowslidername.offsetLeft;
    var walk = (x - startX) * 2; // Adjust the multiplier to control scrolling speed
    overflowslidername.scrollLeft = scrollLeft - walk;
  });