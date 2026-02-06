import { motion } from 'framer-motion';

export default function QuizCard({
  question,
  currentQuestion,
  totalQuestions,
  onAnswer,
  disabled,
  showQuestionImage = true,
}) {
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, x: -50 }
  };

  const answerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto px-4 py-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Progress indicator - mobile optimized */}
      <div className="mb-4">
        <div className="text-center text-sm text-gray-500 mb-2">
          <span>Frage {currentQuestion} von {totalQuestions}</span>
        </div>
        <div className="w-full h-1.5 bg-pink-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-400 to-pink-500"
            initial={{ width: 0 }}
            animate={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question Image - if present (ausgeblendet wenn App es in der oberen Zeile zeigt) */}
      {showQuestionImage && question.questionImage && (
        <motion.div
          className="mb-4 rounded-2xl overflow-hidden shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={question.questionImage}
            alt="Frage-Bild"
            className="w-full max-h-[60vh] object-contain image-crop-vertical"
          />
        </motion.div>
      )}

      {/* Question - mobile optimized, no speech bubble */}
      <motion.div
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-5"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: (showQuestionImage && question.questionImage) ? 0.1 : 0 }}
      >
        <h2
          className="text-xl text-center text-gray-700 font-medium leading-relaxed"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {question.question}
        </h2>
      </motion.div>

      {/* Abstand zwischen Frage und Antwort A – in index.css: --spacer-question-answers */}
      <div className="question-answers-spacer" aria-hidden="true" />

      {/* Answers - mobile optimized, single column */}
      <div className="flex flex-col gap-3">
        {question.answers.map((answer, index) => (
          <motion.button
            key={answer.id}
            variants={answerVariants}
            onClick={() => !disabled && onAnswer(answer)}
            disabled={disabled}
            className={`
              p-4 rounded-xl text-left transition-all duration-300
              bg-white/90 backdrop-blur-sm shadow-md
              active:scale-95 active:bg-pink-50
              disabled:opacity-50 disabled:cursor-not-allowed
              border-2 border-transparent active:border-pink-200
              ${disabled ? '' : 'cursor-pointer'}
            `}
            whileTap={!disabled ? { scale: 0.97 } : {}}
          >
            <div className="flex items-center gap-3">
              {/* Answer letter */}
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-200 to-pink-300
                            flex items-center justify-center text-pink-700 font-bold shrink-0 text-sm">
                {String.fromCharCode(65 + index)}
              </div>

              {/* Answer content */}
              <div className="flex-1">
                {answer.image ? (
                  <div className="flex items-center gap-3">
                    <img
                      src={answer.image}
                      alt={answer.text}
                      className="w-12 h-12 object-contain rounded-lg bg-black/5"
                    />
                    <span className="text-gray-700 text-base">{answer.text}</span>
                  </div>
                ) : answer.gif ? (
                  <div className="flex items-center gap-3">
                    <img
                      src={answer.gif}
                      alt={answer.text}
                      className="w-12 h-12 object-contain rounded-lg bg-black/5"
                    />
                    <span className="text-gray-700 text-base">{answer.text}</span>
                  </div>
                ) : (
                  <span className="text-gray-700 text-base">{answer.text}</span>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
