let toggleButton= document.querySelector('.toggles-button');
let mobileNav= document.querySelector('.mobile-nav'); 

toggleButton.addEventListener('click',  ()=>{
    if(mobileNav.style.display==='none') {
        mobileNav.style.display='block';
    }else{
        mobileNav.style.display='none';
    }
})