let ul  = document.querySelector("#ul");
let nav  = document.querySelector("#nav");
let list  = document.querySelector(".list");
list.addEventListener('click' , ()=>{
    ul.classList.toggle("show-nav")
   
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });