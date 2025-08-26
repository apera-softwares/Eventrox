import React, { useEffect, useState } from "react";
import SpeakerV1Data from "../../jsonData/speaker/SpeakerV1Data.json";
import SingleSpeakerV1 from "./SingleSpeakerV1";
import { API_URL, BASE_API_URL } from "../../apiConfig";
import CustomModal from "../modal/modal";
import BecomeSpeakerForm from "../form/BecomeSpeakerForm";

const SpeakerV1 = () => {
  const [speakersData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.log("Inside sponsor page: useEffect");
    const fetchData = async () => {
      console.log("Inside sponsor page: fetch called", API_URL);
      try {
        const response = await fetch(`${API_URL}/speakers`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result.docs, "response 22");

        const speakersRaw = result?.docs.map((doc) => {
          return {
            id: doc.id,
            thumb: `${BASE_API_URL}${doc.profileImage.url}`,
            name: doc.name,
            designation: "",
            linkedIn: doc.linkedIn,
          };
        });

        console.log(speakersRaw, "speakersRaw");
        // if (result?.docs) {
        //     result?.docs.forEach((doc) => {
        //         speakersRaw.push({ id: doc.id, thumb: `${BASE_API_URL}${doc.sponserImage.url}` })
        //     })
        // }
        setData(speakersRaw);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>

      <section
        className="speakers-section"
        style={{ backgroundImage: "url(images/background/speaker_bg.jpg)" }}
      >
        <CustomModal showPopUp={showPopup} closePopUp={()=>{setShowPopup(false)}}>
          
          <BecomeSpeakerForm/>
          
        </CustomModal>

        <div className="auto-container">
          <div className="sec-title light text-center">
            {/* <span className="title">Speakers</span> */}
            <h2 className="">Our Past Speakers</h2> 
            <button className="theme-btn btn-style-one float-end" style={{backgroundColor: 'yellow', color: 'gray'}} onClick={()=>{setShowPopup(true)}} >
              <span className="btn-title">Join as a speaker</span>
            </button>
          </div>
          <div className="row">
            {speakersData.map((speaker) => (
              <div
                className="speaker-block col-lg-3 col-md-6 col-sm-12"
                key={speaker.id}
              >
                <SingleSpeakerV1 speaker={speaker} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SpeakerV1;
