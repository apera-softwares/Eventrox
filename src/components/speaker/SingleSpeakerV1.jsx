import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import SocialShare from '../others/SocialShare';

const SingleSpeakerV1 = ({ speaker }) => {
    const { id, thumb, name, designation, linkedIn } = speaker


    return (
        <>
            <div className="inner-box">
                <div className="image-box">
                    <figure className="image"><img src={`${thumb}`} alt="image" /></figure>
                </div>
                <div className="info-box">
                    <div className="inner">
                        <h4 className="name">{name}</h4>
                        <span className="designation">{designation}</span>
                        <ul className="social-links social-icon-colored">
                            <SocialShare linkdin={linkedIn}/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleSpeakerV1;