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
