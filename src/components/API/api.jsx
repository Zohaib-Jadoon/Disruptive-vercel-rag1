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
          width: '55%',
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
        className="absolute top-4 right-4 font-light text-6xl text-[#D7FE63] bg-transparent border-none cursor-pointer"
        aria-label="Close"
      >
        &times;
      </button>
      <div style={{paddingBottom:'3%'}}>
        <div className="flex items-center justify-center" style={{padding:'3% 5%'}}>
          <div className="text-center">
            <h2 className="text-3xl" style={{fontSize:'63px', fontWeight:'500'}}>FLEXIBLE <span className="text-[#D7FE63]">PLANS</span></h2>
            <p className="text-white mt-[2%] w-[50%] mx-auto">Choose a plan that works best for you</p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-10">
          <div className="bg-transparent border-2 border-[#D7FE63] rounded-lg p-6 w-[40%] text-left" style={{borderRadius:'15px'}}>
            <h3 className="text-[#D7FE63] text-2xl">Basic</h3>
            <p className="text-[#D7FE63] text-[12px] mb-[10%]">$0.00<span className="bg-[#D7FE63] ml-[10px] text-black px-1 rounded-md">Free</span></p>
            <ul className="text-[#D7FE63] list-none p-0 mt-4 space-y-[3px]">
              <li>✔ Access to 7B Model</li>
              <li>✔ Faster than GPT 3.5</li>
              <li>✔ Free Image Generator Feature</li>
              <li>✔ Free Chat with Document</li>
            </ul>
            <button
              className="bg-[#D7FE63] text-black w-[90%] py-2 px-4 rounded-full border-none cursor-pointer transition-colors duration-300 mt-4"
              onClick={() => alert('Chosen Basic Plan')}
            >
              Choose Plan
            </button>
          </div>

          <div className="bg-[#D7FE63] rounded-lg p-6 w-[40%] text-left" style={{borderRadius:'15px'}}>
            <h3 className="text-black text-2xl">Professional</h3>
            <p className="text-black text-[12px] mb-[10%]">$5.00/- per month</p>
            <ul className="text-black list-none p-0 mt-4 space-y-[3px]">
              <li>✔ Access to 70B Model</li>
              <li>✔ Faster Querying</li>
              <li>✔ More Context</li>
              <li>✔ Free API Access</li>
            </ul>
            <button
              className="bg-black text-[#D7FE63] w-[90%] py-2 px-4 rounded-full border-none cursor-pointer transition-colors duration-300 mt-4"
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
