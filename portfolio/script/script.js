const iconWrap = document.getElementById('iconWrap')
const iconOpen = document.getElementById('iconOpen')
const iconClose = document.getElementById('iconClose')
const mainMenu = document.getElementById('mainMenu')
const hi = document.getElementById('hi')
const hi2 = document.getElementById('hi2')
const hi3 = document.getElementById('hi3')
const about = document.getElementById('About')
const skill = document.getElementById('Skill')
const portfolio = document.getElementById('Portfolio')
const contact = document.getElementById('Contact')
const about_but = document.getElementById('About_b')
const skill_but = document.getElementById('Skill_b')
const portfolio_but = document.getElementById('Portfolio_b')
const contact_but = document.getElementById('Contat_b')
const latest_but = document.getElementById('Latest_b')

iconWrap.addEventListener('click',() => {
	mainMenu.classList.toggle('hide-menu')
	iconOpen.classList.toggle('hide')
	iconClose.classList.toggle('hide')
	hi.classList.toggle('hide')
	hi2.classList.toggle('hide')
	hi3.classList.toggle('hide')
})

const up = document.getElementById('main_page');

up.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

about_but.addEventListener("click", function(){
about.scrollIntoView({behavior:"smooth"});
})

skill_but.addEventListener("click", function(){
skill.scrollIntoView({behavior:"smooth"});
})

portfolio_but.addEventListener("click", function(){
portfolio.scrollIntoView({behavior:"smooth"});
})

latest_but.addEventListener("click", function(){
portfolio.scrollIntoView({behavior:"smooth"});
})

contact_but.addEventListener("click", function(){
contact.scrollIntoView({behavior:"smooth"});
})