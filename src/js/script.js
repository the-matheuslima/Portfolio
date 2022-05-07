const portfolios = [
    {
        "name": 'API do chess.com',
        'img': 'assets/img/project-chess.png',
        'alt': 'ilustração do projeto API do chess.com',
        'desc': ' Esse projeto faz algumas requisições para a API do chess.com e lista algumas informações do usuário.',
        'tecUsed': 'HTML | CSS | JavaScript | Webpack | NPM', 
        'solution': 'https://the-matheuslima.github.io/chess-API/',
        'rep':'https://github.com/the-matheuslima/chess-API',
    },
    {
        "name": 'API rest countries',
        'img': 'assets/img/project-rest-countries.png',
        'alt': 'ilustração do projeto API rest coutries',
        'desc': 'Esse projeto lista todos os países da API na página inicial, filtra países por região, clicando em um pais pode-se ver informações mais detalhadas em uma página separada, além de alternar o esquema de cores entre o modo claro e escuro.',
        "tecUsed": 'HTML | CSS | JavaScript | SCSS', 
        'solution': 'https://the-matheuslima.github.io/API-rest-countries/',
        'rep': 'https://github.com/the-matheuslima/API-rest-countries'
    },
    {
        "name": 'Portfolio',
        'img': 'assets/img/project-portfolio.png',
        'alt': 'ilustração do projeto do meu portfolio',
        'desc': 'Meu portfolio',
        "tecUsed": 'HTML | CSS | JavaScript ',
        'solution': 'https://the-matheuslima.github.io/portfolio/',
        'rep': 'https://github.com/the-matheuslima/portfolio'
    },
    {
        "name": 'Crowdfunding',
        'img': 'assets/img/project-crowdfunding-product-page.png',
        'alt': 'ilustração do projeto Crowdfunding',
        'desc': 'Página de produto de financiamento coletivo. O usuário pode escolher o tipo de suporte que quer dar e a quantia.',
        'tecUsed': 'HTML | CSS | JavaScript ',
        'solution': 'https://the-matheuslima.github.io/crowdfunding-product-page-main/',
        'rep': 'https://github.com/the-matheuslima/crowdfunding-product-page-main'
    },
    {
        "name": 'E-commerce',
        'img': 'assets/img/project-e-commerce.png',
        'alt': 'ilustração do projeto E-commerce',
        'desc': 'Página de produto de um E-commerce.',
        "tecUsed": 'HTML | CSS | JavaScript ',
        'solution': 'https://the-matheuslima.github.io/-ecommerce-product-page-main/',
        'rep': 'https://github.com/the-matheuslima/-ecommerce-product-page-main'
    },
    {
        "name": 'Sunnyside agency landing-page',
        'img': 'assets/img/projects-sunnyside.png',
        'alt': 'ilustração do projeto Sunnyside agency landing-page',
        'desc': 'landing page de uma agência.',
        "tecUsed": 'HTML | CSS | JavaScript ',
        'solution': 'https://the-matheuslima.github.io/sunnyside-agency-landing-page/',
        'rep': 'https://github.com/the-matheuslima/sunnyside-agency-landing-page'
    },
    ]
    
    const gallery = document.querySelector('.gallery')
    
    portfolios.map((port) => {
        const projects = document.createElement('div')
        projects.classList.add('project')
        projects.innerHTML += `
            <div class="content-img-project">
                <img src=${port.img} alt=${port.alt}">
            </div>
    
            <div class="project-info">
            <h3>${port.name}</h3>
            <h4>${port.tecUsed}</h4>
            <p>${port.desc}</p>
    
                <div class="flex-btn">
                    <button class="btn" type="button">
                        <a class="solution" href=${port.solution} target="_blank" rel="external"> Ver no GitHub Pages
                        </a>
                    </button>
    
                    <button class="btn" type="button">
                        <a class="solution" href=${port.rep} target="_blank" rel="external">
                            Ver o Repositório
                        </a>
                    </button>
                </div>
            </div>  
        `   
        gallery.appendChild(projects)
    })

// Dark-mode
const mobile = document.querySelector('.mobile')
const navbar = document.querySelector('.navbar')
const html = document.querySelector('html')

mobile.addEventListener('click', () => {
    mobile.classList.toggle('active')
    mobile.classList.contains('active') ? document.querySelector('body').style.position = 'fixed':  document.querySelector('body').style.position = 'unset'
    // if(mobile.classList.contains('active'))
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
            window.scrollTo(0,1720.25)
        } else if(itens.textContent == 'Contato'){
            window.scrollTo(0,3500.25)
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
