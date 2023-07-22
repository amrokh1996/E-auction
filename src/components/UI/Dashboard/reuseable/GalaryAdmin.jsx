import React, { useState } from 'react';
import VideoModal from '../../VideoPlayer';
import '../../../../css/Gallery.css'
import '../../../../css/VideoPlayer.css';


export default function GalaryAdmin  (probs)  {

  const [selectedImage, setSelectedImage] = useState(probs.img1);

  const images = [
    { id: 1, src: probs.img1, alt: 'Image 1' },
    // { id: 2, src: probs.img2, alt: 'Image 2' },
    // { id: 3, src: probs.img3, alt: 'Image 3' },
    // { id: 4, src: probs.img4, alt: 'Image 4' },
    // { id: 5, src: probs.img5, alt: 'Image 5' },
    // { id: 6, src: probs.img6, alt: 'Image 6' },
    // { id: 7, src: probs.img7, alt: 'Image 7' },
    // { id: 8, src: probs.img8, alt: 'Image 8' },
    // { id: 9, src: probs.img9, alt: 'Image 9' },
   
 
    // Add more images as needed
  ];

  if (typeof probs.img2 !== 'undefined') {
    images.push({ id: 2, src: probs.img2, alt: 'Image 2' })   
  }
  if (typeof probs.img3 !== 'undefined') {
    images.push({ id: 3, src: probs.img3, alt: 'Image 3' })   
  }
  if (typeof probs.img4 !== 'undefined') {
    images.push({ id: 4, src: probs.img4, alt: 'Image 4' })   
  }
  if (typeof probs.img5 !== 'undefined') {
    images.push({ id: 5, src: probs.img5, alt: 'Image 5' })   
  }
  if (typeof probs.img6 !== 'undefined') {
    images.push({ id: 6, src: probs.img6, alt: 'Image 6' })   
  }
  if (typeof probs.img7 !== 'undefined') {
    images.push({ id: 7, src: probs.img7, alt: 'Image 7' })   
  }
  if (typeof probs.img8 !== 'undefined') {
    images.push({ id: 8, src: probs.img8, alt: 'Image 8' })   
  }
  if (typeof probs.img9 !== 'undefined') {
    images.push({ id: 9, src: probs.img9, alt: 'Image 9' })   
  }
  

  const handleImageClick = (image) => {
    setSelectedImage(image.src);
  };


  return (
    <div className="gallery">
        <div className='row video-img' >
        <img src={selectedImage} alt="Zoomed Image" style={{width:'200px',height:'150px'}} className="img-fluid Show-image"/>

        </div>
      <div className="d-flex flex-row">
        {images.map((image) => (
          <div className=" mt-2" key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              style={{height:'2rem',width:'2rem',border:'1px orange solid'}}
              className="img-fluid"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


