import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import QuizCard from './components/QuizCard';
import AnswerFeedback from './components/AnswerFeedback';
import PuzzleBoard from './components/PuzzleBoard';
import RevealScreen from './components/RevealScreen';
import { questions } from './data/questions';

// Game states
const STATES = {
  WELCOME: 'welcome',
  QUIZ: 'quiz',
  FEEDBACK: 'feedback',
  REVEAL: 'reveal',
};

function App() {
  const [gameState, setGameState] = useState(STATES.WELCOME);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [revealedPieces, setRevealedPieces] = useState([]);
  const [lastAnswer, setLastAnswer] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleStart = useCallback(() => {
    setGameState(STATES.QUIZ);
  }, []);

  const handleAnswer = useCallback((answer) => {
    setLastAnswer({
      isCorrect: answer.correct,
      feedback: currentQuestion.correctFeedback,
      feedbackImage: currentQuestion.feedbackImage,
      hadImage: !!currentQuestion.questionImage,
    });

    if (answer.correct) {
      setCorrectAnswers((prev) => prev + 1);
      // Reveal a puzzle piece (in order)
      setRevealedPieces((prev) => [...prev, prev.length]);
    }

    setGameState(STATES.FEEDBACK);
  }, [currentQuestion]);

  const handleContinue = useCallback(() => {
    if (isLastQuestion) {
      setGameState(STATES.REVEAL);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setGameState(STATES.QUIZ);
    }
  }, [isLastQuestion]);

  const handleRestart = useCallback(() => {
    setGameState(STATES.WELCOME);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setRevealedPieces([]);
    setLastAnswer(null);
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {/* Welcome Screen */}
        {gameState === STATES.WELCOME && (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        )}

        {/* Quiz */}
        {gameState === STATES.QUIZ && (
          <div key="quiz" className="min-h-screen flex flex-col items-center justify-center p-4">
            {/* Puzzle preview - hidden when question has an image */}
            {!currentQuestion.questionImage && (
              <PuzzleBoard
                revealedPieces={revealedPieces}
                totalPieces={questions.length}
              />
            )}

            {/* Question */}
            <QuizCard
              question={currentQuestion}
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
              disabled={false}
            />
          </div>
        )}

        {/* Feedback */}
        {gameState === STATES.FEEDBACK && (
          <div key="feedback" className="min-h-screen flex flex-col items-center justify-center p-4">
            {/* Show puzzle in background - hidden when question had an image */}
            {!lastAnswer?.hadImage && (
              <PuzzleBoard
                revealedPieces={revealedPieces}
                totalPieces={questions.length}
              />
            )}

            {/* Feedback overlay */}
            <AnswerFeedback
              isCorrect={lastAnswer?.isCorrect}
              feedback={lastAnswer?.feedback}
              feedbackImage={lastAnswer?.feedbackImage}
              onContinue={handleContinue}
              isLastQuestion={isLastQuestion}
            />
          </div>
        )}

        {/* Reveal Screen */}
        {gameState === STATES.REVEAL && (
          <RevealScreen
            key="reveal"
            correctAnswers={correctAnswers}
            totalQuestions={questions.length}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
