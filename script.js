// scroll animation
const elements=document.querySelectorAll('.hidden');

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
},{threshold:0.1});

elements.forEach(el=>observer.observe(el));


// slideshow
let slides=document.querySelectorAll(".slide");
let index=0;

setInterval(()=>{
slides[index].classList.remove("active");
index=(index+1)%slides.length;
slides[index].classList.add("active");
},3000);