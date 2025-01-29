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

 let clickCard = document.querySelectorAll('.FAQs-card');
 
 clickCard.forEach((card) => { 
    const toggleCard  = card.querySelector('.FAQs-card-content')
    card.addEventListener('click', () => {
        if(card.classList.contains('content-item')){
            handleToggle(clickCard)
        }else{
            handleToggle(clickCard)
            card.classList.add('content-item');   
            toggleCard.style.height = toggleCard.scrollHeight + 'px'
        }
    });
 });

 const handleToggle = (clickCard) => {
    clickCard.forEach((item) => {
        item.querySelector('.FAQs-card-content').removeAttribute('style')
        item.classList.remove('content-item');
    });
 };

 const sections = document.querySelectorAll('section[id]')
 console.log(sections)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
        console.log(sectionId)
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// let items = document.querySelector('.content-item');
// if(items && items !== card){
//     let openItem = items.querySelector('.FAQs-card-content');
//     items.classList.remove('content-item');
//     openItem.removeAttribute('style');
//     console.log(items);
//     console.log(card);
// }


// clickCard.forEach((item) =>{
//     const accordionHeader = item.querySelector('.FAQs-card-header')

//     accordionHeader.addEventListener('click', () =>{
//         const openItem = document.querySelector('.content-item')

//         toggleItem(item)

//         if(openItem && openItem!== item){
//             toggleItem(openItem)
//         }
//     })
// })

// const toggleItem = (item) =>{
//     const accordionContent = item.querySelector('.FAQs-card-content')

//     if(item.classList.contains('content-item')){
//         accordionContent.removeAttribute('style')
//         item.classList.remove('content-item')
//     }else{
//         accordionContent.style.height = accordionContent.scrollHeight + 'px'
//         item.classList.add('content-item')
//     }

// }

const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   // reset: true
})

sr.reveal(`.home-data`)
sr.reveal(`.home-img`, {delay: 500})
sr.reveal(`.home-social`, {delay: 600})
sr.reveal(`.about-img, .contact-data`,{origin: 'left'})
sr.reveal(`.about-data, .contact-form`,{origin: 'right'})
sr.reveal(`.step-card, .product-card, .FAQs-card-container, footer`,{interval: 100})



