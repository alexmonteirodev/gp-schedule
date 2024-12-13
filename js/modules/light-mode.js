export default function lightMode(params) {
    const btn = document.querySelector('#light-mode')
    const root = document.documentElement
    const lightSvg = btn.querySelector('img')
    console.log(btn.src)
    btn.addEventListener('click', turnLightMode)

    function turnLightMode(e) {
        btn.classList.toggle('light-active')
        e.preventDefault()
        if (btn.classList.contains('light-active')) {
            root.style.setProperty('--background-white', '#08090A')
            root.style.setProperty('--background-black', '#FFFFFF')
            root.style.setProperty('--border', '#262626')
            lightSvg.src = 'imgs/light-mode-black.svg'
        } else{
            root.style.setProperty('--background-white', '#FFFFFF')
            root.style.setProperty('--background-black', '#08090A')
            root.style.setProperty('--border', '#e5e7eb')
            lightSvg.src = 'imgs/light-mode-white.svg'
        }
    }
}

