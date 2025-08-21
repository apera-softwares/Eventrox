import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { HashLink as Link } from "react-router-hash-link";

const VideoV1 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section
        className="video-section"
        style={{ backgroundImage: "url(images/background/conference-hall.jpg)" }}
      >
        <div className="auto-container">
          <div className="content-box">
            <h2 className="text-yellow-800">
              Step inside last year’s Future of Work HR Conference
            </h2>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="ljw0VKu7aV0"
              onClose={() => setOpen(false)}
            />
            <Link className="play-now" onClick={() => setOpen(true)}>
              <i className="icon flaticon-play-button-3" aria-hidden="true"></i>
              <span className="ripple"></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoV1;
