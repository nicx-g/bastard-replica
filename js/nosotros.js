const mqk = matchMedia('(max-width: 992px)')

const applyMatchMedia = mqk => {
    mqk.matches ?
    (document.querySelector('.about-us-img').classList.add('img-fluid'),
    document.querySelector('.about-us-img2').classList.add('img-fluid'))
    :
    (document.querySelector('.about-us-img').classList.remove('img-fluid'),
    document.querySelector('.about-us-img2').classList.remove('img.fluid'))
}

addEventListener('resize', () => applyMatchMedia(mqk))
applyMatchMedia(mqk)