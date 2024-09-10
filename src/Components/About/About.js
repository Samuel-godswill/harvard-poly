import React from 'react'
import './About.css'
import about_img from '../../assets/graduate.jpg'
import play_icon from '../../assets/play_icon.jpeg'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='aboutLeft'>
            <img src={about_img} alt='' className='about_img'/>
            <img src={play_icon} alt='' className='play_icon' onClick={() => setPlayState(true)}/>
        </div>
        <div className='aboutRight'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>A distinctive higher education experience significantly boosts employability. It integrates academic excellence with hands-on learning, enhancing adaptability, critical thinking, and practical skills acquisition.</p>
            <p>A leadership style based on innate understanding leverages natural instincts and deep comprehension. It priorities empathy, adaptability, and holistic decision-making, fostering trust and strong relationships with teams and stakeholders for effective leadership.</p>
            <p>Through education, mentorship, and empowerment, we can produce a generation of visionary, ethical, and resilient individuals who will shape Africa's progress and lead the continent towards a brighter and more prosperous future.</p>
        </div>
    </div>
  )
}

export default About