// Quiz-Fragen für das Jahrestag-Quiz
// HIER KANNST DU DEINE EIGENEN FRAGEN EINTRAGEN!
//
// Jede Frage hat:
// - question: Die Frage (Text)
// - questionImage: (OPTIONAL) Pfad zu einem Bild für die Frage, z.B. "/images/foto.jpg"
//                  Bei Bild-Fragen wird das Puzzle ausgeblendet für mehr Platz
// - answers: 3 Antwortmöglichkeiten
//            WICHTIG: Mehrere Antworten können correct: true haben!
// - correctFeedback: Text der bei richtiger Antwort angezeigt wird
// - feedbackImage: (OPTIONAL) Auflösungsbild - wird nach der Antwort gezeigt
//                  Bei RICHTIG: direkt das Bild
//                  Bei FALSCH: erst GIF, dann das Bild als "richtige Antwort"
//
// FLOW:
// - Richtige Antwort: "Richtig!" + feedbackImage + correctFeedback
// - Falsche Antwort:  "Knapp daneben!" + GIF → Klick → feedbackImage + "Die Antwort war..."
//
// BEISPIEL:
// {
//   id: 1,
//   question: "Wo war unser erstes Date?",
//   answers: [...],
//   correctFeedback: "Genau! Das war so ein schöner Abend...",
//   feedbackImage: "/images/erstes-date.jpg"  // Foto von dem Ort
// }

export const questions = [
  {
    id: 1,
    question: "Wann hatten wir diesen schönen Tag mit Miri und Sina?",
    questionImage: "/images/1-Frage.jpeg",
    answers: [
      { id: "a", text: "April", correct: true },
      { id: "b", text: "Mai", correct: false },
      { id: "c", text: "Juni", correct: false }
    ],
    correctFeedback: "Genau! Das war der Anfang von allem...",
    feedbackImage: "/images/1-Antwort.jpeg"  // TODO: Dein Bild hier
  },
  {
    id: 2,
    question: "Was war unser erstes gemeinsames Essen?",
    answers: [
      { id: "a", text: "Pizza", correct: true },
      { id: "b", text: "Sushi", correct: false },
      { id: "c", text: "Burger", correct: false }
    ],
    correctFeedback: "Mmh, lecker! Das war so ein schöner Abend.",
    feedbackImage: "/images/erstes-essen.jpg"  // TODO: Dein Bild hier
  },
  {
    id: 3,
    question: "Welchen Film haben wir bei unserem ersten Filmabend geschaut?",
    answers: [
      { id: "a", text: "Titanic", correct: false },
      { id: "b", text: "The Notebook", correct: false },
      { id: "c", text: "Inception", correct: true }
    ],
    correctFeedback: "Ein Traum in einem Traum... wie unsere Liebe!",
    feedbackImage: "/images/filmabend.jpg"  // TODO: Dein Bild hier
  },
  {
    id: 4,
    question: "Was ist mein Lieblingsessen?",
    answers: [
      { id: "a", text: "Lasagne", correct: true },
      { id: "b", text: "Schnitzel", correct: false },
      { id: "c", text: "Curry", correct: false }
    ],
    correctFeedback: "Du kennst mich so gut!",
    feedbackImage: "/images/lieblingsessen.jpg"  // TODO: Dein Bild hier
  },
  {
    id: 5,
    question: "Welche Jahreszeit lieben wir am meisten zusammen?",
    answers: [
      { id: "a", text: "Frühling", correct: false },
      { id: "b", text: "Sommer", correct: false },
      { id: "c", text: "Herbst", correct: true }
    ],
    correctFeedback: "Die bunten Blätter, warmer Kakao und Kuschelzeit!",
    feedbackImage: "/images/herbst.jpg"  // TODO: Dein Bild hier
  },
  {
    id: 6,
    question: "Was machen wir am liebsten am Wochenende?",
    answers: [
      { id: "a", text: "Ausschlafen & Frühstücken", correct: true },
      { id: "b", text: "Wandern gehen", correct: false },
      { id: "c", text: "Shoppen", correct: false }
    ],
    correctFeedback: "Die beste Art, den Tag zu beginnen - zusammen!",
    feedbackImage: "/images/wochenende.jpg"  // TODO: Dein Bild hier
  },
  {
    id: 7,
    question: "Was ist unser Lieblingslied?",
    answers: [
      { id: "a", text: "Perfect - Ed Sheeran", correct: false },
      { id: "b", text: "All of Me - John Legend", correct: true },
      { id: "c", text: "Thinking Out Loud", correct: false }
    ],
    correctFeedback: "All of me loves all of you...",
    feedbackImage: "/images/lieblingslied.jpg"  // TODO: Dein Bild hier
  },
  {
    id: 8,
    question: "Welches Tier wäre ich, wenn ich eins wäre?",
    answers: [
      { id: "a", text: "Ein Bär", correct: false },
      { id: "b", text: "Ein Hund", correct: true },
      { id: "c", text: "Eine Katze", correct: false }
    ],
    correctFeedback: "Loyal, verspielt und immer an deiner Seite!",
    feedbackImage: "/images/tier.jpg"  // TODO: Dein Bild hier
  },
  {
    id: 9,
    question: "Wohin würde ich am liebsten mit dir reisen?",
    answers: [
      { id: "a", text: "Paris", correct: false },
      { id: "b", text: "Edinburgh", correct: true },
      { id: "c", text: "Rom", correct: false }
    ],
    correctFeedback: "Rate mal wohin die Reise geht... 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    feedbackImage: "/images/reise.jpg"  // TODO: Dein Bild hier
  },
  {
    id: 10,
    question: "Wohin würde ich am liebsten mit dir reisen?",
    answers: [
      { id: "a", text: "Paris", correct: false },
      { id: "b", text: "Edinburgh", correct: true },
      { id: "c", text: "Rom", correct: false }
    ],
    correctFeedback: "Rate mal wohin die Reise geht... 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    feedbackImage: "/images/reise.jpg"  // TODO: Dein Bild hier
  }
];

// Konfiguration für die App
export const appConfig = {
  // Name deiner Freundin (wird im Welcome Screen angezeigt)
  partnerName: "Schatz",

  // Titel der App
  appTitle: "Unser Jahrestag Quiz",

  // Untertitel
  appSubtitle: "Wie gut kennst du uns?",

  // Text für den Start-Button
  startButtonText: "Quiz starten",

  // Text nach dem Quiz
  revealTitle: "Überraschung!",
  revealSubtitle: "Wir fahren nach Edinburgh!",
  revealMessage: "Pack deine Koffer, Schatz! Ein unvergessliches Abenteuer wartet auf uns in Schottland!",

  // Das Bild das enthüllt wird (lege es in src/assets/images/ ab)
  // Kann Edinburgh sein oder ein Bild von euch beiden
  puzzleImage: "/edinburgh.jpg"
};
