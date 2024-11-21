'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Rated from "./sections/rated/page";
import QuemSou from "./sections/quem-sou/page";
import Projetos from "./sections/projects/page";
import Contact from "./sections/contact/page";
import Footer from "./sections/footer/page";

const SocialButton = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <motion.a
    href={href}
    className="p-2 bg-[#0D0D0D] rounded-xl border border-[#292929] transition-all 
               flex items-center justify-center w-10 h-10 relative group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    target="_blank"
    rel="noopener noreferrer"
  >
    {/* Efeito de glow */}
    <motion.div
      className="absolute inset-0 rounded-xl bg-white opacity-0 blur-md pointer-events-none"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 0.15 }}
      transition={{ duration: 0.2 }}
    />
    {/* Borda animada */}
    <motion.div
      className="absolute inset-0 rounded-xl border border-white/30 pointer-events-none"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1, scale: 1.05 }}
      transition={{ duration: 0.2 }}
    />
    {/* Gradiente de hover */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] rounded-xl pointer-events-none"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    />
    {/* Ícone */}
    <div className="relative z-10 pointer-events-none text-white">
      {icon}
    </div>
  </motion.a>
);

const ContactButton = () => (
  <motion.button
    className="px-5 py-2.5 bg-[#0D0D0D] text-white rounded-xl font-medium
              border border-[#292929] relative group overflow-hidden
              hidden sm:block"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {/* Efeito de glow */}
    <motion.div
      className="absolute inset-0 rounded-xl bg-white opacity-0 blur-md pointer-events-none"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 0.15 }}
      transition={{ duration: 0.2 }}
    />
    {/* Borda animada */}
    <motion.div
      className="absolute inset-0 rounded-xl border border-white/30 pointer-events-none"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    />
    {/* Gradiente de hover mais intenso */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#292929] to-[#0D0D0D] pointer-events-none"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
    {/* Texto */}
    <span className="relative z-10 pointer-events-none">Fale Comigo</span>
  </motion.button>
);

const CardGradient = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
  </div>
);

interface DotAnimationsProps {
  style?: {
    left?: string;
    top?: string;
    animationDelay?: string;
  };
}

const DotAnimations = ({ style = {} }: DotAnimationsProps) => (
  <motion.div
    className="w-[3px] h-[3px] bg-white/30 rounded-full absolute"
    style={style}
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0.8, 1, 0.8],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const generateDenseGrid = (count: number, area: { width: number, height: number }) => {
  const positions = [];
  const cols = Math.floor(Math.sqrt(count * 2));
  const rows = Math.ceil(count / cols);

  for (let i = 0; i < count; i++) {
    positions.push({
      left: `${(i % cols) * (area.width / cols) + Math.random() * 25}px`,
      top: `${Math.floor(i / cols) * (area.height / rows) + Math.random() * 25}px`,
    });
  }
  return positions;
};

const StatItem = ({ number, label }: { number: string, label: string }) => (
  <div className="flex items-center gap-1">
    <span className="text-white font-dmsans font-medium">{number}</span>
    <span className="text-[#ABABAB] font-dmsans text-sm">{label}</span>
  </div>
);

const Divider = () => (
  <div className="w-1 h-1 bg-white/20 rounded-full" />
);

interface Position {
  left: string;
  top: string;
}

interface Positions {
  first: Position[];
  second: Position[];
}

export default function Home() {
  const [positions, setPositions] = useState<Positions>({
    first: [],
    second: []
  });

  useEffect(() => {
    setPositions({
      first: generateDenseGrid(100, { width: 640, height: 200 }),
      second: generateDenseGrid(80, { width: 320, height: 320 })
    });
  }, []);

  return (
    <>
      <section className="h-full bg-black py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-6 justify-center max-w-6xl mx-auto">
          {/* Primeiro Card */}
          <motion.div 
            className="w-full lg:w-[640px] bg-[#0D0D0D] border border-[#292929]/50 rounded-[28px] p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CardGradient />
            
            {/* Background animado */}
            <div className="absolute inset-0 overflow-hidden">
              {positions.first.map((pos, i) => (
                <DotAnimations
                  key={i}
                  style={{
                    left: pos.left,
                    top: pos.top,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 space-y-5">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                <div className="flex gap-2.5 items-center">
                  <Image 
                    src={'/avatars/head.png'} 
                    width={44} 
                    height={44} 
                    alt="Image Avatar"
                    className="rounded-full" 
                  />
                  <div className="flex flex-col">
                    <h1 className="font-dmsans text-white font-medium text-[15px] sm:text-base">Hey! Me chamo Kauê.</h1>
                    <p className="text-[#ABABAB] font-dmsans text-sm font-normal">Software Developer</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-2 w-auto">
                  <div className="flex items-center gap-2">
                    <SocialButton 
                      href="https://github.com/macielrib" 
                      icon={<FaGithub size={15} className="text-white" />} 
                    />
                    <SocialButton 
                      href="https://linkedin.com/kauecarv" 
                      icon={<FaLinkedin size={15} className="text-white" />} 
                    />
                  </div>
                  <ContactButton />
                  {/* Versão mobile do botão Fale Comigo */}
                  <motion.a
                    href="https://wa.me/5551985410789"
                    className="px-5 py-2.5 bg-[#0D0D0D] text-white rounded-xl font-medium
                              border border-[#292929] font-dmsans relative group overflow-hidden
                              block sm:hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">Fale Comigo</span>
                  </motion.a>
                </div>
              </div>

              {/* Conteúdo principal com título maior */}
              <div className="space-y-3">
                <h2 className="text-[2.5rem] font-medium font-dmsans text-white leading-[1.1]">
                  Transformando suas <span className="font-instrument font-normal italic">ideias</span> em <span className="font-instrument font-normal italic">experiências</span> digitais inovadoras.
                </h2>
                
                <p className="text-[#ABABAB] font-dmsans text-base leading-relaxed">
                  Especializado em criar experiências digitais e intuitivas. Transformo desafios complexos em soluções elegantes de performance e qualidade.
                </p>

                {/* Nova seção de estatísticas minimalista */}
                <motion.div 
                  className="flex items-center gap-3 pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <StatItem number="50+" label="projetos" />
                  <Divider />
                  <StatItem number="4.9" label="avaliação" />
                  <Divider />
                  <StatItem number="30+" label="clientes" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Segundo Card */}
          <motion.div 
            className="w-full lg:w-[320px] h-[320px] bg-[#0D0D0D] rounded-[28px] border border-[#292929]/50 
                       relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CardGradient />
            
            <div className="absolute inset-0">
              {positions.second.map((pos, i) => (
                <DotAnimations
                  key={i}
                  style={{
                    left: pos.left,
                    top: pos.top,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <Image 
                src={'/avatars/perfil.png'} 
                width={256} 
                height={256}
                className="object-contain ml-4"
                alt="Avatar" 
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      <Rated/>
      <QuemSou/>
      <Projetos/>
      <Contact/>
      <Footer/>
    </>
  );
}
