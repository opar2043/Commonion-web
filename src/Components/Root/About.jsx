import React from "react";

const About = () => {
  return (
    <div className="bg-white text-black my-8 min-h-screen flex flex-col items-center justify-center px-6 py-10">
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 ">About Commission  </h1>  <hr className="mb-6" />
        <p className="text-lg text-gray-700">
          <strong>Commission Hub</strong> is a platform that connects individuals, businesses, and organizations  
          to manage commissions effectively. Whether it’s for business referrals, fundraising, or sales,  
          our platform ensures smooth commission tracking and transparent payouts.
        </p>

        {/* Categories Section */}
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">Categories of Commission</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-gray-800 text-left">
          <div className="p-4 bg-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900">1. Social Commission</h3>
            <p>Referral rewards, influencer partnerships, and social impact commissions.</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900">2. Religious Commission</h3>
            <p>Charity fundraising, donation tracking, and faith-based contributions.</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900">3. Business Commission</h3>
            <p>Sales commissions, affiliate marketing, and B2B collaborations.</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900">4. Creative Commission</h3>
            <p>Artist payments, freelance projects, and gig-based commissions.</p>
          </div>
        </div>

        {/* Why It's Important */}
        <h2 className="text-2xl font-semibold mt-8 text-gray-900">Why Use Commission Hub?</h2>
        <p className="text-gray-700 mt-2">
          Our platform **automates commission tracking**, **ensures secure payments**, and  
          **provides transparent reports**, making it easy for organizations, influencers,  
          and businesses to manage commissions efficiently.
        </p>
      </div>
    </div>
  );
};

export default About;

