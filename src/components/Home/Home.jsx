import React from 'react';

const Home = () => {
  return (
    <div className='flex h-screen items-center'>
      <div className="text-center mx-auto">
        <h1 className="text-black font-extrabold text-4xl md:text-6xl">Romayle Dharmasena</h1>
        <h1 className="text-blue-500 font-extrabold text-4xl md:text-6xl">FullStack Developer</h1>
        <h1 className="text-black text-lg md:text-xl lg:text-2xl my-4">Web Developer, Cloud enthusiast, and Anime lover</h1>
        <div className="flex flex-wrap flex-col md:flex-row justify-center px-20 gap-2">
          <button className="bg-blue-900 text-white rounded py-2 md:px-10 md:py-3"><a href="/web-portfolio/contact">Contact Me</a></button>
          <button className="bg-blue-900 text-white rounded py-2 md:px-10 md:py-3"><a href="RomayleDharmasenaCV.pdf" download='RomayleDharmasenaCV.pdf'>My Resume</a></button>
        </div>
      </div>
    </div>
  );
};

export default Home;