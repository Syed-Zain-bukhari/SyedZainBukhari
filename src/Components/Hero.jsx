
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const typingWords = ["Frontend Developer", "React Enthusiast", "MERN Learner"];

export default function Hero() {

  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingWords[wordIndex % typingWords.length];
    const speed = deleting ? 40 : 90;

    const timer = setTimeout(() => {
      setDisplay((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );

      
      if (!deleting && display === current) {
        setTimeout(() => setDeleting(true), 900);
      }
      
      if (deleting && display === "") {
        setDeleting(false);
        setWordIndex((idx) => idx + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [display, deleting, wordIndex]);

  
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-white relative overflow-hidden"
    >
      
      <div className="pointer-events-none absolute -left-16 -top-16 w-72 h-72 rounded-full bg-purple-300 opacity-20 blur-3xl transform rotate-12"></div>
      <div className="pointer-events-none absolute -right-24 -bottom-12 w-96 h-96 rounded-full bg-yellow-300 opacity-18 blur-3xl transform rotate-6"></div>

      <motion.div
        className="max-w-4xl mx-4 p-8 md:p-12 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 text-center"
        variants={container}
        initial="hidden"
        animate="show"
        aria-label="Hero"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          Hi, I’m <span className="text-indigo-600">Syed Zain</span> 👋
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
        >
          <span className="mr-2">{display}</span>
          <span className="inline-block w-1 h-6 align-middle bg-gray-900 animate-pulse ml-1" />
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* <a
            href="#projects"
            className="inline-block px-6 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-lg hover:scale-105 transform transition"
            aria-label="See projects"
          >
            See my projects
          </a> */}

          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transform transition"
            aria-label="Contact me"
          >
            Contact Me
          </a>
        </motion.div>

        
        <motion.div
          variants={fadeUp}
          className="mt-10 flex items-center justify-center gap-4"
          aria-hidden
        >
          <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-md">
            
            <img
              src="/profile-2.png"
              alt="Syed Zain"
              className="w-50 h-40 object-cover"
            />
          </div>

          <div className="text-left">
            <div className="text-sm text-gray-600">Based in Karachi, Pakistan</div>
            <div className="font-medium text-gray-900">Available for internships & freelance</div>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          aria-label="Scroll to about"
        >
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
