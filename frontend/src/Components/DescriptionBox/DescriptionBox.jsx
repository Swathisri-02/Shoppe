import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (180)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Shopper is a user-friendly and feature-rich online shopping website that caters to the diverse needs of consumers in search of a seamless and enjoyable shopping experience. The platform is designed with a clean and modern interface, ensuring easy navigation and a visually appealing layout.
               The platform offers an extensive catalog of products, ranging from fashion and electronics to home goods and beyond. Shopper caters to a broad audience, ensuring that customers can find everything they need in one place.
            </p>
        </div>
    </div> 
  )
}

export default DescriptionBox