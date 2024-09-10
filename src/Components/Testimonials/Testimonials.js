import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/whiteArrow.png'
import back_icon from '../../assets/leftpointer.png'
import user_1 from '../../assets/_.jpeg'
import user_2 from '../../assets/gallery-11.jpeg'
import user_3 from '../../assets/gallery-11.jpeg'
import user_4 from '../../assets/gallery-11.jpeg'
// import nextIcon from '../../assets/gallery_4'
// import backIcon from '../../assets/gallery_1'
// import user1 from '../../assets/gallery_1'
// import user2 from '../../assets/gallery_2'
// import user3 from '../../assets/gallery_3'
// import user4 from '../../assets/gallery_4'

export default function Testimonials() {
    const slider = useRef();
    let tx = 0;
    function slideForward(){
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    function slideBackward(){
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next_btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back_btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user_info'>
                            <img src={user_1} alt=''/>
                            <div>
                                <h3>Toke Makinwa</h3>
                                <span>Edusity, Nigeria</span>
                            </div>
                        </div>
                        <p>Within the vibrant domain of the Faculty of Management and Administrative Studies, our expert faculty members are at the forefront of research in their respecting fields, ensuring that you receive a top-notch education from leading experts.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user_info'>
                            <img src={user_2} alt=''/>
                            <div>
                                <h3>Daniel Kawas</h3>
                                <span>Edusity, Nigeria</span>
                            </div>
                        </div>
                        <p>Within the vibrant domain of the Faculty of Management and Administrative Studies, our expert faculty members are at the forefront of research in their respecting fields, ensuring that you receive a top-notch education from leading experts.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user_info'>
                            <img src={user_3} alt=''/>
                            <div>
                                <h3>Stephen Destiny</h3>
                                <span>Edusity, Nigeria</span>
                            </div>
                        </div>
                        <p>Within the vibrant domain of the Faculty of Management and Administrative Studies, our expert faculty members are at the forefront of research in their respecting fields, ensuring that you receive a top-notch education from leading experts.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user_info'>
                            <img src={user_4} alt=''/>
                            <div>
                                <h3>Onuho Frederick</h3>
                                <span>Edusity, Nigeria</span>
                            </div>
                        </div>
                        <p>Within the vibrant domain of the Faculty of Management and Administrative Studies, our expert faculty members are at the forefront of research in their respecting fields, ensuring that you receive a top-notch education from leading experts.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}