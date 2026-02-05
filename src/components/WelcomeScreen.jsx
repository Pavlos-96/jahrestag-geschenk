import { motion } from 'framer-motion';
import { appConfig } from '../data/questions';

// Floating hearts component
const FloatingHeart = ({ delay, left, size }) => (
  <motion.div
    className="absolute text-pink-400 pointer-events-none"
    style={{ left: `${left}%`, fontSize: `${size}rem` }}
    initial={{ y: '100vh', opacity: 0 }}
    animate={{
      y: '-100vh',
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  >
    ❤️
  </motion.div>
);

export default function WelcomeScreen({ onStart }) {
  const hearts = [
    { delay: 0, left: 10, size: 1.2 },
    { delay: 1, left: 25, size: 1.5 },
    { delay: 2, left: 50, size: 1.4 },
    { delay: 3, left: 75, size: 1.6 },
    { delay: 4, left: 90, size: 1.3 },
    { delay: 5, left: 35, size: 1.1 },
    { delay: 6, left: 65, size: 1.5 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Floating hearts background */}
      {hearts.map((heart, index) => (
        <FloatingHeart key={index} {...heart} />
      ))}

      {/* Main content */}
      <motion.div
        className="text-center z-10 w-full max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative hearts */}
        <motion.div
          className="text-5xl mb-5"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          💕
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl font-bold text-pink-600 mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {appConfig.appTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-600 mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Für dich, {appConfig.partnerName}
        </motion.p>

        <motion.p
          className="text-base text-gray-500 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {appConfig.appSubtitle}
        </motion.p>

        {/* Start Button - mobile optimized */}
        <motion.button
          onClick={onStart}
          className="w-full px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white text-lg
                     rounded-full shadow-lg active:shadow-md transition-all duration-300
                     active:from-pink-500 active:to-pink-600 font-medium"
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {appConfig.startButtonText} ✨
        </motion.button>

        {/* Decorative sparkles */}
        <motion.div
          className="mt-6 text-xl"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ✨ 💖 ✨
        </motion.div>
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        className="absolute bottom-8 text-center text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Mit viel Liebe gemacht 💝
      </motion.div>
    </div>
  );
}
