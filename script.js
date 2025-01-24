let navBtnToggle = document.querySelectorAll('.nav-toggle, .nav-close');
let navMenuToggle = document.querySelector('.nav-menu');
let changeTheme = document.querySelector('.change-theme');
let navScrollHeader = document.querySelector('.nav-header');
let scrollUpBtn = document.querySelector('#scroll-up');
let navLink = document.querySelectorAll('.nav-link');

navBtnToggle.forEach(btn => { 
    btn.addEventListener('click', () => {
        navMenuToggle.classList.toggle('show-menu');
    });
 });


 changeTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
 })

 const scrollHeader = ()=>{
    scrollY >= 80 ? navScrollHeader.classList.add('scroll-header') : navScrollHeader.classList.remove('scroll-header');
 }

 window.addEventListener('scroll', scrollHeader);
 
 const scrollUp = ()=>{
    scrollY >= 400 ? scrollUpBtn.classList.add('show-scroll') : scrollUpBtn.classList.remove('show-scroll');
 };

window.addEventListener('scroll', scrollUp);

 scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior:'smooth'});
 });

 navLink.forEach((nav)=>{
    nav.addEventListener('click', () => {
        navLink.forEach((nav)=>{nav.classList.remove('active-link');});
        nav.classList.add('active-link');
    });
 })

 let t = document.querySelectorAll('.FAQs-card-content')
 let clickCard = document.querySelectorAll('.FAQs-card');
 clickCard.forEach((card) => { 
    const toggleCard  = card.querySelector('.FAQs-card-content')
    toggleCard.classList.remove('height-container');
    card.addEventListener('click', () => {
        // if(toggleCard.classList.contains('height-container')){
        //     toggleCard.classList.remove('height-container')
        // }
        // t.forEach(t => {t.classList.remove('height-container') 
        //     t.classList.remove('')
        // })
        toggleCard.classList.add('height-container');
        card.classList.add('content-item');
    });
 });



