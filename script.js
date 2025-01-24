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

 let cardOpen  = document.querySelectorAll('.FAQs-card-content')
 let clickCard = document.querySelectorAll('.FAQs-card');
 clickCard.forEach((card) => { 
    const toggleCard  = card.querySelector('.FAQs-card-content')
    card.addEventListener('click', () => {
        let items = document.querySelector('.content-item');
        if(items && items !== card){
            items.classList.remove('content-item');
            toggleCard.removeAttribute('style');
            console.log(items.removeAttribute('style'))
            console.log(items);
            console.log(card);

        }
        if(card.classList.contains('content-item')){
            card.classList.remove('content-item');
            toggleCard.removeAttribute('style');
        }else{
            card.classList.add('content-item');   
            toggleCard.style.height = toggleCard.scrollHeight + 'px'
        }
    });
 });




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



