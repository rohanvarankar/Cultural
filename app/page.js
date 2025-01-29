'use client'; // To ensure this runs in the client-side environment
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const Page = () => {
  const shoeCircleRef = useRef(null);

  // Featured items data
  const featuredItems = [
    {
      title: 'Classical Dance',
      description: 'Discover the graceful movements of Bharatanatyam',
      image: '/placeholder.svg?height=200&width=300',
      category: 'Dance',
    },
    {
      title: 'Traditional Music',
      description: 'Experience the rhythms of classical Indian instruments',
      image: '/placeholder.svg?height=200&width=300',
      category: 'Music',
    },
    {
      title: 'Regional Cuisine',
      description: 'Explore the diverse flavors of Indian cooking',
      image: '/placeholder.svg?height=200&width=300',
      category: 'Cuisine',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Discover Indian Culture
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Explore the rich heritage of Indian music, dance, and cuisine
        </p>

        {/* Button with Link for navigation */}
        <Link href="/cultural-journey" passHref>
          <button className="mt-8 rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors duration-300">
            Start Your Cultural Journey
          </button>
        </Link>
      </section>

      {/* Featured Content Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="w-full relative h-[500px] flex justify-center items-center">
          {/* Rotating circle */}
          <div
            ref={shoeCircleRef}
            className="absolute w-full h-full flex justify-center items-center animate-spin-slow" // Apply the spin animation here
            style={{
              position: 'relative',
              transformOrigin: 'center center',
            }}
          >
            {/* Rotating surrounding images in a circle */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, index) => (
              <img
                key={index}
                src={`/cul${i}.jpg`} // Image path updated to match the `cul1.jpg` to `cul9.jpg` in the public/images folder
                alt={`Cultural Image ${i}`}
                className="absolute rounded-3xl shadow-lg"
                style={{
                  width: '120px', // Increased size for larger devices
                  height: '120px',
                  transform: `rotate(${(360 / 9) * index}deg) translateX(250px)`, // Increased translateX for spacing
                  transition: 'transform 1s ease-in-out',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {featuredItems.map((item, index) => (
            <div key={index} className="rounded-lg border bg-white shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                <span className="mt-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
