import moongose from 'mongoose';
import React, { useState } from 'react';


export default function Userlogin() {
    return (
        <div>
            {/* <!-- Section: Design Block --> */}
            <section className="text-center">
                {/* <!-- Background image --> */}
                <div className="p-5 bg-image" style="
        background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
        height: 300px;
        "></div>
                {/* <!-- Background image --> */}

                <div className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary" style="
        margin-top: -100px;
        backdrop-filter: blur(30px);
        ">
                    <div className="card-body py-5 px-md-5">

                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-5">Sign up now</h2>
                                <form>
                                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div data-mdb-input-init className="form-outline">
                                                <input type="text" id="form3Example1" className="form-control" />
                                                <label className="form-label" for="form3Example1">First name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div data-mdb-input-init className="form-outline">
                                                <input type="text" id="form3Example2" className="form-control" />
                                                <label className="form-label" for="form3Example2">Last name</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Email input --> */}
                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <input type="email" id="form3Example3" className="form-control" />
                                        <label className="form-label" for="form3Example3">Email address</label>
                                    </div>

                                    {/* <!-- Password input --> */}
                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <input type="password" id="form3Example4" className="form-control" />
                                        <label className="form-label" for="form3Example4">Password</label>
                                    </div>

                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                                        <label className="form-check-label" for="form2Example33">
                                            Subscribe to our newsletter
                                        </label>
                                    </div>

                                    {/* <!-- Submit button --> */}
                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                                        Sign up
                                    </button>

                                    {/* <!-- Register buttons --> */}
                                    <div className="text-center">
                                        <p>or sign up with:</p>
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-google"></i>
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-twitter"></i>
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
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
    )
}