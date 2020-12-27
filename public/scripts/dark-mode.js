const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    colorTextBut: getStyle(html, "--color-primary-landing"),
    colorGrad: getStyle(html, "--color-primary-gradient"),
    colorFormBg: getStyle(html, "--color-form-bg"),
    colorFormText: getStyle(html, "--color-text-form")
    //.........
    
}

const darkMode = {
    bg: "#333333",
    colorHeadings: "#aa1a97",
    colorText: "#c2bda9",
    colorGrad: "#919191",
    colorFormBg:"#5e5e5b",
    colorFormText:"#5cb3df",
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})