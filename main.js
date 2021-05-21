const grid = document.createElement('div')
grid.setAttribute('class', 'grid')
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
const zdjecia3 = document.createElement('img')
zdjecia3.setAttribute('src', './img/Paznokcieq.jpg')
const zdjecia4 = document.createElement('img')
zdjecia4.setAttribute('src', './img/paznokcie3.png')
const zdjecia5 = document.createElement('img')
zdjecia5.setAttribute('src', './img/paznokciez.jpg')

const div3 = document.createElement('div')
div3.setAttribute('class', 'kwadrat')


const div4 = document.createElement('div')
div4.setAttribute('class', 'glownyDiv2')

const div5 = document.createElement('div')
div5.setAttribute('class', 'jakisTekst')

const spotkanie = document.createElement('p')
spotkanie.setAttribute('class', 'spotkanie')
spotkanie.innerText = 'Umów spotkanie'

const div6 = document.createElement('div')
div6.setAttribute('class', 'div6')

const naglowek1 = document.createElement('h1')
naglowek1.setAttribute('class', 'naglowek1')
naglowek1.innerText = 'ostatnio rekomendowane'
const opis = document.createElement('p')
opis.setAttribute('class', 'opis')
opis.innerHTML = '-przekucie uszu, twarzy, brzucha, <br> -depilacje laserowe wąsik, szyja, twarzy, <br> -manicure japoński <br> -manicure hubrydowy, <br> -przedłużanie paznokci +  hybryda, <br> -uzupełnianie paznokci, <br> -pedicure z odrzywką, <br> -depilacje woskiem, <br> -peeling twarzy,'

const div7 = document.createElement('div')
div7.setAttribute('class', 'div7')
const naglowek2 = document.createElement('h1')
naglowek2.setAttribute('class', 'naglowek2')
naglowek2.innerText = 'Usługi'
const naglowek3 = document.createElement('p')
naglowek3.setAttribute('class', 'naglowek3')
naglowek3.innerText = 'usługi kosmetyczne'








grid.appendChild(div1)
div1.appendChild(paragrafCennikowWZamowieniu)

grid.appendChild(div2)
div2.appendChild(zdjecia1)
div2.appendChild(zdjecia2)
div2.appendChild(zdjecia3)
div2.appendChild(zdjecia4)
div2.appendChild(zdjecia5)

grid.appendChild(div3)

glownyDiv.appendChild(grid)

glownyDiv.appendChild(div4)
div4.appendChild(div5)
div5.appendChild(spotkanie)

glownyDiv.appendChild(div6)
div6.appendChild(naglowek1)
naglowek1.appendChild(opis)

glownyDiv.appendChild(div7)
div7.appendChild(naglowek2)
div7.appendChild(naglowek3)




