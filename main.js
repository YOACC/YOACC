const heading = document.querySelector('h1');
const subHeadings = document.querySelectorAll('h2');
const hThree = document.querySelectorAll('h3');
const anchorTags = document.querySelectorAll('a');
const darkMode = document.getElementById('darkMode');
const theme = document.getElementById('theme');
const lightMode = document.getElementById('lightMode');
const header = document.querySelector('.header');
const contact = document.querySelector('.contact');
const about = document.querySelector('.about');
const footer = document.getElementById('footer');
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.querySelector('.fa-sun');
const rightMenu = document.querySelector('.right-menu');
const date = document.getElementById('date');
const favLeft = document.querySelector('.fa-chevron-left');
const favRight = document.querySelector('.fa-chevron-right');
const hImg = document.querySelector('.h-img');

getDate();

// EVENTS

menuButton.addEventListener('click', () => {
    let menu = document.getElementById('menu');
    menu.classList.toggle('show-menu');
});

darkMode.addEventListener('click',()=>{
    darkModeF();
});

lightMode.addEventListener('click', ()=>{
    lightModeF();
});

window.onscroll = function(){
    header.classList.toggle('bg-header', window.scrollY > 0);
}

// window.addEventListener('load', function(){
//     this.setTimeout(() => {
//         rightMenu.style.display = 'flex';
//     }, 1000);
// });

window.addEventListener('load', function(){
    new Glider(document.querySelector('.p-container'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
})


//FUNCTIONS

function darkModeF() {
    
    theme.classList.add('darkMode');
    contact.style.backgroundColor = '#000b0e';
    about.style.backgroundColor = '#000b0e';
    header.style.backgroundColor = '#000b0e';
    footer.style.backgroundColor = '#798AAE';
    heading.style.color = '#ADADB4';
    moonIcon.style.color = '#798AAE';
    sunIcon.style.color = 'white';
    favLeft.style.color = 'white';
    favRight.style.color = 'white';
    
    subHeadings.forEach(h2 => {
        h2.style.color = '#798AAE';
    });    

    hThree.forEach(h3 => {
        h3.style.color = 'black';
    });    

    anchorTags.forEach(li => {
        li.style.color = 'white';
    });
}

function lightModeF(){
    theme.classList.remove('darkMode');
    contact.style.backgroundColor = '';
    about.style.backgroundColor = '';
    header.style.backgroundColor = '';
    footer.style.backgroundColor = '';
    heading.style.color = '';
    moonIcon.style.color = '';
    sunIcon.style.color = '';
    favLeft.style.color = '';
    favRight.style.color = '';

    subHeadings.forEach(h2 => {
        h2.style.color = '';
    });

    hThree.forEach(h3 => {
        h3.style.color = '';
    });

    anchorTags.forEach(li => {
        li.style.color = '';
    });
}

function getDate(){
    const year = new Date().getFullYear();
    date.textContent = year;
}