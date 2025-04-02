'use client'
import jsonFile from './data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Fade from "../pearls/Fade";
import TextGradient from "../text/TextGradient";
const Review = () => {
const arrays = (stars:number) => {
    return Array(stars).fill(<FontAwesomeIcon className="text-xl max-lg:text-lg max-md:text-2xl text-green-500" icon={faStar} />)
    .map((star,index) => <span key={index}>{star}</span>)
}

    return( 
<>
<div className="min-h-[400px] max-w">
    
    <div className="h-[100px] flex justify-center items-center text-5xl mad-sm:text-base max-md:text-2xl max-lg:text-4xl font-black"><div className="pb-2 mr-[10px] text-5xl max-sm:text-xl max-md:text-2xl max-lg:text-4xl">Co myślą o nas</div>  <TextGradient>
              {" "}
              <Fade
                triggerOnce
                delay={500}
                className="font-black text-5xl max-sm:text-xl max-md:text-2xl max-lg:text-4xl"
                cascade
                damping={0.05}
              >
                nasi klienci
              </Fade>
            </TextGradient></div>
    <div className="min-h-[250px] max-w flex flex-row flex-wrap justify-center items-start">
{jsonFile?.map((value,index)=> {
    return(
        <div className="h-[100%] p-4 my-3 rounded-2xl w-[33%] max-md:w-[100%] max-md:min-h[150px]  max-lg:p-1" key={index}><div className='flex flex-row justify-between'><div className="flex justify-start items-center w-[100%] text-3xl my-3 text-stone-850 font-black max-md:text-2xl max-md:m-0">{value.name}</div><div className=' flex justify-center items-center my-3  text-xl font-bold text-center'>{arrays(value.stars)}</div></div><div className="p-1 text-xl leading-10 max-md:leading-7 text-wrap max-md:text-base">{value.content}</div></div>
    );
})}
    </div>
</div>
</>
    );
}
export default Review;