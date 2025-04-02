'use client'
import { useEffect, useState} from 'react'
import jsonFile from './data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Fade from "../pearls/Fade";
import TextGradient from "../text/TextGradient";
type jsonFileType = {
    name: string,
    content: string,
    stars: number
}
const Review = () => {
const[jsonList, setjsonList] = useState<jsonFileType[]>(jsonFile);
const[responding,setResponding] = useState<boolean>(false);
useEffect(()=>{
    if(responding) return;
    setTimeout(() => {
        setResponding(!responding)
    }, 1000)
},[responding])
useEffect(()=>{
    setjsonList(jsonFile);
    console.log("boom")
}
,[responding])

const arrays = (stars:number) => {
    return Array(stars).fill(<FontAwesomeIcon className="text-xl max-lg:text-lg max-md:text-2xl text-green-500" icon={faStar} />)
    .map((star,index) => <span key={index}>{star}</span>)
}

    return( 
<>
<div className="min-h-[400px]">
    
    <div className="h-[100px] flex justify-center items-center text-5xl max-lg:text-4xl max-md:text-2xl mad-sm:text-base font-black"><div className="pb-2 mr-[10px] text-5xl max-lg:text-4xl max-md:text-2xl mad-sm:text-lg">Co myślą o nas</div>  <TextGradient>
              {" "}
              <Fade
                triggerOnce
                delay={500}
                className="font-black text-5xl max-lg:text-4xl max-md:text-2xl mad-sm:text-lg"
                cascade
                damping={0.05}
              >
                nasi klienci
              </Fade>
            </TextGradient></div>
    <div className="min-h-[300px] flex flex-row flex-wrap justify-around items-center">
{jsonList?.map((value,index)=> {
    return(
        <div className="h-[250px] rounded-2xl p-4 w-[30vw] max-md:w-[100vw] max-md:min-h[150px] max-md:m-3  max-lg:p-1 max-lg:my-3" key={index}><div className='flex flex-row justify-between'><div className="w-[100%] text-2xl my-3 text-stone-850 font-bold max-md:text-3xl max-md:m-0">{value.name}</div><div className=' flex justify-center items-center text-xl word-[10px] font-bold text-center max-md:w-[30%]'>{arrays(value.stars)}</div></div><div className="p-1 max-md:m-4 text-xl leading-10 max-xl:leading-7 text-wrap">{value.content}</div></div>
    );
})}
    </div>
</div>
</>
    );
}
export default Review;