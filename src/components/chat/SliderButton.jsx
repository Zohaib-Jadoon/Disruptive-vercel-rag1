import React, { useState } from 'react';

const SliderButton = () => {
  const [sliderPosition, setSliderPosition] = useState('left');

  const handleClick = () => {
    setSliderPosition(sliderPosition === 'left' ? 'right' : 'left');
  };

  return (
    <div className="relative bg-[#4B4B4B] w-36 h-10 rounded-full flex items-center p-1 cursor-pointer" onClick={handleClick}>
      <div
        className={`absolute bg-[#D4EA5E] w-1/2 h-8 rounded-full transform transition-transform duration-300 ease-in-out ${
          sliderPosition === 'left' ? 'translate-x-0' : 'translate-x-full'
        }`}
      ></div>
      <h4 className={`relative z-10 font-bold w-1/2 rounded-full text-center ${sliderPosition === 'left' ? 'text-black' : 'text-[#D4EA5E]'}`}>7B</h4>
      <h4 className={`relative z-10 font-bold w-1/2 rounded-full text-center ${sliderPosition === 'right' ? 'text-black' : 'text-[#D4EA5E]'}`}>70B</h4>
    </div>
  );
};

export default SliderButton;
