import React from 'react'
import { useEffect,useRef } from 'react';
export const Card = () => {
    let cards=document.querySelectorAll('.card');
    let stack=document.querySelector('.stack');
    function rotateCard(){
        let angle=0;
        cards.forEach((card,index)=>{
            if(card.classList.contains('away')){
                card.style.transform=`translateY(-120vh) rotate(-48deg)`;
            }
            else{
                card.style.transform=`rotate(${angle}deg)`;

                card.style.zIndex=cards.length-index;
                angle=angle-10;
            }
            
        })
    }
    window.addEventListener('scroll',()=>{
        let distance=window.innerHeight/2;
        let topVal=stack.getBoundingClientRect().top;
        let index=-1*(topVal/distance+1);
        index=Math.floor(index);
        for(let i=0;i<cards.length;i++){
            if(i<=index){
                cards[i].classList.add('away');
            }
            else{
                cards[i].classList.remove('away');
            }
        }
        rotateCard();
    })
    rotateCard();
  
    return (
      <div  className='w-[100%] h-[300vh] stack absolute flex justify-between'>
        <div className='w-[50%] h-[100vh]  flex items-center sticky top-0'>
          <h2>Hello there</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            veritatis quo maxime vitae non, eum, aliquam, ipsam minus dolorum
            rerum tempora ducimus beatae dicta nulla voluptatem quibusdam
            molestiae numquam cumque.
          </p>
        </div>
        <div className='w-[50%] h-[100vh]  sticky top-0'>
          <div className='w-[150px] h-[150px] bg-white absolute top-[calc(50%-75px)] rounded-md card left-[calc(50%-75px)]'></div>
          <div className='w-[150px] h-[150px] bg-blue-900 absolute top-[calc(50%-75px)] rounded-md card left-[calc(50%-75px)]'></div>
          <div className='w-[150px] h-[150px] bg-red-700 absolute top-[calc(50%-75px)] rounded-md card left-[calc(50%-75px)]'></div>
          <div className='w-[150px] h-[150px] bg-green-600 absolute top-[calc(50%-75px)] rounded-md card left-[calc(50%-75px)]'></div>
        </div>
      </div>
    );
}
