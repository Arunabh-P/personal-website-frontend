'use client';
import { TestimonialCard } from '@/components/molecule/testimonial-card';
import { testimonial } from '@/constants/home/testimonial';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
const TestimonialTemplate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - cardsToShow);
    }
  };

  const handleNext = () => {
    if (currentIndex + cardsToShow < testimonial.data.length) {
      setCurrentIndex((prevIndex) => prevIndex + cardsToShow);
    }
  };
  return (
    <div className="section-padding  xl:flex">
      <div className="w-full xl:w-3/12 h-ful flex flex-col justify-center pb-[20px]">
        <h2 className="font-lora pb-4 font-medium">{testimonial.title}</h2>
        <p className="font-normal text-justify">{testimonial.description}</p>
      </div>
      <div className="w-full xl:w-9/12 flex justify-center xl:justify-end">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {testimonial.data
            .slice(currentIndex, currentIndex + cardsToShow)
            .map((item, index) => (
              <TestimonialCard
                key={index}
                image={item.image}
                name={item.name}
                company={item.company}
                quote={item.quote}
              />
            ))}
          <div className="">
            <button
              className={`bg-secondary hover:bg-secondary-light text-white p-2 md:p-3 rounded-l-lg ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <MdKeyboardArrowLeft className="w-5 h-5" />
            </button>
            <button
              className={`bg-secondary hover:bg-secondary-light text-white p-2 md:p-3 rounded-r-lg  ${currentIndex + 3 >= testimonial.data.length ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleNext}
              disabled={currentIndex + 3 >= testimonial.data.length}
            >
              <MdKeyboardArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialTemplate;
