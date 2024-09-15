import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>Hearth | About Us</title>
        <meta name="description" content="Learn more about Hearth's mission and values." />
      </Helmet>

      <Navbar />

      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-6 text-hearth-navy">About Hearth</h1>
        <p className="text-lg text-gray-700 mb-4">
          At Hearth, we believe that finding a home is more than just a transaction; it's about building meaningful connections.
          Our platform pairs homeowners with individuals seeking affordable housing in exchange for valuable services such as nannying, tutoring, and elderly companionship. 
          We are passionate about creating opportunities that foster community, diversity, and inclusion while addressing housing and service needs.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4">
          Hearth’s mission is to empower individuals by offering flexible housing options that benefit both homeowners and service providers. 
          We aim to bridge the gap between those who need assistance and those looking for affordable living arrangements, creating a win-win solution.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li><strong>Community:</strong> We prioritize fostering genuine connections and strengthening the community by bringing people together.</li>
          <li><strong>Inclusion:</strong> We embrace diversity and strive to create inclusive environments for all, regardless of background or circumstance.</li>
          <li><strong>Affordability:</strong> We believe in offering housing solutions that are accessible and sustainable for all parties involved.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Why Choose Hearth?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Whether you’re a homeowner in need of assistance or someone seeking affordable housing, Hearth offers a unique platform to help you find the perfect match. 
          With our carefully designed platform, we ensure that both homeowners and service providers can find arrangements that suit their needs and foster a supportive community.
        </p>
      </div>
    </>
  );
}
