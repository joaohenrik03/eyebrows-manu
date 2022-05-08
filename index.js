function showNavOnScroll() {
    if (scrollY > 0) {
        document.querySelector('#nav').classList.add('scroll')
    } else {
        document.querySelector('#nav').classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 500) {
        document.querySelector('#backToTop').classList.add('show')
    } else {
        document.querySelector('#backToTop').classList.remove('show')
    }
}

const Menu = {
    open() {
        document.body.classList.add('show-menu')
    },
    close() {
        document.body.classList.remove('show-menu')
    }
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 750,
}).reveal(`
    #home, #home img, #home .stats,
    #services header, #services .card,
    #about, #about header, #about .content,
    #contact, #contact header, #contact .content, #contact a, #contact img,
    footer, footer .socials
`)

window.addEventListener('scroll', () => {
    showNavOnScroll(),
    showBackToTopButtonOnScroll()
})
