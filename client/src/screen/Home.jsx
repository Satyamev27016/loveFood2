import React from "react";
import NavBar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

export default function Home() {
    return (
        <div className="">
        <div><NavBar /></div>
        <div><Carousel /></div>
        <div className="m-3">
            <Card />
        </div> 

        <div> <Footer /></div>
        </div>
    );
    }