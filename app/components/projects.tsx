"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive online store built with Next.js and Stripe",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app created with React and Firebase",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A creative portfolio website designed with Framer Motion",
    image: "/placeholder.svg?height=300&width=400",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 font-poppins"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden backdrop-filter backdrop-blur-lg"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
