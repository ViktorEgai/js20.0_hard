const plane = document.querySelector('#plane');
let count = 0,
    count2 = 0;
function flyPlane() {
  requestAnimationFrame(flyPlane);
 if (count < 500) {
  count += 5;    
  count2 += 7;
  plane.style.bottom = count + 'px';
  plane.style.left = 500 + count2 + 'px'; 
 } else if(count > 499) {
	plane.style.transform = 'scale(-1, 1)';
	count += 4;
	count2 -= 10;
	plane.style.bottom = count + 'px';
	plane.style.left = 500 + count2 + 'px'; 
 }
}
flyPlane();

