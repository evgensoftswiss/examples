function change_animation(id) {
	const game_cards = document.getElementsByClassName("game_card");
	for (let i = 0; i < game_cards.length; i++) {
		game_cards[i].className = "game_card";
    game_cards[i].classList.add("gc_animation"+id);
	}
}

function selected(obj, id) {
  console.log(document.getElementById("button_select_gc_animation").innerHTML);
  change_animation(id);
  document.getElementById("button_select_gc_animation").innerHTML = obj.innerHTML;
}