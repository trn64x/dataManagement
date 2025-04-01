'use client'
import { useEffect, useState} from 'react'
import jsonFile from './data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
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
    return Array(stars).fill(<FontAwesomeIcon className="text-xl max-lg:text-base max-md:text-2xl text-green-500" icon={faStar} />)
    .map((star,index) => <span key={index}>{star}</span>)
}

    return( 
<>
<div className="min-h-[400px]">
    <div className="h-[100px] flex justify-center items-center text-5xl font-black">Our Reviews</div>
    <div className="min-h-[300px] flex flex-row flex-wrap justify-around items-center">
{jsonList?.map((value,index)=> {
    return(
        <div className="h-[250px] rounded-2xl p-4 w-[30vw] max-md:w-[100vw] max-md:m-5 max-lg:h-[350px] max-md:h-[300px]  max-lg:my-5" key={index}><div className='flex flex-row'><div className="w-[15vw] text-2xl m-3 text-stone-850 font-bold max-md: text-3xl max-md:w-[100%] max-md:m-0">{value.name}</div><div className='w-[15vw] flex justify-center items-center text-xl word-[10px] font-bold text-center max-md:w-[100%]'>{arrays(value.stars)}</div></div><div className="p-1 max-md:my-4 text-xl leading-10 max-xl:leading-7">{value.content}</div></div>
    );
})}
    </div>
</div>
</>
    );
}
export default Review;