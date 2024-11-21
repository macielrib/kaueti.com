'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const CardGradient = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
  </div>
);

const ProductInfo = ({ title, price, description }: { 
  title: string, 
  price: string, 
  description: string 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex-1"
  >
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <h3 className="text-white font-poppins text-sm">{title}</h3>
        <span className="text-[#ABABAB] font-poppins text-sm">{price}</span>
      </div>
      <p className="text-[#ABABAB] text-xs font-dmsans leading-relaxed pr-4">{description}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <section className="bg-black py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="w-full bg-[#0D0D0D] border border-[#292929]/50 rounded-[28px] p-5 md:p-6
                     relative overflow-hidden shadow-2xl shadow-black/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CardGradient />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16">
            {/* Conteúdo - Agora centralizado */}
            <div className="flex-1 space-y-6">
              <motion.h2 
                className="text-4xl md:text-5xl font-medium font-dmsans text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Como posso te <span className="font-instrument italic">ajudar?</span>
              </motion.h2>

              {/* Products Info - Side by side */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <ProductInfo
                  title="Site Institucional"
                  price="A partir de R$1.000"
                  description="Quer um site profissional e otimizado para converter visitantes em clientes? Desenvolvimento personalizado e de alta performance."
                />
                <ProductInfo
                  title="E-commerce Completo" 
                  price="A partir de R$1.999"
                  description="Precisa de uma loja virtual moderna e funcional? Desenvolvimento sob medida com foco em vendas e experiência do usuário."
                />
              </div>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-2"
              >
                <Link href="https://wa.me/5551985410789" className="block">
                  <motion.button
                    className="w-full px-6 py-1.5 bg-transparent text-white rounded-xl 
                              relative overflow-hidden group font-medium text-sm
                              border border-white/10 hover:bg-white/5 font-dmsans transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Entre em Contato
                    <FaArrowRight className="inline-block ml-2 group-hover:translate-x-0.5 
                                           transition-transform" size={12} />
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Avatar com shadow-mask correto */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
