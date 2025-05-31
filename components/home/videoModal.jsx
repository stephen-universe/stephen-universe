import { useState } from "react";
import ReactPlayer from "react-player";

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Google Drive MP4 file URL (make sure it's shared publicly)
  const videoUrl = "/Steven-Universe.mp4";


  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal} className="play-button">
        Play Video{" "}
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={toggleModal}>
              ×
            </button>

            <ReactPlayer
              url={videoUrl}
              controls={true}
              width="100%"
              height="100%"
              playing={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoModal;
