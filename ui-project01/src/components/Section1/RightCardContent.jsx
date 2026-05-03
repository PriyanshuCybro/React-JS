
import { ArrowRight } from 'lucide-react';
import RightCard from './RightCard';


const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-5 flex flex-col justify-between '>
       
       <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl  font-semibold ">{props.id+1}</h2>
       <div>
        <p className='text-lg leading-relaxed text-white mt-20 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odit.</p>
       </div>
       <div className="flex justify-between ">
        <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full  '>{props.tag}</button>
        <button className='bg-blue-600 text-white font-semibold px-4 py-3 rounded-full '><ArrowRight /></button>
       

       </div>
 </div>
  )
}

export default RightCardContent