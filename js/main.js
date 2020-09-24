window.onscroll = function(){
    if(document.documentElement.scrollTop > 700){
        document.querySelector('.go-top-container')
        .classList.add('show');

    } else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
    if(document.documentElement.scrollTop > 50){
        document.querySelector('.menu-header')
        .classList.add('menu-header-sticky');

    } else{
        document.querySelector('.menu-header')
        .classList.remove('menu-header-sticky');
    }
}
var $window = $(window);

$(window).on('scroll', function() {
    $topOffset = $(this).scrollTop();
 
    console.log($topOffset);
 
});

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.onload = function(){
    const headerScroll = document.querySelector('.menu-header')
    let scrollPos = 0
    
    window.addEventListener('scroll', function(){
        
        if((document.body.getBoundingClientRect()).top > scrollPos) {
            headerScroll.style.top = "0"
        } else {
            if(document.documentElement.scrollTop > 150){ //Comentario en honor a agustin que es un genio con el js y me enseñó que se puede meter un if dentro de un else
            headerScroll.style.top = "-100px"
            }
        }
        scrollPos = (document.body.getBoundingClientRect()).top

    });
}

addEventListener('DOMContentLoaded', () => {
    const contadores = document.querySelectorAll('.contador-boxes')
    const velocidad = 300

    const animarContadores = () => {
        for (const contador of contadores){
            const actualizar_contador = () => {
                let cantidad_maxima = +contador.dataset.cantidadTotal, valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad

                if (valor_actual < cantidad_maxima) {
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout(actualizar_contador, 5)
                } else {
                    contador.innerText = cantidad_maxima
                }
            }
            actualizar_contador()
        }
    }


    const mostrarContadores = elementos => {
    elementos.forEach(elemento => {
        if(elemento.isIntersecting) {
            elemento.target.classList.add('mostrar-contador')
            elemento.target.classList.remove('ocultar-contador')
            setTimeout(animarContadores, 300)
        }
    });
} 

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75 // 0 - 1
    })

    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementoHTML => {
        observer.observe(elementoHTML)
    })
})