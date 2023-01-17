//tomamos menu-btn de su clase y agregamos addEvent listener para el click
document.querySelector('.menu-btn').addEventListener('click', () => {
    console.log('CLICK!!!')
    //tomamos nav-menu con su clase, classlist para manipular la clase, toggle alterna entre hide() y show() para los elementos seleccionados (show)
    document.querySelector('.nav-menu').classList.toggle('show')
})

ScrollReveal().reveal('.showcase');

ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
