console.log('Hi');
let selectedIndex =0;

const carouselImage =document.querySelector('.carousel-images');

const prev=document.querySelector('.prev')
const next=document.querySelector('.next')

const dotContainer= document.querySelector('.dots-container');


console.log(carouselImage.children.length);

function scrollToIndex(){
    carouselImage.scrollTo({
        left:selectedIndex*400,
        behavior:'smooth'
    })
    createDots();
}

function nextImage(){
    console.log('next');
    selectedIndex =(selectedIndex +1)%carouselImage.children.length
    scrollToIndex()
}

function createDots(){
    dotContainer.innerHTML = '';
    for(let i=0;i<carouselImage.children.length;i++){
       const dot =document.createElement('span');
       dot.classList.add('dot')
       dot.addEventListener('click',()=>{
         selectedIndex =i;
         scrollToIndex()
       })
       dotContainer.appendChild(dot); 
    }
    dotContainer.children[selectedIndex].classList.add('active')
}
next.addEventListener('click',nextImage)
prev.addEventListener('click',()=>{
    console.log('prev');
    selectedIndex = (selectedIndex -1 + carouselImage.children.length)%carouselImage.children.length
    scrollToIndex()
})

scrollToIndex()

setInterval(()=>{
   nextImage();
},2000)