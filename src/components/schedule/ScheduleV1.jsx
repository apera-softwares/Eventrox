import React, { useEffect, useState } from "react";
import ScheduleList from "./ScheduleList";
import ReactWOW from "react-wow";
import { HashLink as Link } from "react-router-hash-link";
import { API_URL, BASE_API_URL } from "../../apiConfig";

const ScheduleV1 = () => {
  const [scheduleListData, setScheduleListData] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/conference-schedule?sort=createdAt`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.docs?.length) {
          const listData = [];
          const scheduleV1 = [];

          data.docs.forEach((doc, index) => {
            const dateObj = new Date(doc.conferenceDate);
            const dayNumber = String(dateObj.getDate()).padStart(2, "0");
            const monthName = dateObj.toLocaleString("default", {
              month: "short",
            });
            const year = dateObj.getFullYear();

            listData.push({
              id: doc.id,
              listClass: index === 0 ? "active" : "",
              dataTarget: `#tab-${index + 1}`,
              day: `Day ${index + 1}`,
              date: dayNumber,
              month: monthName,
              year: year,
            });

            scheduleV1.push({
              id: doc.id,
              tabClass: index === 0 ? "show active" : "",
              tabId: `tab-${index + 1}`,
              tabData: doc.sessions.map((session, sIndex) => ({
                id: session.id,
                eventThumb: "",
                blockClass: sIndex % 2 !== 0 ? "even" : "",
                sessionStart: new Date(session.startTime).toLocaleTimeString(
                  [],
                  { hour: "2-digit", minute: "2-digit", hour12: true }
                ),
                sessionEnd: new Date(session.endTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }),
                speakerThumb: session.speaker?.profileImage?.url
                  ? `${BASE_API_URL}${session.speaker.profileImage.url}`
                  : "default.jpg",
                name: session.speaker?.name || "Unknown Speaker",
                designation: session.speaker?.designation || "",
                title: session.title,
                text: session.description,
                btnLink: `event-detail/${doc.id}/${session.id}`,
                btnText: "Read More",
              })),
            });
          });

          setScheduleListData(listData);
          setScheduleData(scheduleV1);
        }
      })
      .catch((err) => console.error("Error fetching schedule:", err));
  }, []);

  return (
    <section className="schedule-section">
      <div className="anim-icons">
        <ReactWOW animation="zoomIn">
          <span className="icon icon-circle-4"></span>
        </ReactWOW>
        <ReactWOW animation="zoomIn">
          <span className="icon icon-circle-3"></span>
        </ReactWOW>
      </div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="title">About Conference</span>
          <h2>Schedule Plan</h2>
        </div>
        <div className="schedule-tabs tabs-box ">
          <div className="btns-box">
            <ul className="tab-buttons clearfix nav nav-tabs">
              {scheduleListData.map((list) => (
                <ScheduleList list={list} key={list.id} />
              ))}
            </ul>
          </div>
          <div className="tabs-content">
            {scheduleData.map((schedule) => (
              <div
                className={`tab fade ${schedule.tabClass}`}
                id={schedule.tabId}
                key={schedule.id}
              >
                <div className="schedule-timeline">
                  {schedule.tabData.map((block) => (
                    <div
                      className={`schedule-block ${block.blockClass}`}
                      key={block.id}
                    >
                      <div className="inner-box">
                        <div className="inner">
                          <div className="date">
                            {block.sessionStart} <br /> {block.sessionEnd}
                          </div>
                          <div className="speaker-info">
                            <figure className="thumb">
                              <img src={block.speakerThumb} alt={block.name} />
                            </figure>
                            <h5 className="name">{block.name}</h5>
                            <span className="designation">
                              {block.designation}
                            </span>
                          </div>
                          <h4>
                            <Link to={`/${block.btnLink}#`}>{block.title}</Link>
                          </h4>
                          <div className="text">{block.text}</div>
                          {/* <div className="btn-box">
                            <Link
                              to={`#form-section`}
                              className="theme-btn"
                            >
                              Book Now
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleV1;
