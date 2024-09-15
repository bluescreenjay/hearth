import Link from 'next/link';
import React from 'react';
import { Helmet } from 'react-helmet';
//import hearth1 from './public/hearth1.jpg';
//import hearth2 from './public/hearth2.jpg';
//import hearth3 from './public/hearth3.jpg';
//import hearth4 from './public/hearth4.jpg';
//import hearth5 from './public/hearth5.jpg';
//import hearth6 from './public/hearth6.jpg';
import {Rubik} from 'next/font/google';
import Card from './components/Navbar/card';
import Image from "next/image";
import Navbar from './navbar';


//landing page before login

export default function Explore() {
  return (
   <>
      <Helmet>
        <title>Hearth | Explore Page</title>
        <meta name="description" content="Find Your New Home" />
      </Helmet>
      <Navbar />
        <div className="text-hearth-navy rubik-title p-4 mb-8">Explore Hearth Listings</div>
        <Link href="/auth"> {/* Link to login page */}
          </Link>
          <div className=" ">
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
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




