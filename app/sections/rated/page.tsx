'use client'
import { motion } from 'framer-motion'
import { FaGoogle, FaApple, FaMicrosoft, FaAmazon } from 'react-icons/fa'
import { SiNetflix } from 'react-icons/si'

const logos = [
  {
    id: 1,
    name: 'Google',
    icon: <FaGoogle size={24} />
  },
  {
    id: 2,
    name: 'Microsoft', 
    icon: <FaMicrosoft size={24} />
  },
  {
    id: 3,
    name: 'Apple',
    icon: <FaApple size={24} />
  },
  {
    id: 4,
    name: 'Amazon',
    icon: <FaAmazon size={24} />
  },
  {
    id: 5,
    name: 'Netflix',
    icon: <SiNetflix size={24} />
  }
]

const Rated = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="h-full w-full bg-black py-8"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm font-dmsans font-normal text-[#ABABAB] text-center mb-6"
      >
        Trabalhando com os melhores dos melhores.
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative overflow-hidden max-w-[400px] mx-auto"
      >
        {/* Left shadow overlay */}
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10" />
        
        {/* Right shadow overlay */}
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10" />
        
        <motion.div 
          className="flex gap-4 py-4"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
            delay: 0.6
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[60px]"
            >
              <div className="text-[#ABABAB] hover:text-white/80 transition-colors">
                {logo.icon}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Rated