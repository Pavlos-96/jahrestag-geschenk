import { useState } from 'react';
import { appConfig } from '../data/questions';

// Export for reuse in PuzzleRevealScreen
export function calculateGridSize(totalPieces) {
  // 1. Versuche zuerst, ein Raster ohne leere Felder zu finden (rows * cols === totalPieces)
  //    Bevorzuge Portrait-Format (mehr Rows als Cols) für Smartphone
  let bestExact = null;

  for (let cols = 1; cols <= Math.sqrt(totalPieces); cols++) {
    if (totalPieces % cols === 0) {
      const rows = totalPieces / cols;
      const diff = Math.abs(rows - cols);
      const hasAtLeastTwo = rows > 1 && cols > 1;

      if (!bestExact || diff < bestExact.diff || (!bestExact.hasAtLeastTwo && hasAtLeastTwo)) {
        bestExact = { rows, cols, diff, hasAtLeastTwo };
      }
    }
  }

  // Wenn es eine sinnvolle exakte Aufteilung gibt (z.B. 7x4 bei 28 Teilen), nutze sie.
  if (bestExact && bestExact.hasAtLeastTwo) {
    return { rows: bestExact.rows, cols: bestExact.cols, totalCells: totalPieces };
  }

  // 2. Fallback: Portrait-orientiertes Raster,
  //    auch wenn dadurch einige Zellen leer bleiben.
  const sqrt = Math.sqrt(totalPieces);
  const cols = Math.ceil(sqrt);
  const rows = Math.ceil(totalPieces / cols);

  return { rows, cols, totalCells: rows * cols };
}

// Innere Puzzle-Grid Komponente (wird sowohl normal als auch im Modal verwendet)
function PuzzleGrid({ rows, cols, totalCells, totalPieces, revealedPieces }) {
  return (
    <>
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
          if (index >= totalPieces) {
            return <div key={index} className="bg-pink-100" />;
          }

          const row = Math.floor(index / cols);
          const col = index % cols;
          const isRevealed = revealedPieces.includes(index);

          return (
            <div
              key={index}
              className="relative overflow-hidden transition-opacity duration-300"
              style={{ opacity: isRevealed ? 1 : 0.3 }}
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
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                  <span className="text-lg opacity-50">?</span>
                </div>
              )}
            </div>
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
    </>
  );
}

export default function PuzzleBoard({ revealedPieces, totalPieces, compact = false }) {
  const [expanded, setExpanded] = useState(false);
  const { rows, cols, totalCells } = calculateGridSize(totalPieces);

  return (
    <>
      <div className={compact ? 'w-full max-w-[120px] shrink-0 mb-0' : 'w-full max-w-[200px] mx-auto mb-4'}>
        <div
          className={`aspect-[2/3] relative overflow-hidden shadow-lg bg-pink-100 ${compact ? 'cursor-pointer' : 'rounded-xl'}`}
          onClick={compact ? () => setExpanded(true) : undefined}
        >
          <PuzzleGrid
            rows={rows}
            cols={cols}
            totalCells={totalCells}
            totalPieces={totalPieces}
            revealedPieces={revealedPieces}
          />
        </div>

        {!compact && (
          <p className="text-center text-gray-500 mt-2 text-xs">
            {revealedPieces.length} von {totalPieces} Teilen enthüllt
          </p>
        )}
        {compact && (
          <p className="text-center text-gray-500 mt-0.5 text-[10px]">
            {revealedPieces.length}/{totalPieces}
          </p>
        )}
      </div>

      {/* Expanded Modal */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setExpanded(false)}
        >
          <div
            className="w-full max-w-[min(80vw,350px)] aspect-[2/3] relative rounded-2xl overflow-hidden shadow-2xl bg-pink-100"
            onClick={(e) => e.stopPropagation()}
          >
            <PuzzleGrid
              rows={rows}
              cols={cols}
              totalCells={totalCells}
              totalPieces={totalPieces}
              revealedPieces={revealedPieces}
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setExpanded(false)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
