/* Lovepreet Singh (200597146)   & Chainpreet Singh (200592535) */

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');



/*  code for the navbar slide vertically instead of horizontal on IPAD and IPHONE X */
if(bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active')
    })

    
}

if(close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active')
    })

    
}
