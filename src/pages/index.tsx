import React, { useEffect, useState } from 'react';

const Home = () => {

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    let timeoutId: any;
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      timeoutId = setTimeout(() => {
        const sectionHeight = window.innerHeight;
        const newSection = Math.round(window.pageYOffset / sectionHeight);
        window.scrollTo({
          top: newSection * sectionHeight,
          behavior: 'smooth',
        });
      }, 100);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionHeight = window.innerHeight;
    window.scrollTo({
      top: currentSection * sectionHeight,
      behavior: 'smooth'
    });
  }, [currentSection]);

  return (
    <div>
      <div id="section1" className="section bg-purple-400 text-3xl text-white flex justify-center items-center">
        <div>Section 1</div>  
      </div>
      <div id="section2" className="section bg-blue-400 text-3xl text-white flex justify-center items-center">
        <div>Section 2</div>  
      </div>
      <div id="section3" className="section bg-green-400 text-3xl text-white flex justify-center items-center">
        <div>Section 3</div>  
      </div>
      <div id="section4" className="section bg-red-400 text-3xl text-white flex justify-center items-center">
        <div>Section 4</div>  
      </div>
    </div>
  );
};

export default Home;
