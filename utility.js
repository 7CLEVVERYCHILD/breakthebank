/*
	UTILITY
*/
function l(m){
	//console.log(m);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function calculateInterest(amount,interest){
	return Number(parseFloat( amount + amount * (interest / 100)).toFixed(0));
}
function printDollars(amount){
	return '$'+numberWithCommas(amount);
}	

var setMessage = function(m){
	State.message = m;
	$('.message').html(m);
}

var capitalize = function(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/*
	SOUND
*/
function playSound(id){
	if(createjs != null)
	createjs.Sound.play(id);	
}
function stopSound(id){
	if(createjs != null)
	createjs.Sound.stop(id);	
}

/*
	TIMER
*/
var realTime = function(){
	var now, delta;
	var then = new Date().getTime();
	
	function moveRealTime() {
		now = new Date().getTime();
		delta = now - then;
		c.x += calcSpeed(delta, 5);	     
		then = now;
	}	
	
	var calcSpeed = function(del, speed) {
		return (speed * del) * (60 / 1000);
	}
}