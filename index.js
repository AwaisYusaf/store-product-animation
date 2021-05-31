//Grabbing card and card-container
const container = document.querySelector('.container');
const card = document.querySelector('.card');

//Grabbing card content 

const sneaker = document.querySelector('.shoe');
const title = document.querySelector('.title');
const desc = document.querySelector('.description');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase button');



container.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth/2-e.pageX)/15;
    let yAxis = (window.innerHeight/2-e.pageY)/15;
    //Animating Card
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    //Animating card content
    sneaker.style.transform = 'translateZ(150px) rotate(-45deg)';
    title.style.transform = 'translateZ(150px)';
    desc.style.transform = 'translateZ(150px)';
    sizes.style.transform = 'translateZ(150px)';
    purchase.style.transform = 'translateZ(150px)';
});
container.addEventListener('mouseleave',()=>{
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.transition = 'all 0.75s ease';    
    // sneaker.style.transform = `translateZ(0px)`;
    // title.style.transform = `translateZ(0px)`;
    // desc.style.transform = `translateZ(0px)`;
    // sizes.style.transform = `translateZ(0px)`;
    // purchase.style.transform = `translateZ(0px)`;

    sneaker.style.transform = 'translateZ(0px) rotate(0)';
    title.style.transform = 'translateZ(0px)';
    desc.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
 
})
container.addEventListener('mouseenter',()=>{
    card.style.transition = 'none';

    
    

});


