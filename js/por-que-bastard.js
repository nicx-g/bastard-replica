const mql = matchMedia('(max-width: 767px)')

const applyMatchMedia = mql => {
    mql.matches ?
    (document.querySelector('.por-que-bastard').classList.add('container-fluid'),
    document.querySelector('.por-que-bastard').classList.remove('container'))
    :
    (document.querySelector('.por-que-bastard').classList.remove('container-fluid'),
    document.querySelector('.por-que-bastard').classList.add('container'))
}

addEventListener('resize', () => applyMatchMedia(mql))
applyMatchMedia(mql)