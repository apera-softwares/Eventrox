import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { API_URL } from '../../apiConfig';

const BecomeSpeakerForm = () => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            linkedin: formData.get("linkedin"),
            company: formData.get("company"),
        };

        try {
            const response = await fetch(`${API_URL}/speakers-requests`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error("Failed to register");
            }

            toast.success("Thanks for showing interest. We have sent you email with pdf attached.");
            event.target.reset();
        } catch (error) {
            toast.error("Registration failed. Please try again.");
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form-inline'>
            <h2 className='mb-3'>Become a speaker</h2>
            <div className="form-group mb-3">
               <label for="name">Name</label>
                <input type="text" name="name" className="form-control" placeholder="Full name" autoComplete='off' required />


            </div>
            <div className="form-group mb-3">
                <label for="email">Email address</label>
                <input type="email" name="email" className="form-control"  placeholder="Enter email address" autoComplete='off' required />
            </div>
            {/* <div className="form-group">
                <span className="icon fa fa-phone"></span>
                <input type="number" name="phone" className='no-arrows' placeholder="Phone" autoComplete='off' required />
            </div> */}
            <div className="form-group mb-3">
                <label for="company">Company</label>
                <input type="text" name="company"  className='form-control no-arrows' placeholder="Company Name" autoComplete='off' required />
            </div>
            <div className="form-group mb-3">
                <label for="linkedin">LinkedIn</label>
                <input type="text" name="linkedin" className='form-control no-arrows' placeholder="LinkedIn" autoComplete='off' required />
            </div>
            {/* <div className="form-group">
                <span className="icon fa fa-edit"></span>
                <textarea name="message" placeholder="Additional Message" autoComplete='off'></textarea>
            </div> */}
            <div className="form-group text-end">
                <button type="submit" className="theme-btn btn-style-four">
                    <span className="btn-title">Submit</span>
                </button>
            </div>
        </form>
    );
};

export default BecomeSpeakerForm;
