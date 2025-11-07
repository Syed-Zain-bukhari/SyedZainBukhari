import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal site built with React and Tailwind CSS.",
      github: "https://github.com/Syed-Zain-bukhari/SyedZainBukhari",
      demo: "#",
      image: "/public/webpo.png",
    },
    {
      title: "To-Do App",
      description: "A simple task manager built in React with local storage.",
      github: "https://github.com/Syed-Zain-bukhari/TodoApp-React",
      demo: "#",
      image: "/public/todo-2.jpg",
    },
    {
      title: "Quiz App",
      description: "Made for Sharpen your mind in tech basics.",
      github: "https://github.com/Syed-Zain-bukhari/quiz-app",
      demo: "#",
      image: "/public/quiz-2.jpg",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-white py-20 px-6 md:px-12 flex flex-col justify-center items-center"
    >
      <motion.div
        className="max-w-6xl w-full"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          My Projects
        </motion.h2>

        <motion.div
          variants={container}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-100 h-58 object-cover"
              />

              <div className="p-6 flex flex-col justify-between h-[220px]">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                  {/* <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a> */}
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
