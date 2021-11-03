function loaded(){
	document.getElementById("comming").style.display = 'flex';
	document.getElementById("loader").style.display = 'none';
let wrap = document.getElementById('wrap');


var TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
	this.txt = fullTxt.substring(0, this.txt.length - 40);
	} else {
	this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
	delta = this.period;
	this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	this.isDeleting = false;
	this.loopNum++;
	delta = 500;
	}

	setTimeout(function() {
	that.tick();
	}, delta);
};

var elements = document.getElementsByClassName('typewrite');
for (var i=0; i<elements.length; i++) {
	var toRotate = elements[i].getAttribute('data-type');
	var period = elements[i].getAttribute('data-period');
	if (toRotate) {
		new TxtType(elements[i], JSON.parse(toRotate), period);
	}
}
// INJECT CSS
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
document.body.appendChild(css);

var countDownDate = new Date("Nov 4, 2021 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
	document.getElementById("main").style.display = 'block';
	document.getElementById("comming").style.display = 'none';
	document.getElementById("days").innerHTML = 0;
	document.getElementById("hours").innerHTML = 0;
	document.getElementById("minutes").innerHTML = 0;
	document.getElementById("seconds").innerHTML = 0;
    clearInterval(x);
  }
}, 1);
count = 1
document.getElementById('menu').addEventListener('click',()=>{
	document.getElementById('nav').style.height = '49%'
	document.getElementById('nav').classList.add('show')
	document.getElementById('menu').classList.add('fas','fa-times')
	if (count % 2 == 0){
		document.getElementById('menu').classList.remove('fas','fa-times')
		document.getElementById('menu').classList.add('fas','fa-bars')
		document.getElementById('nav').classList.remove('show')
		document.getElementById('nav').style.height = '7%'
	}
	count++
})

}

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.splide', {
		  cover      : true,
		  heightRatio: 0.5,
		  rewind: true
	} ).mount();
  } );