// start: Navbar
const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarClose = document.querySelector('.navbar-close');
navbarToggle.addEventListener('click', function(e) {
    e.preventDefault();
    navbar.classList.add('active');
    document.body.classList.add('overflow-hidden');
})
navbarClose.addEventListener('click', function(e) {
    e.preventDefault();
    navbar.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
})
// end: Navbar



// start: Testimonial
const testimonialImages = document.querySelectorAll('.testimonial-item-image');
const testimonialContent = document.querySelectorAll('.testimonial-item-content');
const testimonialToggleWrapper = document.querySelector('.testimonial-toggle-wrapper');
if(testimonialContent.length === testimonialImages.length) {
    testimonialImages.forEach(function(item, i) {
        if(i === 0) {
            testimonialToggleWrapper.insertAdjacentHTML('beforeend', '<button type="button" class="w-8 h-1 bg-indigo-500"></button>');
        } else {
            testimonialToggleWrapper.insertAdjacentHTML('beforeend', '<button type="button" class="w-8 h-1 bg-slate-200"></button>');
        }
    })
    Array.from(testimonialToggleWrapper.children).forEach(function(item, i) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            testimonialImages.forEach(function(item, x) {
                if(x === i) {
                    setTimeout(function() {
                        item.classList.remove('hidden');
                        testimonialContent[x].classList.remove('hidden');
                        setTimeout(function() {
                            item.classList.add('active');
                            testimonialContent[x].classList.add('active');
                        }, 10)
                    }, 600)
                } else {
                    item.classList.remove('active');
                    testimonialContent[x].classList.remove('active');
                    setTimeout(function() {
                        item.classList.add('hidden');
                        testimonialContent[x].classList.add('hidden');
                    }, 600)
                }
            })
            Array.from(testimonialToggleWrapper.children).forEach(function(item) {
                item.classList.remove('bg-indigo-500');
                item.classList.add('bg-slate-200');
            })
            item.classList.add('bg-indigo-500');
            item.classList.remove('bg-slate-200');
        })
    })
}
// end: Testimonial