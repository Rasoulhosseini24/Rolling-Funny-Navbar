const cont = document.querySelector('.container')
const div = cont.querySelector('.div')
const nav = document.querySelector('nav')
const hr = document.getElementsByTagName('hr')
const img = document.getElementsByTagName('img')

Array.from(img).forEach(p => {
    let pp = p
    Array.from(hr).forEach(e => {
        let ee = e
        div.addEventListener('click', () => {
            div.classList.toggle('active')
            nav.classList.toggle('none')
            if (div.classList.contains('active')) {
                ee.classList.add('hr-active')
                pp.classList.add('img')

            } else {
                ee.classList.remove('hr-active')
                pp.classList.remove('img')

            }
        })

    })
})