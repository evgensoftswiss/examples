function disableAll() {
	const boxes = document.getElementsByClassName("lootbox");
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].classList.toggle("disabled");
	}
}

function Clicked(ob) {
  disableAll();
  ob.classList.toggle("animated");
  ob.classList.toggle("disabled");
}