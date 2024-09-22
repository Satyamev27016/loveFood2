import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import axios from 'axios';


const Login = () => {

    const[formData, setFormData] = useState({
        username: "",
        fullName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/v1/user/register', formData,{
                withCredentials: true
            });
            alert(response.data.message);
        } catch (error) {
            alert(error.response?.data?.error || 'Error registering user');
        }
    };

    const [password, setPassword] = useState("");
    const[showPassword, setShowPassword] = useState(false);
    const[error, setError] = useState("");
    {/* Function to handle pasword change event */}
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            password: value
            });

{/* validation function */}

        if (value.length < 8) {
            setError("Password must be at least 8 characters long");
        } else {    
            setError("");
        }
    };

    return (
        <div>
            {/* <!-- Section: Design Block --> */}
            <section className="text-center">
                {/* <!-- Background image --> */}
                <div
                    className="p-5 bg-image"
                    style={{
                        backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
                        height: "300px",
                    }}
                ></div>
                {/* <!-- Background image --> */}

                <div
                    className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary"
                    style={{
                        marginTop: "-100px",
                        backdropFilter: "blur(30px)",
                    }}
                >
                    <div className="card-body py-5 px-md-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-5">Sign up now</h2>
                                <form onSubmit={handleSubmit}>
                                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input  
                                                        type="text" 
                                                        name="fullName"
                                                        value={formData.fullName}
                                                        onChange={handleChange}
                                                        
                                                        className="form-control" 
                                                        placeholder="Full Name" />

                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input 
                                                        type="text" 
                                                        name="username"
                                                        value={formData.username}
                                                        onChange={handleChange}
                                                        className="form-control"  
                                                        placeholder="username" 
                                                        
                                                    />
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Email input --> */}

                                    <div className="form-outline mb-4">
                                        <input 
                                                type="email" 
                                                name='email'
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control"  
                                                placeholder=" Email address" 
                                            />
                                    </div>

                                    {/* <!-- Password input --> */}

                                    <div className="form-outline mb-4">
                                        <input 
                                                type={showPassword ? "text" : "password"} 
                                                name='password'
                                                value={formData.password}
                                                className="form-control" 
                                                placeholder=" Password"  
                                                onChange={handlePasswordChange} 
                                            />
                                        <button type='button'
                                                style={{ border: 'none', background: 'transparent',  }}
                                                onClick={() => setShowPassword(!showPassword)}>
                                            <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>    
                                        </button>
                                        
                                        {error && <div style={{color: "red"}}>{error}</div>}
                                    </div>

                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            id="form2Example33"
                                            defaultChecked
                                        />
                                        <label className="form-check-label" htmlFor="form2Example33">
                                            Subscribe to our newsletter
                                        </label>
                                    </div>

                                    {/* <!-- Submit button --> */}
                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        Sign up
                                    </button>

                                    {/* <!-- Register buttons --> */}
                                    <div className="text-center">
                                        <p>or sign up with:</p>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-google"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-twitter"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-github"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;