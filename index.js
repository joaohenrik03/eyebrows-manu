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

function activateMenuAtCurrencySection(section) {
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    const sectionEndsAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')    
    if (sectionBoundaries) {
        menuElement.classList.add('active')
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
    showBackToTopButtonOnScroll(),
    activateMenuAtCurrencySection(home),
    activateMenuAtCurrencySection(about),
    activateMenuAtCurrencySection(services),
    activateMenuAtCurrencySection(contact)
})

