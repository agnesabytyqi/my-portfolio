"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  {
    id: 1,
    name: "JAVASCRIPT",
    issuer: "",
    date: "2024",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "NEXT.JS 16 $ REACT",
    issuer: "",
    date: "2024",
    image: "/placeholder.svg?height=100&width=100",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 font-poppins"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden backdrop-filter backdrop-blur-lg p-6 flex flex-col items-center"
            >
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.name}
                width={100}
                height={100}
                className="mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">{cert.name}</h3>
              <p className="text-gray-300 text-center">{cert.issuer}</p>
              <p className="text-gray-400 text-sm mt-2">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
