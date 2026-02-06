import { useState, useCallback, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import QuizCard from './components/QuizCard';
import AnswerFeedback from './components/AnswerFeedback';
import PuzzleBoard from './components/PuzzleBoard';
import PuzzleRevealScreen from './components/PuzzleRevealScreen';
import RevealScreen from './components/RevealScreen';
import { questions } from './data/questions';

// Game states
const STATES = {
  WELCOME: 'welcome',
  QUIZ: 'quiz',
  FEEDBACK: 'feedback',
  PUZZLE_REVEAL: 'puzzle_reveal',
  REVEAL: 'reveal',
};

// Create random order for puzzle pieces
const createRandomOrder = (totalPieces) => {
  const indices = Array.from({ length: totalPieces }, (_, i) => i);
  // Fisher-Yates shuffle
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
};

function App() {
  const [gameState, setGameState] = useState(STATES.WELCOME);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [revealedPieces, setRevealedPieces] = useState([]);
  const [lastAnswer, setLastAnswer] = useState(null);

  // Create random order once at the start
  const randomPieceOrder = useMemo(() => createRandomOrder(questions.length), []);

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
      // Reveal next puzzle piece in random order
      setRevealedPieces((prev) => {
        const nextIndex = randomPieceOrder[prev.length];
        return [...prev, nextIndex];
      });
    }

    setGameState(STATES.FEEDBACK);
  }, [currentQuestion, randomPieceOrder]);

  const handleContinue = useCallback(() => {
    if (isLastQuestion) {
      setGameState(STATES.REVEAL);
    } else if (lastAnswer?.isCorrect) {
      setGameState(STATES.PUZZLE_REVEAL);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setGameState(STATES.QUIZ);
    }
  }, [isLastQuestion, lastAnswer?.isCorrect]);

  const handleRevealComplete = useCallback(() => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setGameState(STATES.QUIZ);
  }, []);

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
          <div key="quiz" className="min-h-screen flex flex-col items-center justify-center p-4 w-full max-w-2xl mx-auto">
            {/* Fragebild mit Puzzle als Overlay oben rechts */}
            {currentQuestion.questionImage && (
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4 w-full">
                <img
                  src={currentQuestion.questionImage}
                  alt="Frage-Bild"
                  className="w-full max-h-[50vh] object-contain image-crop-vertical"
                />
                {/* Puzzle als Overlay oben rechts */}
                <div className="absolute top-2 right-2">
                  <PuzzleBoard
                    compact
                    revealedPieces={revealedPieces}
                    totalPieces={questions.length}
                  />
                </div>
              </div>
            )}

            {/* Falls kein Fragebild, Puzzle separat anzeigen */}
            {!currentQuestion.questionImage && (
              <div className="mb-4">
                <PuzzleBoard
                  compact
                  revealedPieces={revealedPieces}
                  totalPieces={questions.length}
                />
              </div>
            )}

            {/* Frage-Text + Antworten */}
            <QuizCard
              question={currentQuestion}
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
              disabled={false}
              showQuestionImage={false}
            />
          </div>
        )}

        {/* Enthüllungs-Animation nach richtiger Antwort, vor nächster Frage */}
        {gameState === STATES.PUZZLE_REVEAL && (
          <PuzzleRevealScreen
            key="puzzle_reveal"
            revealedPieces={revealedPieces}
            totalPieces={questions.length}
            randomPieceOrder={randomPieceOrder}
            onComplete={handleRevealComplete}
          />
        )}

        {/* Feedback */}
        {gameState === STATES.FEEDBACK && (
          <div key="feedback" className="min-h-screen flex flex-col items-center justify-center p-4">
            {/* Puzzle im Hintergrund – immer anzeigen */}
            <PuzzleBoard
              revealedPieces={revealedPieces}
              totalPieces={questions.length}
            />

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
