"use client";
import { motion } from "framer-motion";

const About = () => {
  const skills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "GraphQL", "Framer Motion"];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 font-poppins"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-lg mb-4">
              Who I Am I m a passionate frontend developer with a strong focus on creating beautiful, responsive, and
              user-friendly web interfaces. My goal is to bridge the gap between design and development, ensuring
              seamless and intuitive experiences for users. I enjoy transforming complex design ideas into functional
              and visually appealing websites.
            </p>
            <p className="text-lg">
              With expertise in HTML, CSS, JavaScript, and modern frontend frameworks like React and Vue, I strive to
              stay up-to-date with the latest web trends and technologies. When Im not coding, you’ll likely find me
              experimenting with new design concepts, working on open-source projects, or indulging in a creative hobby
              like digital illustration.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-semibold"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
