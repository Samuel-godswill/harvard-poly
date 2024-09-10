import React from 'react'
import './Programs.css'
import program_1 from '../../assets/_.jpeg'
import program_2 from '../../assets/dd.jpeg'
import program_3 from '../../assets/mas.jpeg'
import program_icon_1 from '../../assets/program_icon_1.jpeg'
import program_icon_2 from '../../assets/program_icon_2.jpeg'
import program_icon_3 from '../../assets/program_icon_3.jpeg'

function Programs() {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} alt=''/>
            <div className='caption'>
                <img src={program_icon_1} alt=''/>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt=''/>
            <div className='caption'>
                <img src={program_icon_2}alt=''/>
                <p>Post Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt=''/>
            <div className='caption'>
                <img src={program_icon_3} alt=''/>
                <p>Masters Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs