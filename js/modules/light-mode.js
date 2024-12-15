export default function lightMode(params) {
    const btn = document.querySelector('#light-button')
    const root = document.documentElement
    const lightSvg = document.querySelector('#light-mode')
    const arrowLeft = document.querySelectorAll('.arrows')[0]
    const arrowRight = document.querySelectorAll('.arrows')[1]

    btn.addEventListener('click', turnLightMode)

    function turnLightMode(e) {
        btn.classList.toggle('light-active')
        e.preventDefault()
        if (btn.classList.contains('light-active')) {
            root.style.setProperty('--background-white', '#282828')
            root.style.setProperty('--background-black', '#FFFFFF')
            root.style.setProperty('--border', '#262626')
            lightSvg.src = 'imgs/light-mode-white.svg'
            arrowLeft.src = 'imgs/seta-esquerda-white.svg'
            arrowRight.src = 'imgs/seta-direita-white.svg'

        } else{
            root.style.setProperty('--background-white', '#FFFFFF')
            root.style.setProperty('--background-black', '#282828')
            root.style.setProperty('--border', '#e5e7eb')
            lightSvg.src = 'imgs/light-mode-black.svg'
            arrowLeft.src = 'imgs/seta-esquerda.svg'
            arrowRight.src = 'imgs/seta-direita.svg'

        }
    }
}

