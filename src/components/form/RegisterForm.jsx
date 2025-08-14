import React from 'react';
import { toast } from 'react-toastify';
import { API_URL } from '../../apiConfig';

const RegisterForm = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const payload = {
            name: formData.get("username"),
            email: formData.get("email"),
            phone: formData.get("phone"),
        };

        try {
            const response = await fetch(`${API_URL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error("Failed to register");
            }

            toast.success("Thanks for registering!");
            event.target.reset();
        } catch (error) {
            toast.error("Registration failed. Please try again.");
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <span className="icon fa fa-user"></span>
                <input type="text" name="username" placeholder="Full name" autoComplete='off' required />
            </div>
            <div className="form-group">
                <span className="icon fa fa-envelope"></span>
                <input type="email" name="email" placeholder="Email address" autoComplete='off' required />
            </div>
            <div className="form-group">
                <span className="icon fa fa-phone"></span>
                <input type="number" name="phone" className='no-arrows' placeholder="Phone" autoComplete='off' required />
            </div>
            <div className="form-group">
                <span className="icon fa fa-edit"></span>
                <textarea name="message" placeholder="Additional Message" autoComplete='off'></textarea>
            </div>
            <div className="form-group text-end">
                <button type="submit" className="theme-btn btn-style-four">
                    <span className="btn-title">Register Now</span>
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
