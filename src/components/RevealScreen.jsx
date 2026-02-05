import { motion } from 'framer-motion';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { appConfig } from '../data/questions';

export default function RevealScreen({ correctAnswers, totalQuestions, onRestart }) {
  useEffect(() => {
    // Epic confetti celebration
    const duration = 4000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // Confetti from left
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2
        },
        colors: ['#FFB6C1', '#FF69B4', '#FFD700', '#FFC0CB', '#FF1493']
      });

      // Confetti from right
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2
        },
        colors: ['#FFB6C1', '#FF69B4', '#FFD700', '#FFC0CB', '#FF1493']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-5 py-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Background hearts */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-300 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${0.8 + Math.random() * 1.2}rem`,
          }}
          animate={{
            y: [-15, 15],
            rotate: [-10, 10],
            opacity: [0.3, 0.6],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          ❤️
        </motion.span>
      ))}

      <motion.div
        className="w-full max-w-sm text-center z-10"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        {/* Celebration icon */}
        <motion.div
          className="text-6xl mb-4"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          🎉
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl font-bold text-pink-600 mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {appConfig.revealTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-xl text-gray-700 mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {appConfig.revealSubtitle}
        </motion.h2>

        {/* The revealed image - mobile optimized */}
        <motion.div
          className="mb-4 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: 'spring' }}
        >
          <img
            src={appConfig.puzzleImage}
            alt="Überraschung"
            className="w-full h-48 object-cover"
          />
        </motion.div>

        {/* Message */}
        <motion.p
          className="text-base text-gray-600 mb-4 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {appConfig.revealMessage}
        </motion.p>

        {/* Score - compact for mobile */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-xl p-3 mb-4 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <p className="text-gray-500 text-xs mb-0.5">Du hast</p>
          <p className="text-2xl font-bold text-pink-500">
            {correctAnswers} von {totalQuestions}
          </p>
          <p className="text-gray-500 text-xs">Fragen richtig beantwortet!</p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center gap-3 text-2xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <span>🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
          <span>💕</span>
          <span>✈️</span>
          <span>💕</span>
          <span>🏰</span>
        </motion.div>

        {/* Restart button - mobile optimized */}
        <motion.button
          onClick={onRestart}
          className="w-full px-6 py-3 bg-white/80 text-pink-500 rounded-full shadow-lg
                     active:shadow-md transition-all duration-300 active:bg-white font-medium"
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          Nochmal spielen 🔄
        </motion.button>
      </motion.div>

      {/* Love message at bottom */}
      <motion.p
        className="absolute bottom-6 text-center text-pink-400 text-base"
        style={{ fontFamily: "'Playfair Display', serif" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Ich liebe dich! 💖
      </motion.p>
    </motion.div>
  );
}
