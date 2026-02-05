import { motion } from 'framer-motion';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

// GIFs für falsche Antworten (Enttäuschung/Tröstend)
const wrongAnswerGifs = [
  "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
  "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",
  "https://media.giphy.com/media/3o7TKwmnDgQb5jemjK/giphy.gif",
  "https://media.giphy.com/media/l2JhtKtDWYNKdRpoA/giphy.gif",
  "https://media.giphy.com/media/3og0INyCmHlNylks9O/giphy.gif",
];

// Zufälliges GIF für falsche Antwort
const getRandomWrongGif = () => {
  return wrongAnswerGifs[Math.floor(Math.random() * wrongAnswerGifs.length)];
};

export default function AnswerFeedback({
  isCorrect,
  feedback,
  feedbackGif,
  onContinue,
  isLastQuestion
}) {
  const wrongGif = getRandomWrongGif();

  useEffect(() => {
    if (isCorrect) {
      // Small confetti burst for correct answer
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FFB6C1', '#FF69B4', '#FFD700', '#FFC0CB']
      });
    }
  }, [isCorrect]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Content - mobile optimized */}
      <motion.div
        className={`
          relative w-full max-w-sm rounded-2xl p-6 shadow-2xl text-center
          ${isCorrect
            ? 'bg-gradient-to-br from-green-50 to-pink-50'
            : 'bg-gradient-to-br from-orange-50 to-pink-50'}
        `}
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        {/* Icon */}
        <motion.div
          className="text-5xl mb-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
        >
          {isCorrect ? '🎉' : '😅'}
        </motion.div>

        {/* Title */}
        <motion.h2
          className={`text-2xl font-bold mb-3 ${isCorrect ? 'text-green-600' : 'text-orange-500'}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {isCorrect ? 'Richtig!' : 'Knapp daneben!'}
        </motion.h2>

        {/* Feedback text */}
        <motion.p
          className="text-gray-600 text-base mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {isCorrect ? feedback : 'Macht nichts, Schatz! Weiter geht\'s!'}
        </motion.p>

        {/* GIF - now shows for both correct AND wrong answers */}
        <motion.div
          className="mb-5 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src={isCorrect ? feedbackGif : wrongGif}
            alt="Feedback"
            className="w-full h-40 object-cover"
          />
        </motion.div>

        {/* Continue button - mobile optimized */}
        <motion.button
          onClick={onContinue}
          className="w-full px-6 py-3.5 bg-gradient-to-r from-pink-400 to-pink-500 text-white
                     rounded-full shadow-lg active:shadow-md transition-all duration-300
                     active:from-pink-500 active:to-pink-600 font-medium text-base"
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {isLastQuestion ? 'Überraschung enthüllen ✨' : 'Weiter →'}
        </motion.button>

        {/* Decorative elements */}
        {isCorrect && (
          <>
            <motion.span
              className="absolute top-3 left-3 text-xl"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
            <motion.span
              className="absolute top-3 right-3 text-xl"
              animate={{ rotate: [0, -20, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              💖
            </motion.span>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
