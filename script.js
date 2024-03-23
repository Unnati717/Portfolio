const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const pageTurnId = btn.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) { 
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    });
});

//Contact Me button when clicked
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page,index) => {
        setTimeout(() =>{
            page.classList.add('turn');

            setTimeout(() =>{
                page.style.zIndex = 20+ index;
            }, 500)
        }, (index + 1)* 200+100)  
    })
}

//Reverse index function
let totalPages = pages.length;
let pageNumber =0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages -1;
    }
}

//Profile button when clicked
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() =>{
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() =>{
                reverseIndex();
                pages[pageNumber].style.zIndex = 10+index;

            },500)
        },(index + 1)* 200+100)
    })
}

//animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//animation open for cover right
setTimeout(() =>{
    coverRight.classList.add('turn');
},2100)

setTimeout(() =>{
    coverRight.style.zIndex = -1;
},2800)

//animation open for page Left or profile
setTimeout(() =>{
    pageLeft.style.zIndex = 20;
},3200)

//animation all page right
pages.forEach((_,index) =>{
    setTimeout(() =>{
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() =>{
            reverseIndex();
            pages[pageNumber].style.zIndex= 10+index;
        },500)
    },(index+1)* 200+2100)
})