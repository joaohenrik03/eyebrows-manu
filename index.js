function onScroll() {
    if (scrollY > 0) {
        document.querySelector('#nav').classList.add('scroll')
    } else {
        document.querySelector('#nav').classList.remove('scroll')
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