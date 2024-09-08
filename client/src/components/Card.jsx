import React from 'react';
import Photo1 from '../assets/card1.png';
export default function Card(){
    return(
        <div>
            <div className='flex gap-4 justify-evenly'>
                <div className="card" style={{ "width": "18rem" }}>
                    <img src={Photo1} className="card-img-top" alt="Kadhai Paneer" />
                    <div className="card-body">
                        <h5 className="card-title">Kadhai Paneer</h5>
                        <p className="card-text">Best in taste</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded'>
                                {Array.from({ length: 6 }, (_, i) => i + 1).map((item) => (
                                    <option key={item}>{item}</option>
                                ))}
                            </select>
                            <select className='m-2 h-100 bg-success rounded'>
                                <option>quarter</option>
                                <option>Half</option>
                                <option>Full</option>
                            </select>
                        </div>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ "width": "18rem" }}>
                    <img src={Photo1} className="card-img-top" alt="Kadhai Paneer" />
                    <div className="card-body">
                        <h5 className="card-title">Kadhai Paneer</h5>
                        <p className="card-text">Best in taste</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ "width": "18rem" }}>
                    <img src={Photo1} className="card-img-top" alt="Kadhai Paneer" />
                    <div className="card-body">
                        <h5 className="card-title">Kadhai Paneer</h5>
                        <p className="card-text">Best in taste</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ "width": "18rem" }}>
                    <img src={Photo1} className="card-img-top" alt="Kadhai Paneer" />
                    <div className="card-body">
                        <h5 className="card-title">Kadhai Paneer</h5>
                        <p className="card-text">Best in taste</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ "width": "18rem" }}>
                    <img src={Photo1} className="card-img-top" alt="Kadhai Paneer" />
                    <div className="card-body">
                        <h5 className="card-title">Kadhai Paneer</h5>
                        <p className="card-text">Best in taste</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ "width": "18rem" }}>
                    <img src={Photo1} className="card-img-top" alt="Kadhai Paneer" />
                    <div className="card-body">
                        <h5 className="card-title">Kadhai Paneer</h5>
                        <p className="card-text">Best in taste</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <div className='mt-4'>
                <div className='flex gap-4 justify-evenly'>
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={Photo1} className="card-img-top" alt="Kadhai Paneer" />
                        <div className="card-body">
                            <h5 className="card-title">Kadhai Paneer</h5>
                            <p className="card-text">Best in taste</p>
                            <div className='container w-100'>
                                <select className='m-2 h-100 bg-success rounded'>
                                    {Array.from({ length: 6 }, (_, i) => i + 1).map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                                <select className='m-2 h-100 bg-success rounded'>
                                    <option>quarter</option>
                                    <option>Half</option>
                                    <option>Full</option>
                                </select>
                            </div>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={Photo1} className="card-img-top" alt="Kadhai Paneer" />
                        <div className="card-body">
                            <h5 className="card-title">Kadhai Paneer</h5>
                            <p className="card-text">Best in taste</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={Photo1} className="card-img-top" alt="Kadhai Paneer" />
                        <div className="card-body">
                            <h5 className="card-title">Kadhai Paneer</h5>
                            <p className="card-text">Best in taste</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={Photo1} className="card-img-top" alt="Kadhai Paneer" />
                        <div className="card-body">
                            <h5 className="card-title">Kadhai Paneer</h5>
                            <p className="card-text">Best in taste</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={Photo1} className="card-img-top" alt="Kadhai Paneer" />
                        <div className="card-body">
                            <h5 className="card-title">Kadhai Paneer</h5>
                            <p className="card-text">Best in taste</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={Photo1} className="card-img-top" alt="Kadhai Paneer" />
                        <div className="card-body">
                            <h5 className="card-title">Kadhai Paneer</h5>
                            <p className="card-text">Best in taste</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

