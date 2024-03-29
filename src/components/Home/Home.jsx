import React from 'react';

const Home = () => {
  return (
    <div className='flex h-screen items-center'>
      <div className="text-center mx-auto">
        <h1 className="text-black font-extrabold text-4xl md:text-6xl">Romayle Dharmasena</h1>
        <h1 className="text-blue-500 font-extrabold text-4xl md:text-6xl">FullStack Developer</h1>
        <h1 className="text-black text-lg md:text-xl lg:text-2xl">Web Developer, Cloud enthusiast, and Anime lover</h1>
        <div className="flex flex-wrap justify-center">
          <button className="bg-blue-900 text-white px-4 py-2 rounded mr-5 md:mr-15">Contact Me</button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded ml-5 md:ml-15">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Home;