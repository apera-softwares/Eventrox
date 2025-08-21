import React, { useEffect, useState } from 'react';
import ClientV1Data from '../../jsonData/client/ClientV1Data.json'
import SingleClientV1 from './SingleClientV1';
import ReactWOW from 'react-wow';
import { API_URL, BASE_API_URL } from '../../apiConfig';

const ClientV1 = () => {

    console.log('Inside sponsor page');


    const [sponsorsData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Inside sponsor page: useEffect')
        const fetchData = async () => {
            console.log('Inside sponsor page: fetch called', API_URL)
            try {
                const response = await fetch(`${API_URL}/sponsors`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                                console.log(result.docs, "response 22")

                const sponsorsRaw = result?.docs.map((doc) => {
                        return({ id: doc.id, url: `${BASE_API_URL}${doc.sponserImage.url}` })
                    });
                // if (result?.docs) {
                //     result?.docs.forEach((doc) => {
                //         sponsorsRaw.push({ id: doc.id, thumb: `${BASE_API_URL}${doc.sponserImage.url}` })
                //     })
                // }                
                setData(sponsorsRaw);
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
            <section className="clients-section">
                <div className="anim-icons">
                    <ReactWOW animation='zoomIn'>
                        <span className="icon icon-dots-3"></span>
                    </ReactWOW>
                    <span className="icon icon-circle-blue"></span>
                </div>
                <div className="auto-container">
                    <div className="sec-title">
                        {/* <span className="title">Clients</span> */}
                        <h2>Our Partners</h2>
                    </div>

                    {sponsorsData.length && <SingleClientV1 client={sponsorsData} />}

                </div>
            </section>
        </>
    );
};

export default ClientV1;