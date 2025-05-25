import React from 'react'
import GetStartedBtn from '../GetStartedBtn';
import "../../styles/SimplifySection.css";

export const SimplifySection = () => {
  return (
    <section className='simplify-section flex  justify-around'>
        <div className=''>
            <h5 className='simplify-heading text-white! w-[50%] font-semibold'>Simplify how your team works today</h5>
        </div>
        <div className='flex justify-center items-center'>
            <GetStartedBtn className='get-started-white-btn'/>
        </div>
    </section>
  )
}
