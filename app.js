const slides = document.querySelectorAll('.slide')
const outside = document.querySelector('body')
for (const slide of slides) {
	slide.addEventListener('click', () => {
		clearActiveClass()
		slide.classList.add('active')
	})
}

function clearActiveClass() {
	slides.forEach(slide => slide.classList.remove('active'))
}

const clickOutside = () => {
	outside.addEventListener('click', () => {
		clearActiveClass()
	})
}
