import { motion } from "framer-motion";

export default function About() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 py-20 px-6 md:px-12"
    >
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left side: Image */}
        <motion.div
          variants={fadeUp}
          className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white"
        >
          <img
            src="/public/full imag.jpg"
            alt="Syed Zain"
            className="w-100 h-120 object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right side: Text */}
        <motion.div
          variants={fadeUp}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            I’m a passionate{" "}
            <span className="font-semibold text-indigo-600">
              Frontend Developer
            </span>{" "}
            who loves crafting clean, interactive, and responsive user interfaces.
            My goal is to build web experiences that are not only functional but also
            visually engaging and user-friendly.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            I’ve learned{" "}
            <span className="font-semibold">HTML, CSS, JavaScript, and React</span>,
            and I’m currently exploring{" "}
            <span className="font-semibold">React Native</span> and{" "}
            <span className="font-semibold">Node.js</span> to move toward becoming a
            full MERN Stack Developer. I’m eager to contribute to real-world projects,
            collaborate with other developers, and keep improving my craft.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
