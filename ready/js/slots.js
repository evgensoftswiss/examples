let step = 0;
let playing = false;
let slots = document.getElementById('slots');
let slots2 = document.getElementById('slots2');

let shading2 = document.getElementById('shading2');
let slide2 = document.getElementById('slide2');

let shading3 = document.getElementById('shading3');
let slide3 = document.getElementById('slide3');

let shading4 = document.getElementById('shading4');
let slide4 = document.getElementById('slide4');

function SlotsAnimation() {
	if (!playing) {
		playing = true;
		step++;
		checkSlots();
	}
}
function checkSlots() {
	if (step<2) {
		slots.classList.remove("hiden");
		slots2.classList.add("hiden");
	};
	if (step==1) {
		slots.classList.toggle("animated");
		setTimeout(ToNextStep, 4000);
	}
	if (step==3) {
		ToNextStep();
		slots2.classList.remove("hiden");
		slots.classList.add("hiden");
		slots2.classList.toggle("animated");
		setTimeout(ToNextStep, 4000);
	};
}

function ToNextStep() {
		step++;
		console.log(step);

		if ((step==2)||(step==4)) {
			shading2.classList.toggle("hiden");
			slide2.classList.toggle("hiden");
			slide2.classList.toggle("showSlide");
		}

		if ((step==5)&&(!playing)) {
			shading3.classList.toggle("hiden");
			slide3.classList.toggle("hiden");
			slide3.classList.toggle("showSlide");
			playing = true;
		}

		if (step==6) {
			shading4.classList.toggle("hiden");
			slide4.classList.toggle("hiden");
			slide4.classList.toggle("showSlide");
		}

		setTimeout(enablePlaying, 1000);
}

function enablePlaying() {
	playing = false;
}

function openURL() {
	window.location.href = 'http://google.com';
}

checkSlots();
