import Link from 'next/link';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Rubik } from 'next/font/google';
import Card from './components/Navbar/card';
import Navbar from './navbar';

// Landing page before login
export default function Explore() {
  return (
    <>
      <Helmet>
        <title>Hearth | Aminah's Page</title>
        <meta name="description" content="Find Your New Home" />
      </Helmet>
      <Navbar />
      <div className="text-hearth-navy rubik-title p-4 mb-4">
        <h1 className="text-3xl font-bold ml-6 mt-4 mb-0">Explore Listings</h1>
      </div>
      <div className="flex mb-4 pr-4">
        <Link href="/auth">
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition-colors ml-10">
            See More Listings
          </button>
        </Link>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card
            imageSrc={'/hearth1.jpg'}
            title="John Doe"
            subtitle="Virginia"
            description="Looking for caregiver"
          />
          <Card
            imageSrc={"/hearth2.jpg"}
            title="Emma Johnson"
            subtitle="Texas"
            description="Looking for babysitter"
          />
          <Card
            imageSrc={'/hearth3.jpg'}
            title="Michael Smith"
            subtitle="California"
            description="Looking for Companion"
          />
          <Card
            imageSrc={'/hearth4.jpg'}
            title="Sophia Brown"
            subtitle="Florida"
            description="Looking for Caregiver"
          />
          <Card
            imageSrc={'/hearth5.jpg'}
            title="James Davis"
            subtitle="New York"
            description="Looking for Companion"
          />
          <Card
            imageSrc={'/hearth6.jpg'}
            title="Olivia Wilson"
            subtitle="Illinois"
            description="Looking for Housekeeping"
          />
        </div>
      </div>
    </>
  );
}
