function onScroll() {
    if (scrollY > 0) {
        document.querySelector('nav').classList.add('scroll')
    } else {
        document.querySelector('nav').classList.remove('scroll')
    }
}