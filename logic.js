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

let Name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let nameError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');
let messageError = document.getElementById('messageError');
let nameCheck = document.getElementById('nameCheck');
let emailCheck = document.getElementById('emailCheck');
let messageCheck = document.getElementById('messageCheck');
let btn = document.getElementById('btn');

let nameC = false
let mailC = false
let msgC = false

let status = document.getElementById('status');
let why = document.getElementById('why');
let submitted = document.getElementById('submitted');

// let form = document.forms.Myform;
let form = document.getElementById('Myform');

Name.addEventListener('input',()=>{
	if(Name.value.length < 3 || Name.value.length > 16){
		Name.style.border = '1px solid #ff195e';
		nameError.style.visibility = 'visible';
		nameError.innerHTML = 'name should be greater than 3 or less than 16 characters'
		nameCheck.classList.add('far','fa-times-circle')
		nameCheck.style.color = '#ff195e'
		nameCheck.style.visibility = 'visible'
		nameC = false
	}
	else{
		Name.style.border = '1px solid #72c0ff';
		nameCheck.classList.remove('far','fa-times-circle')
		nameCheck.classList.add('far','fa-check-circle')
		nameCheck.style.color = '#00e91f'
		nameCheck.style.visibility = 'visible'
		nameError.style.visibility = 'hidden';
		nameC = true
	}
	validateCheck()
})
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
email.addEventListener('input',()=>{
	check = validateEmail(email.value)
	if(check == false){
		email.style.border = '1px solid #ff195e';
		emailError.style.visibility = 'visible';
		emailError.innerHTML = 'invalid email'
		emailCheck.classList.add('far','fa-times-circle')
		emailCheck.style.color = '#ff195e'
		emailCheck.style.visibility = 'visible'
		mailC = false
	}
	else{
		email.style.border = '1px solid #72c0ff';
		emailCheck.classList.remove('far','fa-times-circle')
		emailCheck.classList.add('far','fa-check-circle')
		emailCheck.style.color = '#00e91f'
		emailCheck.style.visibility = 'visible'
		emailError.style.visibility = 'hidden';
		mailC = true
	}
	validateCheck()
})
message.addEventListener('input',()=>{
	if(message.value.length < 12 || message.value.length > 100){
		message.style.border = '1px solid #ff195e';
		messageError.style.visibility = 'visible';
		messageError.innerHTML = 'message should be greater than 12 or less than 100 characters';
		messageCheck.classList.add('far','fa-times-circle')
		messageCheck.style.color = '#ff195e'
		messageCheck.style.visibility = 'visible'
		msgC = false
	}
	else{
		message.style.border = '1px solid #72c0ff';
		messageCheck.classList.remove('far','fa-times-circle')
		messageCheck.classList.add('far','fa-check-circle')
		messageCheck.style.color = '#00e91f'
		messageCheck.style.visibility = 'visible'
		messageError.style.visibility = 'hidden';
		msgC = true
	}
	validateCheck()
})


async function handleSubmit(event) {
	event.preventDefault();
	var data = new FormData(event.target);
	fetch(event.target.action, {
	  method: form.method,
	  body: data,
	  headers: {
		  'Accept': 'application/json'
	  }
	}).then(response => {
		// submitted.classList.remove('fas','fa-times-circle')
		submitted.classList.add('fas','fa-check-circle')
		why.innerHTML = 'form submitted successfully';
		status.style.background = '#01b719';
		status.style.left = '0px';
		nameCheck.style.visibility = 'hidden';
		emailCheck.style.visibility = 'hidden';
		messageCheck.style.visibility = 'hidden';
		setTimeout(() => {
			status.style.left = '-450px';
		}, 3400);
	  form.reset();
	}).catch(error => {
		why.innerHTML = 'Opps! something went wrong';
		status.style.background = '#ff0858';
		status.style.left = '0px';
		submitted.classList.add('fas','fa-times-circle')
		// submitted.classList.remove('fas','fa-check-circle')
		nameCheck.style.visibility = 'hidden';
		emailCheck.style.visibility = 'hidden';
		messageCheck.style.visibility = 'hidden';
		setTimeout(() => {
			status.style.left = '-450px';
		}, 3400);
	})
  }

function validateCheck() {
	if (nameC == true && mailC == true && msgC == true){
		btn.disabled = false
		btn.style.cursor = 'pointer'
	}
	else{
		btn.style.cursor = 'not-allowed'
		btn.disabled = true
	}
}
form.addEventListener('submit',handleSubmit)