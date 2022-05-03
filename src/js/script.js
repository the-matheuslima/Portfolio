// Dark-mode
const mobile = document.querySelector('.mobile')
const navbar = document.querySelector('.navbar')
const html = document.querySelector('html')

mobile.addEventListener('click', () => {
    mobile.classList.toggle('active')
    navbar.classList.toggle('show')
})


const darkMode = document.querySelector('.dark-mode')
darkMode.addEventListener('click', () => {
    html.classList.toggle('dark-mode')
})

// Animation In Scroll
const  target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'
const navbarItens = document.querySelectorAll('.navbar-itens')

navbarItens.forEach(itens=> {
    itens.addEventListener('click', () => {
        navbar.classList.remove('show')
        if(itens.textContent == 'Inicio'){
            window.scrollTo(0,0.25)
        } else if(itens.textContent == 'Sobre mim'){
            window.scrollTo(0,550.25)
        } else if(itens.textContent == 'Projetos'){
            window.scrollTo(0,1600.25)
        } else if(itens.textContent == 'Contato'){
            window.scrollTo(0,2900.25)
        }
    })
})

function animaScroll(){
    const windowTop = window.pageYOffset+((window.innerHeight * 3)/4)
    target.forEach(e => {
        if(windowTop > e.offsetTop) {
            e.classList.add(animationClass)
        } else {
            e.classList.remove(animationClass)
        }
    });
}

if(target.length){
    window.addEventListener('scroll', () => {
        animaScroll()
    })
}
animaScroll()
