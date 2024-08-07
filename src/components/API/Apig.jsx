import React from 'react';
import Footer from '../footer/footer';
import { faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Apig = () => {
  return (
    <>
      <section className="md:p-5 lg:p-10 items-center items-justify-center md:autofill:true mt:motion-safe lg:autofill:true">
        <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center gap-x-8">
          <div className="max-w-5xl mx-auto p-8 flex">
            <div className="flex-2 pr-8">
              <img src="/assets/api_generation.png" alt="API Generation" className="mb-8" />
              <p className="mb-8">
                "The introduction of a new LLM for the web-based system, Synthesis AI, marks a significant
                advancement in AI-driven solutions. Leveraging state-of-the-art technology, Synthesis AI offers
                unparalleled versatility and adaptability, capable of assisting users across a broad spectrum of
                tasks and domains. Whether it's crafting compelling narratives, generating code snippets, or even
                providing personalized recommendations, the LLM serves as a powerful ally in tackling diverse
                challenges with its intuitive interface and robust backend infrastructure. Synthesis AI empowers
                users to harness the full potential of artificial intelligence, revolutionizing the way individuals
                and organizations interact with technology. As a pioneering solution in the realm of web-based
                systems, Synthesis AI sets a new standard for innovation and efficiency, promising boundless
                opportunities for collaboration, creativity, and productivity."
              </p>
              <div className="flex space-x-4 mb-8">
                <button className="bg-[#D7FE63] text-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition duration-300">
                  Get Started
                </button>
                <button className="text-[#D7FE63] border-b border-[#D7FE63] hover:text-black transition duration-300">
                  Documentation <FontAwesomeIcon icon={faArrowRight} /> 
                </button>
              </div>
            </div>
            <div className="flex-1-xl bg-black md:p-3 rounded-3xl md:xl:p-7 md:gap-x-7">
              <pre className="text-sm md:overflow-x-auto">
                <code className="text-white md:m-auto motion-safe:animate-pulse lg:autofill:true">
                  {`from flask import Flask, request, jsonify
app = Flask(__name__)

# Sample data for the chatbot responses
responses = {
  "greeting": "Hello! How can I assist you today?",
  "farewell": "Goodbye! Have a great day!",
  "default": "I'm sorry, I didn't understand that."
}

# Define routes for different actions
@app.route('/chatbot', methods=['POST'])
def chatbot():
  data = request.json
  message = data.get('message', '').lower()

  # Logic to determine response based on message
  if 'hello' in message:
    response = jsonify({"response": responses['greeting']})
  elif 'bye' in message:
    response = jsonify({"response": responses['farewell']})
  else:
    response = jsonify({"response": responses['default']})

  return response

if __name__ == '__main__':
  app.run(debug=True)`}
                </code>
              </pre>
            </div>
          </div>

          <div className="flex flex-row md:gap-3 items-center items-justify-center md:autofill:true mt:motion-safe lg:autofill:true">
            <img src="/assets/api-pic1.png" alt="" />
            <img src="/assets/api-pic2.png" alt="" />
            <img src="/assets/api-pic3.png" alt="" />
            <img src="/assets/api-pic4.png" alt="" />
          </div>

          <div className="flex-1-xl flex-row bg-[#d9d9d936] md:p-3 rounded-3xl md:xl:p-7 gap-x-3">
            <br />
            <div>
              <img src="/assets/billing1.png" alt="" />
            </div>
            
            select a plan and model for payment
            <br />
            <img className="md:w-1/2 md:h-1/2" src="/assets/cards.png" alt="" />
            <div className="flex-1-x2 flex-row bg-transparent md:p-3 rounded-3xl md:xl:p-7 gap-x-7 items-center justify-between md:autofill:true mt:motion-safe lg:autofill:true">
              <span className="text-[#D7FE63] border-b-2 border-[#D7FE63] hover:text-black transition duration-300 gap-h-5 md:autofill:true mt:motion-safe lg:autofill:true">
                <Link to="/api">
                  <button type="submit">
                    select a plan <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Link>
              </span>
            </div>
          </div>
          <br />
          <br />
          <div className="flex justify-center items-center border-[#D7FE63] border-8 rounded-3xl md:w-[864px] md:h-[992.52px] md:justify-center">
            <div className="textIntro text-white flex-1-x3 flex-col items-start justify-between p-2 lg:p-5 mx-2 lg:mx-5 leading-5 lg:leading-4 md:autofill:true mt:motion-safe lg:autofill:true flex=1=x3">
              <i className='text-3xl lg:text-[39.87px] font-bold mb-4'>Parent</i>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4"><i>Company</i></h1>
              <br /> 
              <span className='rounded-3xl md:autofill:true mt:motion-safe lg:autofill:true items-center flex-1-x2'>
                <img src="/assets/Robotpic1.png" alt="" />
              </span>
              <p className="text-base lg:text-lg leading-relaxed mb-4 md:autofill:true mt:motion-safe lg:autofill:true flex-1-x3">
                Disruptive AI stands as a pioneering force in the realm of artificial intelligence, spearheading groundbreaking innovations that redefine industry standards and reshape the technological landscape. Serving as the parent organization of Synthesia AI chatbot, akin to OpenAI's relationship with ChatGPT, Disruptive AI operates at the forefront of AI research and development. With a relentless commitment to pushing the boundaries of AI capabilities, Disruptive AI specializes in crafting advanced AI models and large language models (LLMs) that catalyze transformative change across various sectors. From revolutionizing communication with Synthesia AI chatbot to democratizing access to cutting-edge AI technologies, Disruptive AI is dedicated to making the intricate world of AI accessible and beneficial to every individual, fostering a future where innovation knows no bounds.
              </p>
              <Link to="/blog">
                <button className="btnIntro text-base lg:text-lg mt-4 px-4 py-2 flex-1-x3 rounded-3xl" type="button">
                  Read blog <FontAwesomeIcon className="icon rotate-45 ml-2" icon={faArrowUp} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <br />
      <Footer />
    </>
  );
};

export default Apig;
