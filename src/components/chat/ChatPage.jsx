import React, { useRef, useState } from 'react';
import logo from '/assets/logo.png';
import { Link } from 'react-router-dom';
import settings from '/assets/settings.png';
import bellIcon from '/assets/Vector.png';
import userIcon from '/assets/userIcon.png';
import send from '/assets/Vector-1.png';
import photo from '/assets/Group 49-2.png';
import file from '/assets/Group 51-1.png';
import SliderButton from './SliderButton'; // Adjust the path if necessary

const ChatPage = () => {
  const [value, setValue] = useState('');
  const [text, setText] = useState([]);
  const outputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      setText([...text, value]);
      setValue('');
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-between py-3 px-4">
        <img className="w-12 h-12" src={logo} alt="Logo" />
        <div className="bg-[#4B4B4B] hidden text-white text-opacity-85 md:flex items-center gap-10 rounded-3xl px-10 py-3">
          <Link>Chat</Link>
          <Link>Text</Link>
          <Link>Pictures</Link>
          <Link>Documents</Link>
        </div>
        <SliderButton />
        <div className="bg-[#4B4B4B] flex items-center rounded-full py-1.5 px-4 gap-5">
          <img className="w-6" src={bellIcon} alt="Bell Icon" />
          <img className="w-6" src={settings} alt="Settings Icon" />
          <img className="w-10" src={userIcon} alt="User Icon" />
        </div>
      </div>

      <div className="overflow-auto h-[82%] md:h-[75%] w-screen p-4 text-white">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div className="flex space-x-3 w-screen items-center justify-center md:space-x-9 md:px-10">
        <div className="flex items-center gap-3 md:gap-5">
          <div className="bg-[#4B4B4B] py-2.5 px-2.5 flex items-center justify-end rounded-full">
            <img className="md:w-7 md:h-7 w-7 h-7" src={photo} alt="Photo Icon" />
          </div>
          <div className="bg-[#4B4B4B] py-2.5 px-2.5 flex items-center justify-center rounded-full">
            <img className="md:w-7 md:h-7 w-7 h-7" src={file} alt="File Icon" />
          </div>
        </div>
        <div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter your prompt"
            className="md:w-[42vw] w-[50vw] py-2 rounded-3xl bg-[#D4EA5E] text-black font-medium overflow-y-auto placeholder-black placeholder:font-medium outline-none px-2"
            type="text"
          />
        </div>
        <div onClick={handleSubmit} className="bg-[#4B4B4B] py-2.5 px-2.5 md:flex items-center justify-center rounded-full">
          <img className="md:w-5 md:h-5 w-7 h-6" src={send} alt="Send Icon" />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
