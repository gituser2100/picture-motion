import React from 'react';
import { StarIcon } from '@heroicons/react/16/solid';
import the_catalyzer from '../assets/images/movies/the_catalyzer.jpg'
import shooting_stars from '../assets/images/movies/shooting_stars.jpg'
import cosmic_journeys from '../assets/images/movies/cosmic_journeys.jpg'
import starlight_memories from '../assets/images/movies/starlight_memories.jpg'
import midnight_express from '../assets/images/movies/midnight_express.jpg'

// Sample movie data (you would typically fetch this from an API)
const movies = [
  {
    id: 1,
    rating: 7.23,
    title: 'The Catalyzer',
    poster: the_catalyzer,
    date: '01/09/2022'
  },
  {
    id: 2,
    rating: 7.9,
    title: 'Shooting Stars',
    poster: shooting_stars,
    date: '01/09/2022'
  },
  {
    id: 3,
    rating: 9.63,
    title: 'Cosmic Journey',
    poster: cosmic_journeys,
    date: '15/10/2022'
  },
  {
    id: 4,
    rating: 8.55,
    title: 'Midnight Express',
    poster: midnight_express,
    date: '22/11/2022'
  },
  {
    id: 5,
    rating: 8.73,
    title: 'Starlight Memories',
    poster: starlight_memories,
    date: '05/12/2022'
  },
];

const TopMovieGrid = () => {
  return (
    <>
    <h1 className='flex justify-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-lavender-400 to-cyan-400'>
        Top Movies
    </h1>
    <section className="min-h-screen text-gray-100 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="w-full group"
            >
              <div className="relative block overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg hover:cursor-pointer h-72 group-hover:scale-105">
                <img 
                  alt={movie.title} 
                  className="block object-cover object-center w-full h-full cursor-pointer" 
                  src={movie.poster} 
                />
                <div className="absolute inset-0 transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-20"></div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="mb-1 text-xs tracking-widest text-gray-100 uppercase">{movie.title}</h3>
                <h2 className="text-lg font-medium text-gray-300"><StarIcon className='inline-block w-4 h-4 text-yellow-300' /> {movie.rating}</h2>
                <p className="mt-1 text-gray-600">{movie.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default TopMovieGrid;