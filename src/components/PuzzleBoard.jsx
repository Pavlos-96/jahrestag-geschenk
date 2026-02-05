import { motion } from 'framer-motion';
import { appConfig } from '../data/questions';

// Calculate optimal grid size for any number of questions
const calculateGridSize = (totalPieces) => {
  // Try to make it as square as possible
  const sqrt = Math.sqrt(totalPieces);
  const rows = Math.ceil(sqrt);
  const cols = Math.ceil(totalPieces / rows);

  return { rows, cols, totalCells: rows * cols };
};

export default function PuzzleBoard({ revealedPieces, totalPieces }) {
  const { rows, cols, totalCells } = calculateGridSize(totalPieces);

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
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gap: '1px',
          }}
        >
          {Array.from({ length: totalCells }).map((_, index) => {
            // Skip if this cell is beyond our actual pieces
            if (index >= totalPieces) {
              return <div key={index} className="bg-pink-100" />;
            }

            const row = Math.floor(index / cols);
            const col = index % cols;
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
                    backgroundSize: `${cols * 100}% ${rows * 100}%`,
                    backgroundPosition: `${cols > 1 ? col * (100 / (cols - 1)) : 0}% ${rows > 1 ? row * (100 / (rows - 1)) : 0}%`,
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
            backgroundSize: `${100 / cols}% ${100 / rows}%`,
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
