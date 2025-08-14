import React, { useEffect, useState } from 'react';
import GalleryV2Data from '../../jsonData/gallery/GalleryV2Data.json'
import { Gallery } from 'react-photoswipe-gallery';
import SingleImageBox from './SingleImageBox';
import { API_URL, BASE_API_URL } from '../../apiConfig';

const GalleryV2 = () => {


    const [galleryData, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${API_URL}/gallery`);
            console.log(response, "response")
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            const galleryRaw = [];
            if(result?.docs){
                    result?.docs.forEach((doc)=>{
                        galleryRaw.push({ id: doc.id, thumb: `${BASE_API_URL}${doc.galleryImage.url}`})
                    })
            }

            setData(galleryRaw);
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
            <section className="gallery-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="title">Gallery</span>
                        <h2>Event Gallery</h2>
                    </div>
                    <div className="row">
                        <Gallery withDownloadButton>
                            {galleryData?.slice(0, 6).map(gallery =>
                                <div className="gallery-item col-lg-4 col-md-6 col-sm-12" key={gallery.id} >
                                    <SingleImageBox key={gallery.id} gallery={gallery} />
                                </div>
                            )}
                        </Gallery>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryV2;