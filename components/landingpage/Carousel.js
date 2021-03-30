import {useState} from 'react';
import data from '../../data';
import Image from 'next/image';

import Carousel from 'nuka-carousel';

const CarouselComp=()=>{
  const [people,setPeople] = useState(data);

  return(
    <div className="rounded-xl ml-20 mr-20 pr-20 bg-white ">
        <Carousel 
          autoplay={true} 
          autoplayReverse={true}
          defaultControlsConfig={{
            nextButtonClassName: 'next-btn',
            prevButtonClassName: 'prev-btn',
            pagingDotsClassName: 'paging-dots'
          }}
          >
          {people.map((person)=>{
            const {img,name,bio,desc} = person;
            return(
              <div className="flex px-8 py-20 ">
                <Image className="rounded-lg img-css" src={img} alt={name} height={300} width={300}/>
                  <div className="w-40 mx-10">
                    <div className="font-semibold text-xl tracking-wider">{name}</div>
                    <div className="w-20 mt-5 mb-5 border-b-2 border-black"></div>
                    <div className="text-xs tracking-wider font-medium text-gray-900 leading-loose">{bio}</div> 
                  </div>
                  <div className="w-4/5 pr-20 text-gray-900 font-bold tracking-wider leading-loose">{desc}</div>
              </div>
            )
          })}
      </Carousel>
  </div>
  )

}

export default CarouselComp;