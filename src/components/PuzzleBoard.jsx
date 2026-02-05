import { motion } from 'framer-motion';
import { appConfig } from '../data/questions';

export default function PuzzleBoard({ revealedPieces, totalPieces = 9 }) {
  // Create 3x3 grid positions
  const gridSize = Math.sqrt(totalPieces);
  const pieceWidth = 100 / gridSize;
  const pieceHeight = 100 / gridSize;

  return (
    <motion.div
      className="w-full max-w-[200px] mx-auto mb-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg bg-pink-100">
        {/* Grid of puzzle pieces */}
        <div
          className="absolute inset-0 grid"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize}, 1fr)`,
            gap: '1px',
          }}
        >
          {Array.from({ length: totalPieces }).map((_, index) => {
            const row = Math.floor(index / gridSize);
            const col = index % gridSize;
            const isRevealed = revealedPieces.includes(index);

            return (
              <motion.div
                key={index}
                className="relative overflow-hidden"
                initial={false}
                animate={{
                  opacity: isRevealed ? 1 : 0.3,
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Background image piece */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${appConfig.puzzleImage})`,
                    backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
                    backgroundPosition: `${col * (100 / (gridSize - 1))}% ${row * (100 / (gridSize - 1))}%`,
                    filter: isRevealed ? 'none' : 'blur(8px) grayscale(100%)',
                  }}
                />

                {/* Overlay for unrevealed pieces */}
                {!isRevealed && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-300
                               flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                  >
                    <span className="text-lg opacity-50">?</span>
                  </motion.div>
                )}

                {/* Reveal animation */}
                {isRevealed && (
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: `${pieceWidth}% ${pieceHeight}%`,
          }}
        />
      </div>

      {/* Progress text - smaller for mobile */}
      <motion.p
        className="text-center text-gray-500 mt-2 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {revealedPieces.length} von {totalPieces} Teilen enthüllt
      </motion.p>
    </motion.div>
  );
}
