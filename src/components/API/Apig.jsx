import React from 'react';
import Footer from '../footer/footer';
import { faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Apig = () => {
  return (
    <>
      <section className="p-5 lg:p-10 flex flex-col items-center justify-center">
        <div className="min-h-screen w-full bg-transparent text-white flex flex-col items-center justify-center gap-8">
          <div className="max-w-5xl w-full mx-auto p-8 flex flex-col lg:flex-row gap-8">
            <div className="flex-1 lg:pr-8">
              <img src="/assets/api_generation.png" alt="API Generation" className="mb-8 w-full object-cover" />
              <p className="mb-8 text-base leading-6">
              The introduction of a new LLM for the web-based system, Synthesia AI, marks a significant advancement in AI-driven solutions. Leveraging state-of-the-art technology, Synthesia AI offers unparalleled versatility and adaptability, capable of assisting users across a broad spectrum of tasks and domains. Whether it's crafting compelling narratives, generating code snippets, or even providing personalized recommendations, the LLM serves as a powerful ally in tackling diverse challenges. With its intuitive interface and robust backend infrastructure, Synthesia AI empowers users to harness the full potential of artificial intelligence, revolutionizing the way individuals and organizations interact with technology. As a pioneering solution in the realm of web-based systems, Synthesia AI sets a new standard for innovation and efficiency, promising boundless opportunities for collaboration, creativity, and productivity."
              </p>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <button className="bg-[#D7FE63] text-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition duration-300">
                  Get Started
                </button>
                <button className="text-[#D7FE63] border-b border-[#D7FE63] hover:text-black transition duration-300">
                  Documentation <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-black p-5 rounded-3xl">
              <pre className="text-sm overflow-x-auto">
                <code className="text-white">
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

          <div className="flex md:flex-wrap md:justify-center gap-4">
            <img src="/assets/api-pic1.png" alt="" className="md:w-30 md:h-30 object-cover" />
            <img src="/assets/api-pic2.png" alt="" className="md:w-30 md:h-30 object-cover" />
            <img src="/assets/api-pic3.png" alt="" className="md:w-30 md:h-30 object-cover" />
            <img src="/assets/api-pic4.png" alt="" className="md:w-30 md:h-30 object-cover" />
          </div>

          <div className="w-full max-w-4xl bg-[#d9d9d936] p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 mt-8">
            <div className="flex flex-col items-center md:items-start">
              <img src="/assets/billing1.png" alt="" className="w-48 mb-4" />
              <p className="text-lg text-center md:text-left">
                Select a plan and model for payment
              </p>
              <Link to="/api">
                <button type="submit" className="text-[#D7FE63] border-b-2 border-[#D7FE63] hover:text-black transition duration-300 mt-4">
                  Select a plan <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
            <img src="/assets/cards.png" alt="" className="w-72 md:w-96 mt-4 md:mt-0" />
          </div>

          <div className="w-full max-w-2xl border-[#D7FE63] border-8 rounded-3xl p-8 mt-8 flex flex-col items-center text-center">
          <i className='text-3xl lg:text-[39.87px] font-bold mb-4 md:text-left'>Parent</i>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 md:text-left"><i>Company</i></h1>
            <img src="/assets/Robotpic1.png" alt="" className="w-full mb-4 object-cover md:justify-center" />
            <p className="text-base leading-relaxed mb-4 md:text-justify">
            Disruptive AI stands as a pioneering force in the realm of artificial intelligence, spearheading groundbreaking innovations that redefine industry standards and reshape the technological landscape. Serving as the parent organization of Synthesia AI chatbot, akin to OpenAI's relationship with ChatGPT, Disruptive AI operates at the forefront of AI research and development. With a relentless commitment to pushing the boundaries of AI capabilities, Disruptive AI specializes in crafting advanced AI models and large language models (LLMs) that catalyze transformative change across various sectors. From revolutionizing communication with Synthesia AI chatbot to democratizing access to cutting-edge AI technologies, Disruptive AI is dedicated to making the intricate world of AI accessible and beneficial to every individual, fostering a future where innovation knows no bounds.
            </p>
            <Link to="/blog">
              <button className="text-base px-4 py-2 rounded-3xl bg-[#D7FE63] text-black hover:bg-black hover:text-white transition duration-300">
                Read blog <FontAwesomeIcon className="ml-2 rotate-45" icon={faArrowUp} />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Apig;
