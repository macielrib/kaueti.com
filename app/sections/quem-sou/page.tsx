'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaBuilding } from "react-icons/fa6";
import Link from "next/link";

const CardGradient = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
  </div>
);

const QuemSou = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 80; // Ajuste este valor conforme necessário (espaço do header)
      const targetPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-black py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="w-full bg-[#0D0D0D] border border-[#292929]/50 rounded-[28px] p-6 md:p-8 
                     relative overflow-hidden shadow-2xl shadow-black/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CardGradient />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
            {/* Avatar com sombra */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex-shrink-0 w-full md:w-auto"
            >
              <div className="relative w-[200px] md:w-[280px] mx-auto md:mx-0">
                <div 
                  className="h-[211px] md:h-[291px]"
                  style={{
                    mask: 'linear-gradient(180deg, #000000 50%, transparent 100%)',
                    WebkitMask: 'linear-gradient(180deg, rgb(0, 0, 0) 80%, transparent 100%)',
                    position: 'relative',
                    zIndex: 5
                  }}
                >
                  <Image 
                    src="https://framerusercontent.com/images/PhspVOOUKBa2ChZJSmGD7TbgUiI.png?scale-down-to=1024"
                    width={280}
                    height={280}
                    alt="Avatar"
                    className="relative z-10"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Conteúdo */}
            <div className="flex-1 space-y-6">
              <motion.h2 
                className="text-4xl md:text-5xl font-medium font-dmsans text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                O que me torna <span className="font-instrument italic">diferente?</span>
              </motion.h2>

              <motion.p
                className="text-[#ABABAB] text-base md:text-lg font-dmsans leading-relaxed max-w-[540px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Criando experiências digitais únicas adaptadas à sua marca e objetivos. 
                Combinando criatividade e tendências de design, 
                garantindo que cada projeto seja visualmente impressionante e perfeitamente executado.
              </motion.p>

              <div className="flex flex-wrap gap-3 sm:gap-2">
                <motion.button
                  className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 bg-black/40 
                            rounded-xl relative overflow-hidden group w-fit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 border border-white/10 rounded-xl" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <Link 
                    href="#projects" 
                    onClick={scrollToProjects}
                    className="relative px-2 z-10 text-sm text-white/90 font-medium font-dmsans"
                  >
                    Ver projetos
                  </Link>
                  <FaArrowRight className="relative z-10 text-white/70 group-hover:translate-x-0.5 
                                        transition-transform" size={14} />
                </motion.button>
                <motion.button
                  className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 bg-black/40 
                            rounded-xl relative overflow-hidden group w-fit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Borda sutil */}
                  <div className="absolute inset-0 border border-white/10 rounded-xl" />
                  
                  {/* Gradiente de hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Texto e ícone */}
                  <Link href={'https://spacefy.com.br/'} target="_blank" className="relative px-2 z-10 text-sm text-white/90 font-medium font-dmsans">
                    Minha agência
                  </Link>
                  <FaBuilding className="relative z-10 text-white/70 group-hover:translate-x-0.5 
                                        transition-transform" size={14} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuemSou;
