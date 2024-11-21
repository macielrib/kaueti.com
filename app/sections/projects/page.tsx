'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const ProjectCard = ({ title, description, image, link }: {
  title: string;
  description: string;
  image: string;
  link: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative rounded-[28px] border border-[#292929]/50 overflow-hidden bg-[#0D0D0D]"
  >
    <Link href={link} target="_blank">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10" />
      
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="object-cover h-[400px] w-full transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-medium font-dmsans text-white">{title}</h3>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-full">
              <HiArrowRight 
                className="text-white/90 w-4 h-4" 
              />
            </div>
          </div>
        </div>
        <p className="text-gray-300 font-dmsans mt-2">{description}</p>
      </div>
    </Link>
  </motion.div>
);

const Projetos = () => {
  const projects = [
    {
      title: "Legasse",
      description: "Empresa especializada em soluções de energia solar residencial e comercial.",
      image: "https://framerusercontent.com/images/vSJG9AAIGnYCJ7uwJZUrVzsaE.jpg?scale-down-to=512",
      link: "https://legasse.com.br"
    },
    {
      title: "Spacefy",
      description: "Empresa especializada em soluções web e marketing digital para negócios.",
      image: "https://framerusercontent.com/images/IaA3MCPa8fujwB8UpCHS9cJyhH4.jpg?scale-down-to=512",
      link: "https://spacefy.com.br"
    },
    {
      title: "Conversion",
      description: "Marketing analytics dashboard.",
      image: "https://framerusercontent.com/images/VOo008v7SH5lMNywd2aX2N481gQ.jpg?scale-down-to=512",
      link: "#"
    },
    {
      title: "Scalable",
      description: "Landing Page for an analytics & sales SaaS business.",
      image: "https://framerusercontent.com/images/R0adRWHLY0PEKBrpfSMVR9KgA.jpg?scale-down-to=1024",
      link: "#"
    }
  ];

  return (
    <section className="bg-black py-4 px-4" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
