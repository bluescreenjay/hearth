/*
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Helmet } from 'react-helmet';
import { AuthProvider } from "@propelauth/react";
import {Rubik} from 'next/font/google';
import Navbar from './navbar';
import Modal from './Modal'; // Importing Modal component

//landing page before login

export default function Home() {
  return (
   <>
      <Helmet>
        <title>Hearth | Home</title>
        <meta name="description" content="Find Your New Home" />
      </Helmet>
        <Navbar />
        <div className="text-hearth-navy rubik-title">Landing Page!</div>*/
       // <Link href="/auth"> {/* Link to login page */}
       /*     <button>Log In to Explore Listings</button>
          </Link>*/
          //<Link href="/profile-settings"> {/* Link to profile settings page */}
       /* <button>Go to Profile Settings</button>
      </Link>
      <Modal isOpen = {false}
      onClose={() => console.log('Modal closed')} 
      onSubmit={() => console.log('Modal submitted')} />
    </>
  );
}

//<Navbar />
*/

import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';
import { Rubik } from 'next/font/google';

// Use the Rubik font
const rubik = Rubik({ subsets: ['latin'] });

export default function LoginPage() {
  return (
    <div className={rubik.className}>
      <Head>
        <title>Hearth | Log In</title>
        <meta name="description" content="Log in to access Hearth and explore listings." />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="text-hearth-navy text-4xl font-bold mb-6">Log In</h1>
        <LoginForm />
        <div className="mt-4 text-gray-600">
          <p>Don't have an account? <Link href="/signup" className="text-blue-500 hover:underline">Sign up here</Link>.</p>
        </div>
      </div>
    </div>
  );
}

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      // Always redirect regardless of the response
      window.location.href = '/aboutus'; // Redirect to dashboard after login attempt
    } catch (error) {
      // Optionally handle any error but still allow redirection
      window.location.href = '/aboutus';
    }
  };
    

  return (
    <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Log In
      </button>
    </form>
  );
};
