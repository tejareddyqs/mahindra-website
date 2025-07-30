import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/Campus_1.webp'
import gallery_2 from '../../assets/Campus_2.webp'
import gallery_3 from '../../assets/Campus_3.webp'
import gallery_4 from '../../assets/Campus_4.webp'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
    <div className="gallery">
      <div><img src={gallery_1} alt="" /></div>
      <div><img src={gallery_2} alt="" /></div>
      <div><img src={gallery_3} alt="" /></div>
      <div><img src={gallery_4} alt="" /></div>
    </div>
    <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus