const header = document.querySelector('header')
const section = document.querySelector('section')
const requestURL = 'https://semegenkep.github.io/json/example.json'
const request = new XMLHttpRequest()
request.open('GET', requestURL)

request.responseType = 'json'
request.send()

request.onload = function(){
    const superHeroes = request.response
    populateHeader(superHeroes)
    showHeroes(superHeroes)
}

function populateHeader(superHeroes){
    const squadName = document.createElement('h1')
    squadName.innerText = superHeroes.squadName
    const headerCity = document.createElement('p')
    headerCity.className = 'headerCity'
    headerCity.innerText = `Hometown: ${superHeroes.homeTown} // Formed: ${superHeroes.formed}`

    header.append(squadName)
    header.append(headerCity)
}
function showHeroes(superHeroes) {
    superHeroes.members.forEach(function (hero) {
        const heroArticle = document.createElement('article')
        heroArticle.className = 'sectionHero'
        section.append(heroArticle)

        const sectionHeroName = document.createElement('h2')
        sectionHeroName.innerText = hero.name
        heroArticle.append(sectionHeroName)

        const secretIdentity = document.createElement('p')
        secretIdentity.innerText = `Secret identity: ${hero.secretIdentity}`
        heroArticle.append(secretIdentity)

        const age = document.createElement('p')
        age.innerText = `Age: ${hero.age}`
        heroArticle.append(age)

        const superpowers = document.createElement('p')
        superpowers.innerText = `Superpowers:`
        heroArticle.append(superpowers)

        const superpowersList = document.createElement('ul')
        hero.powers.forEach(function (power) {
            const superpower = document.createElement('li')
            superpower.innerText = power
            superpowersList.append(superpower)
        })
        heroArticle.append(superpowersList)
    })
}
