import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/Indian-1.webp'
import user_2 from '../../assets/Indian-2.webp'
import user_3 from '../../assets/Indian-3.webp'
import user_4 from '../../assets/Indian-2.webp'
const Testimonials = () => {

  const slider = useRef();
  let tx = 0;
const slideForward =() =>{
   if(tx> -50){
    tx -= 25;
   }
   slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward =() => {
    if(tx < 0){
    tx += 25;
   }
   slider.current.style.transform=`translateX(${tx}%)`;
}



  return (
    <div className='testimonials'>
    <img src={next_icon} alt="" className='nextBtn'onClick={slideForward}/>
    <img src={back_icon} alt="" className='backBtn' onClick={slideBackward}/> 
    <div className='slider'>
      <ul ref={slider}>
        <li>
          <div className="slide">
            <div className='userInfo'>
            <img src= {user_1} alt="" />
            <div>
              <h3>Teja Reddy</h3>
              <span>Mahindra,India</span>
            </div>
            </div>
            <p>Joining Mahindra University has opened so many doors for me. From industry exposure to personal development workshops, every aspect of student life here adds value to my future." </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className='userInfo'>
            <img src= {user_2} alt="" />
            <div>
              <h3>Ajay</h3>
              <span>Mahindra,India</span>
            </div>
            </div>
            <p>"The course structure at Mahindra University is extremely well-designed. It balances theory and practical knowledge perfectly, and the mentors are always ready to help."</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className='userInfo'>
            <img src= {user_3} alt="" />
            <div>
              <h3>Rahul</h3>
              <span>Mahindra,India</span>
            </div>
            </div>
            <p>"Studying at Mahindra University has been a life-changing experience. The faculty genuinely care about our growth, and the hands-on learning approach has prepared me for real-world challenges.</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className='userInfo'>
            <img src= {user_4} alt="" />
            <div>
              <h3>Pramod</h3>
              <span>Mahindra,India</span>
            </div>
            </div>
            <p>"What I love most about Mahindra is the sense of belonging. The campus environment is both inspiring and supportive — it's a place where students are encouraged to grow academically and personally. </p>
          </div>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Testimonials