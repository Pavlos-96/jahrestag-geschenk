import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
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
  feedbackImage,
  onContinue,
  isLastQuestion
}) {
  // Bei falschen Antworten: erst GIF, dann Auflösungsbild
  const [showingSolution, setShowingSolution] = useState(false);
  const [wrongGif] = useState(getRandomWrongGif);

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

  // Reset wenn sich die Frage ändert
  useEffect(() => {
    setShowingSolution(false);
  }, [feedback]);

  const handleButtonClick = () => {
    // Bei falschen Antworten: erst zur Lösung, dann weiter
    if (!isCorrect && !showingSolution && feedbackImage) {
      setShowingSolution(true);
    } else {
      onContinue();
    }
  };

  // Bestimme was angezeigt wird
  const showingGif = !isCorrect && !showingSolution;
  const showingImage = isCorrect || showingSolution;

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
      <AnimatePresence mode="wait">
        <motion.div
          key={showingSolution ? 'solution' : 'initial'}
          className={`
            relative w-full max-w-sm rounded-2xl p-6 shadow-2xl text-center
            ${isCorrect || showingSolution
              ? 'bg-gradient-to-br from-green-50 to-pink-50'
              : 'bg-gradient-to-br from-orange-50 to-pink-50'}
          `}
          initial={{ scale: 0.8, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: -50, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
        >
          {/* Icon */}
          <motion.div
            className="text-5xl mb-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            {isCorrect ? '🎉' : (showingSolution ? '💡' : '😅')}
          </motion.div>

          {/* Title */}
          <motion.h2
            className={`text-2xl font-bold mb-3 ${
              isCorrect || showingSolution ? 'text-green-600' : 'text-orange-500'
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {isCorrect
              ? 'Richtig!'
              : (showingSolution ? 'Die richtige Antwort:' : 'Knapp daneben!')}
          </motion.h2>

          {/* Feedback text */}
          <motion.p
            className="text-gray-600 text-base mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {isCorrect
              ? feedback
              : (showingSolution ? feedback : 'Macht nichts, Schatz!')}
          </motion.p>

          {/* Image or GIF */}
          <motion.div
            className="mb-5 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            {showingGif ? (
              <img
                src={wrongGif}
                alt="Feedback"
                className="w-full h-40 object-cover"
              />
            ) : feedbackImage ? (
              <img
                src={feedbackImage}
                alt="Auflösung"
                className="w-full h-56 object-cover"
              />
            ) : null}
          </motion.div>

          {/* Continue button - mobile optimized */}
          <motion.button
            onClick={handleButtonClick}
            className="w-full px-6 py-3.5 bg-gradient-to-r from-pink-400 to-pink-500 text-white
                       rounded-full shadow-lg active:shadow-md transition-all duration-300
                       active:from-pink-500 active:to-pink-600 font-medium text-base"
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {!isCorrect && !showingSolution && feedbackImage
              ? 'Auflösung zeigen →'
              : (isLastQuestion ? 'Überraschung enthüllen ✨' : 'Weiter →')}
          </motion.button>

          {/* Decorative elements */}
          {(isCorrect || showingSolution) && (
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
      </AnimatePresence>
    </motion.div>
  );
}
