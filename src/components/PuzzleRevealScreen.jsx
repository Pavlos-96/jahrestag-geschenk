import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { calculateGridSize } from './PuzzleBoard';
import { appConfig } from '../data/questions';

const REVEAL_DURATION_MS = 3000;

export default function PuzzleRevealScreen({
  revealedPieces,
  totalPieces,
  randomPieceOrder,
  onComplete,
}) {
  const { rows, cols, totalCells } = calculateGridSize(totalPieces);
  const lastRevealedPieceIndex = revealedPieces.length > 0
    ? randomPieceOrder[revealedPieces.length - 1]
    : null;

  useEffect(() => {
    const t = setTimeout(onComplete, REVEAL_DURATION_MS);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      key="puzzle_reveal"
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-50 to-pink-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className="text-center text-pink-600 font-medium mb-3 text-sm">
        Neues Puzzleteil enthüllt!
      </p>
      <div className="w-full max-w-[min(70vw,320px)] aspect-[2/3] relative rounded-2xl overflow-hidden shadow-2xl bg-pink-100">
        <div
          className="absolute inset-0 grid"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gap: '2px',
          }}
        >
          {Array.from({ length: totalCells }).map((_, index) => {
            if (index >= totalPieces) {
              return <div key={index} className="bg-pink-100" />;
            }

            const row = Math.floor(index / cols);
            const col = index % cols;
            const isRevealed = revealedPieces.includes(index);
            const isNewPiece = index === lastRevealedPieceIndex;

            return (
              <motion.div
                key={index}
                className="relative overflow-hidden"
                initial={false}
                animate={{
                  opacity: isRevealed ? 1 : 0.3,
                  scale: isNewPiece ? [1, 1.08, 1] : 1,
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  scale: isNewPiece ? { duration: 0.5, times: [0, 0.5, 1] } : {},
                }}
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Background image piece - nur anzeigen wenn enthüllt */}
                {isRevealed && (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${appConfig.puzzleImage})`,
                      backgroundSize: `${cols * 100}% ${rows * 100}%`,
                      backgroundPosition: `${cols > 1 ? col * (100 / (cols - 1)) : 0}% ${rows > 1 ? row * (100 / (rows - 1)) : 0}%`,
                    }}
                  />
                )}
                {!isRevealed && (
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                    <span className="text-lg opacity-50">?</span>
                  </div>
                )}
                {isNewPiece && (
                  <motion.div
                    className="absolute inset-0 ring-4 ring-pink-400 ring-offset-2 rounded-sm pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1] }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
      <motion.button
        type="button"
        onClick={onComplete}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full shadow-lg font-medium"
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Weiter
      </motion.button>
    </motion.div>
  );
}
