import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-10">Pricing</h1>
        <div className="flex justify-center gap-10">
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg w-80"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Free</h2>
            <p className="text-gray-400 mb-4">
              For individuals just getting started with ChatGPT
            </p>
            <ul className="text-left mb-6">
              <li className="mb-2">
                ✔️ Assistance with writing, problem solving and more
              </li>
              <li className="mb-2">✔️ Access to GPT-4o mini</li>
              <li className="mb-2">✔️ Limited access to GPT-4o</li>
              <li className="mb-2">
                ✔️ Limited access to data analysis, file uploads, vision, web
                browsing, and image generation
              </li>
              <li className="mb-2">✔️ Use custom GPTs</li>
            </ul>
            <p className="text-3xl font-bold mb-4">$0 / month</p>
            <button className="bg-white text-black py-2 px-4 rounded">
              Start now
            </button>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg w-80"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Plus</h2>
            <p className="text-gray-400 mb-4">
              For individuals looking to amplify their productivity
            </p>
            <ul className="text-left mb-6">
              <li className="mb-2">✔️ Early access to new features</li>
              <li className="mb-2">✔️ Access to GPT-4, GPT-4o, GPT-4o mini</li>
              <li className="mb-2">✔️ Up to 5x more messages for GPT-4o</li>
              <li className="mb-2">
                ✔️ Access to data analysis, file uploads, vision, and web
                browsing
              </li>
              <li className="mb-2">✔️ DALL·E image generation</li>
              <li className="mb-2">✔️ Create and use custom GPTs</li>
            </ul>
            <p className="text-3xl font-bold mb-4">$20 / month</p>
            <button className="bg-white text-black py-2 px-4 rounded">
              Start now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
