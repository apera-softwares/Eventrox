import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleClientV1 = ({ client }) => {
    console.log(client, "clientwwww")
    //const { title } = client

    return (
        <>
            <div className="sponsors-outer">
                {/* <h3>{title}</h3> */}
                <div className="row">
                    {client.map(thumb =>
                        <div className="client-block col-lg-3 col-md-6 col-sm-12" key={thumb.id}>
                            <figure className="image-box"><Link to={void (0)}><img height={240} width={300} src={`${thumb.url}`} alt="image" /></Link></figure>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SingleClientV1;