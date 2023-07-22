import React, { useState } from 'react';
import '../../css/VideoPlayer.css'

const VideoModal = (probs) => {
  const [videoSrc, setVideoSrc] = useState('');

  const handleButtonClick = (src) => {
    setVideoSrc(src.replace("watch?v=", "embed/"));

  };

  const handleModalShow = () => {
    const videoElement = document.getElementById('video');
    videoElement.src = `${videoSrc}?autoplay=0&modestbranding=1&showinfo=0`;
  };

  const handleModalHide = () => {
    const videoElement = document.getElementById('video');
    setVideoSrc("")
    videoElement.src = videoSrc;
  };

  return (
    <div>
      <button
        type="button"
        className=" video-button"
        data-toggle="modal"
        data-target="#myModal"
        onClick={() =>
          handleButtonClick(probs?.videoUrl)
        }
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
         <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg>
      </button>

      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
        onShow={handleModalShow}
        onHide={handleModalHide}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <iframe
                id="video"
                width="560"
                height="315"
                src={videoSrc ? `${videoSrc}?autoplay=0&modestbranding=1&showinfo=0` : ''}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
