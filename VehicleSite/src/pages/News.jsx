import React from 'react';


const News = () => (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">News</h1>
      <p className="text-lg mb-4">Stay updated with the latest developments from our company.</p>
      <div className="text-left max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">New Fleet Arrivals - April 2025</h2>
        <p className="mb-4">We're thrilled to announce the arrival of several new electric and hybrid vehicles in our fleet. This expansion supports our mission to offer more eco-friendly options to our customers.</p>
  
        <h2 className="text-2xl font-semibold mb-2">Subscription Milestone</h2>
        <p className="mb-4">We've reached over 10,000 active subscribers! Thank you to everyone who has joined our journey. Stay tuned for upcoming offers to celebrate this milestone.</p>
  
        <h2 className="text-2xl font-semibold mb-2">Upcoming App Redesign</h2>
        <p className="mb-4">A sleek, user-friendly interface and new features are coming to our mobile app this summer. The update will include better vehicle tracking and easier subscription management.</p>
      </div>
    </div>
  );

export default News;