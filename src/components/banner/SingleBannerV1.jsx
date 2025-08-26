import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import BannerVideo from '../../../public/videos/banner-video.mp4';
import BannerVideoOgg from '../../../public/videos/banner-video.ogg';
import BannerVideoWebm from '../../../public/videos/banner-video.webm';

const SingleBannerV1 = ({ banner }) => {
    const { thumb, subTitle, title1, title2, list1, list2, list3, btnLink, btnText } = banner

    return (
        <>
            <div
                className="slide-item"
            //   style={{
            //     backgroundImage: `url(videos/banner-video.gif)`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //   }}
            >
                <video autoPlay muted loop>
                    <source src={BannerVideo} type="video/mp4" />
                    <source src={BannerVideoOgg} type="video/webm" />
                    <source src={BannerVideoOgg} type="video/ogg" />
                    </video>
               
                    <div className="content-box">
                        <span className="title">{subTitle}</span>
                        <h2> {title1} <br /> {title2} </h2>
                        <ul className="info-list">
                            <li><span className="icon fa fa-chair"></span>{list1}</li>
                            <li><span className="icon fa fa-user-alt"></span>{list2}</li>
                            <li><span className="icon fa fa-map-marker-alt"></span>{list3}</li>
                        </ul>
                        {/* <div className="btn-box"><Link to={`/${btnLink}#`} className="theme-btn btn-style-two"><span className="btn-title">{btnText}</span ></Link></div> */}
                        <div className="btn-box"><Link to={`#form-section`} className="theme-btn btn-style-two"><span className="btn-title">{btnText}</span ></Link></div>
                    </div>
                
            </div >
        </>
    );
};

export default SingleBannerV1;
