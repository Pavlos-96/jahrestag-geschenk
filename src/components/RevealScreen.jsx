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
      className="min-h-screen flex flex-col items-center justify-between p-6 relative overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Top Section - Text */}
      <motion.div
        className="w-full max-w-sm text-center z-10 pt-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
      >
        {/* Celebration icon */}
        <motion.div
          className="text-5xl mb-3"
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
        >
          {appConfig.revealTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-xl text-gray-700"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {appConfig.revealSubtitle}
        </motion.h2>
      </motion.div>

      {/* Middle Section - Fullscreen Image */}
      <motion.div
        className="w-full max-w-md flex-1 flex items-center justify-center z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', damping: 20 }}
      >
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={appConfig.puzzleImage}
            alt="Überraschung"
            className="w-full h-auto max-h-[60vh] object-cover"
          />
        </div>
      </motion.div>

      {/* Bottom Section - Message & Actions */}
      <motion.div
        className="w-full max-w-sm text-center z-10 pb-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        {/* Message */}
        <motion.p
          className="text-base text-gray-700 mb-4 px-2 font-medium"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {appConfig.revealMessage}
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center gap-3 text-2xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <span>🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
          <span>💕</span>
          <span>✈️</span>
          <span>💕</span>
          <span>🏰</span>
        </motion.div>

        {/* Score - compact */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-xl p-3 mb-4 shadow-lg inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3 }}
        >
          <p className="text-gray-500 text-xs mb-0.5">Du hast</p>
          <p className="text-2xl font-bold text-pink-500">
            {correctAnswers} von {totalQuestions}
          </p>
          <p className="text-gray-500 text-xs">richtig beantwortet!</p>
        </motion.div>

        {/* Restart button */}
        <motion.button
          onClick={onRestart}
          className="w-full px-6 py-3.5 bg-gradient-to-r from-pink-400 to-pink-500 text-white
                     rounded-full shadow-lg active:shadow-md transition-all duration-300
                     active:from-pink-500 active:to-pink-600 font-medium"
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          Nochmal spielen 🔄
        </motion.button>

        {/* Love message */}
        <motion.p
          className="mt-4 text-pink-400 text-base"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          Ich liebe dich! 💖
        </motion.p>
      </motion.div>

      {/* Decorative sparkles */}
      <motion.span
        className="absolute top-10 left-6 text-2xl"
        animate={{ rotate: [0, 20, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ✨
      </motion.span>
      <motion.span
        className="absolute top-10 right-6 text-2xl"
        animate={{ rotate: [0, -20, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        💖
      </motion.span>
    </motion.div>
  );
}
