import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  } from "react-icons/fa";
  import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-100 py-20 px-6 md:px-12 flex flex-col justify-center items-center"
    >
      <motion.div
        className="max-w-6xl w-full text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          My Skills
        </motion.h2>

        <motion.div
          variants={container}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-lg font-semibold text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
