import React, { useState } from 'react';
import './PhotoGallery.css'
import ContactForm from './propertyquery';

function PhotoGallery() {
    const [photos, setPhotos] = useState([
        { id: 1, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        { id: 2, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        { id: 3, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        { id: 4, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        { id: 5, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        { id: 6, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        // Add more photos here
        { id: 4, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        { id: 5, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        { id: 6, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        { id: 4, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        { id: 5, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        { id: 6, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        { id: 4, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        { id: 5, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },
        { id: 6, dis: "hello every one ", url: 'https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY=', queryButtonClicked: false, detailsButtonClicked: false },

    ]);
    const [showContactForm, setShowContactForm] = useState(false);

    const handleQueryButtonClick = (photoId) => {
        setShowContactForm(true);
        setPhotos((prevPhotos) =>
            prevPhotos.map((photo) =>
                photo.id === photoId ? { ...photo, queryButtonClicked: !photo.queryButtonClicked } : photo
            )
        );
    };

    const handleDetailsButtonClick = (photoId) => {
        setPhotos((prevPhotos) =>
            prevPhotos.map((photo) =>
                photo.id === photoId ? { ...photo, detailsButtonClicked: !photo.detailsButtonClicked } : photo
            )
        );
    };
    const handleCloseButtonClick = () => {
        setShowContactForm(false);
      };

    return (
        <div>
            <nav >
                {/* Navigation bar content */}
            </nav>
            {showContactForm ? (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={handleCloseButtonClick}>
                            &times; 
                        </span>
                        <ContactForm />
                    </div>
                </div>
            ) :
                <div className="photo-gallery">

                    {photos.map((photo) => (
                        <div key={photo.id} className="photo">
                            <img src={photo.url} alt={`Photo ${photo.id}`} />
                            <button onClick={() => handleQueryButtonClick(photo.id)}>
                                {photo.queryButtonClicked ? 'Hide Query' : 'Show Query'}
                            </button>
                            <button onClick={() => handleDetailsButtonClick(photo.id)}>
                                {photo.detailsButtonClicked ? 'Hide Details' : 'Show Details'}
                            </button>
                            {photo.queryButtonClicked && <p>Query for Photo {photo.id}</p>}
                            {photo.detailsButtonClicked && <p>Details for Photo {photo.id}</p>}
                        </div>
                    ))}
                </div>}
            <footer className="footer">
                <p>&copy; 2023 Photo Gallery App</p>
            </footer>
        </div>
    );
}

export default PhotoGallery;

