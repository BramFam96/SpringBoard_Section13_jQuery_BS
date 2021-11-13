// //We can call event methods directly
// $('img').click(() => {
// 	alert('Howdy!')
// })
// //This is actually a shorthand for:
// $('img').on('mouseleave', () => {
// 	//normally we would use this to refer to the element that called our event
// 	//but if we want to use the jQuery methods we've been practicing, we
// 	//need to turn this into a jQuery object. To do this we simply wrap it:
// 	$(this).toggleClass('grayed-out')
// })
// //If we generate new els after page load they will lack the event listener;
// //In vanilla JS we'd overcome this by putting an event on the container:
// document.getElementById('meme-container').addEventListener('click', (e) => {
// 	let target = e.target
// 	//The we look for the specific target and check if it is the el we want;
// 	if (target.classList.contains('meme')) {
// 		deleteMeme(target)
// 	}
// })
//With jQuery we can achieve this with even less code!
$('#test-section').on('click', 'p', (e) => {
	$(e.target).css('color', 'orange')
})
//This second param filters direct children for a match, in this case an img;
