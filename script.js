var flip_btn = document.getElementById("flip")
var back_card = document.getElementById("card1")
var front_card = document.getElementById("card2")
var flipped = false

// flip_btn.style.backgroundColor="red"

flip_btn.addEventListener("click",flipping)

function flipping(){
if(flipped == false){
back_card.style.display="none"
front_card.style.display="block"
}

else{
back_card.style.display="block"
front_card.style.display="none"
}
flipped = !flipped
}