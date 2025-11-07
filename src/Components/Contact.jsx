import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
      id="contact"
      className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-20 px-6 md:px-12 flex flex-col justify-center items-center"
    >
      <motion.div
        className="max-w-4xl w-full text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          Contact Me
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-lg text-gray-700 mb-12"
        >
          I’d love to connect! Whether you want to discuss a project, collaborate,
          or just say hello — feel free to reach out anytime.
        </motion.p>

        <motion.div
          variants={container}
          className="flex flex-col sm:flex-row justify-center items-center gap-8 text-lg"
        >
          <motion.a
            variants={fadeUp}
            href="mailto:syedzain9398@gmail.com"
            className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-indigo-600"
          >
            <FaEnvelope className="text-2xl text-indigo-500" />
            syedzain9398@gmail.com
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="https://github.com/Syed-Zain-bukhari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-indigo-600"
          >
            <FaGithub className="text-2xl text-gray-800" />
            github.com/me!
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="https://linkedin.com/in/Syed-Zain-Bukhari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-indigo-600"
          >
            <FaLinkedin className="text-2xl text-blue-700" />
            linkedin.com/me!
          </motion.a>
        </motion.div>

        {/* Optional message */}
        <motion.p
          variants={fadeUp}
          className="mt-12 text-gray-600 text-sm"
        >
          © {new Date().getFullYear()} Syed Zain — Built with using React & Tailwind CSS
        </motion.p>
      </motion.div>
    </section>
  );
}
