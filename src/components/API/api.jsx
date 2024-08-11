import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement('#root');

const Api = ({ isOpen, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setModalIsOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setModalIsOpen(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={200}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          top: '55%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          border: '5px solid #D7FE63',
          borderRadius: '20px',
          backgroundColor: '#1a1a1a',
          color: 'white',
          width: '90%',
          maxWidth: '800px',
          height: 'auto',
          overflowY: 'auto',
          transform: modalIsOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.9)',
          opacity: modalIsOpen ? 1 : 0,
          transition: 'transform 300ms ease-out, opacity 300ms ease-out',
        },
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 font-light text-4xl sm:text-5xl text-[#D7FE63] bg-transparent border-none cursor-pointer"
        aria-label="Close"
      >
        &times;
      </button>
      <div className="p-4 md:p-6 lg:p-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            FLEXIBLE <span className="text-[#D7FE63]">PLANS</span>
          </h2>
          <p className="text-white mt-2 md:mt-4 w-full md:w-3/4 lg:w-1/2">
            Choose a plan that works best for you
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-6">
          <div className="bg-transparent border-2 border-[#D7FE63] rounded-lg p-4 md:p-6 w-full md:w-1/2 text-left">
            <h3 className="text-[#D7FE63] text-xl md:text-2xl">Basic</h3>
            <p className="text-[#D7FE63] text-sm md:text-base mb-4">
              $0.00<span className="bg-[#D7FE63] ml-2 text-black px-1 rounded-md">Free</span>
            </p>
            <ul className="text-[#D7FE63] list-none p-0 space-y-1">
              <li>✔ Access to 7B Model</li>
              <li>✔ Faster than GPT 3.5</li>
              <li>✔ Free Image Generator Feature</li>
              <li>✔ Free Chat with Document</li>
            </ul>
            <button
              className="bg-[#D7FE63] text-black w-full py-2 px-4 rounded-full border-none cursor-pointer transition-colors duration-300 mt-4"
              onClick={() => alert('Chosen Basic Plan')}
            >
              Choose Plan
            </button>
          </div>

          <div className="bg-[#D7FE63] rounded-lg p-4 md:p-6 w-full md:w-1/2 text-left">
            <h3 className="text-black text-xl md:text-2xl">Professional</h3>
            <p className="text-black text-sm md:text-base mb-4">$5.00/- per month</p>
            <ul className="text-black list-none p-0 space-y-1">
              <li>✔ Access to 70B Model</li>
              <li>✔ Faster Querying</li>
              <li>✔ More Context</li>
              <li>✔ Free API Access</li>
            </ul>
            <button
              className="bg-black text-[#D7FE63] w-full py-2 px-4 rounded-full border-none cursor-pointer transition-colors duration-300 mt-4"
              onClick={() => alert('Chosen Professional Plan')}
            >
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Api;
