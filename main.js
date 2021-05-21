
const div1 = document.createElement('div')
div1.setAttribute('class', 'cennik')
const paragrafCennikowWZamowieniu = document.createElement('p')
paragrafCennikowWZamowieniu.setAttribute("class", "cenniki")
paragrafCennikowWZamowieniu.innerHTML = "Cennik uslug: <br> Henna - 50zl <br> Redukowanie brwi - 40zl <br> Zabiegi pielęgnacyjne na okolice oczu - 60zl"

const div2 = document.createElement('div')
div2.setAttribute('class', 'zdjecia')
const zdjecia1 = document.createElement('img')
zdjecia1.setAttribute('src', './img/paznokcie1.jpg')
const zdjecia2 = document.createElement('img')
zdjecia2.setAttribute('src', './img/paznokcie.webp')

const div3 = document.createElement('div')
div3.setAttribute('class', 'kwadrat')





div2.appendChild(zdjecia2)
div2.appendChild(zdjecia1)
div1.appendChild(paragrafCennikowWZamowieniu)
grid.appendChild(div1)
grid.appendChild(div2)
grid.appendChild(div3)

