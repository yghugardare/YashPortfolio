let words = document.querySelectorAll('.word');
words.forEach((word)=>{
    let letters = word.textContent.split('');
    word.textContent = "";
    letters.forEach((letter)=>{
        let span = document.createElement('span');
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i*80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340+i*80);
    });
    currentWordIndex =currentWordIndex===maxWordIndex?0:currentWordIndex+1;
};
changeText();
setInterval(changeText,3000);
// circle skills
const circles = document.querySelectorAll('.circle');
circles.forEach(
    (elem,ind)=>{
        let dots =elem.getAttribute('data-dots');
        let marked = elem.getAttribute('data-percent');
        let percent = Math.floor(dots*marked/100);
        let points = "";
        let rotate = 360/dots;
        let c = 0;
        for(let i=0;i<dots;i++){
            points += `<div class="points p${ind}" " style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        c++;
        console.log(c);
        elem.innerHTML = points;
        
        // for (let index = 0; index < percent; index++) {
        //     pointsMarked[index].classList.add('marked');
        // }
    });
    let p0 =document.querySelectorAll('.p0');
    p0.forEach((el,id)=>{
        if(id<80){
            el.classList.add('marked');
        }
    })
    let p1 = document.querySelectorAll('.p1');
        p1.forEach((el,id)=>{
            if(id<85){
                el.classList.add('marked');
            }
        })
    let p2 =document.querySelectorAll('.p2');
        p2.forEach((el,id)=>{
            if(id<68){
                el.classList.add('marked');
            }
        })
    let p3 =document.querySelectorAll('.p3');
        p3.forEach((el,id)=>{
            if(id<73){
                el.classList.add('marked');
            }
        });

 
// mixit up projects section
var mixer = mixitup('.portfolio-gallery');
// actvitation of project btns
let btns = document.querySelectorAll('.btns');
btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        btns.forEach(btn=>{
            btn.classList.remove('blue');
        })
        btn.classList.add('blue');
    })
});
// active menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');
function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY+97<section[len].offsetTop){}
    menuLi.forEach(sec=>sec.classList.remove('active'));
    menuLi[len].classList.add('active');
}
activeMenu()
window.addEventListener('scroll',activeMenu);

// sticky navbar
const header= document.querySelector("header");
window.addEventListener('scroll',function(){
    header.classList.toggle("sticky",this.window.scrollY > 50);
})
// hamburgure nav
let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");
let nav = document.querySelectorAll('li');
// menuIcon.onclick = ()=>{
//     menuIcon.classList.toggle("bx-x");
//     navList.classList.toggle('open');
// }
menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');
})

// menuIcon.onclick = ()=>{
//     menuIcon.classList.remove('bx-x');
//     navList.classList.replace('open');
// }
// parallax
const observer= new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-items');
        }
        else{
            entry.target.classList.remove('show-items');
        }
    });
});
const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach(el=>{
    observer.observe(el);
});
const scrollButton = document.querySelectorAll('.scroll-button');
scrollButton.forEach(el=>{
    observer.observe(el);
});
const scrollTop = document.querySelectorAll('.scroll-top');
scrollTop.forEach(el=>{
    observer.observe(el);
});