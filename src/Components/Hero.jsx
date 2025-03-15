import React from "react";
import banner from '../assets/banner.jpeg'
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="rounded">
      <div
        className="hero h-screen w-11/12 mx-auto rounded"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/fYj8703Z/hand.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30 rounded"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-3xl font-bold w-full">Connecting People Across Faiths & Interests</h1>
            <p className="mb-5">
            CommunionHub is a platform designed to connect people across different faiths and interests through community events. It enables users to discover, organize, and participate in meaningful gatherings, fostering inclusivity and shared experiences.
            </p>
             <NavLink to={'/event'}>
             <button  className="btn btn-warning text-black hover:bg-yellow-300">Explore Events</button>
             </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
