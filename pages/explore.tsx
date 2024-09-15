import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Helmet } from 'react-helmet';
import { AuthProvider } from "@propelauth/react";
import {Rubik} from 'next/font/google';
import Navbar from './navbar';

//landing page before login

export default function Home() {
  return (
   <>
      <Helmet>
        <title>Hearth | Aminah's Page</title>
        <meta name="description" content="Find Your New Home" />
      </Helmet>
        <Navbar />
        <div className="text-hearth-navy rubik-title">Landing Page!</div>
        <Link href="/auth"> {/* Link to login page */}
            <button>Log In to Explore Listings</button>
          </Link>
    </>
  );
}

//<Navbar />
