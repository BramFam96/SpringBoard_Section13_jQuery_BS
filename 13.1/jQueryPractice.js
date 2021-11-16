//1
console.log('jQuery sh-sh-sh-showdooown')
//2
$('article img').addClass('image-center')
//3
console.log($('article > :last-child').remove())
//4
const randomNum = () => {
	return Math.floor(Math.random() * 100)
}
$('#title').css('font-size', randomNum())
//5
$('<li>Let it begiiiin</li>').prependTo('ol')
//6
$('aside > *').remove()
$('aside').append('<p>The list has brought me immersable shame..</p>')
//7
$('input').on('change', () => {
	const red = $('input').eq(0).val()
	const blue = $('input').eq(1).val()
	const green = $('input').eq(2).val()
	$('body').css('background-color', `rgb(${red},${green},${blue})`)
})
//8
$('img').click((e) => {
	$(e.target).remove()
})
//Movie Rating logic:
$('ul').on('click', 'button', (e) => {
	console.log($(e.target).parent().remove())
})
$('.input-wrapper').on('submit', (e) => {
	e.preventDefault()
	const movie = $('.input-wrapper').find('input').val()
	const rating = $('.input-wrapper').find('input').eq(1).val()
	$(`<li class = 'move-rating'>${movie} -	${rating} stars
    <button> &times </button> </li>`).appendTo('ul')
})
