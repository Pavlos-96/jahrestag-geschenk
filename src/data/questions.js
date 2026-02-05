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
    feedbackImage: "/images/1-Antwort.jpeg"
  },
  {
    id: 2,
    question: "Was war unser erstes gemeinsames Essen?",
    questionImage: "/images/2-Frage.jpeg",
    answers: [
      { id: "a", text: "Pizza", correct: true },
      { id: "b", text: "Sushi", correct: false },
      { id: "c", text: "Burger", correct: false }
    ],
    correctFeedback: "Mmh, lecker! Das war so ein schöner Abend.",
    feedbackImage: "/images/2-Antwort.jpeg"
  },
  {
    id: 3,
    question: "Welchen Film haben wir bei unserem ersten Filmabend geschaut?",
    questionImage: "/images/3-Frage.jpeg",
    answers: [
      { id: "a", text: "Titanic", correct: false },
      { id: "b", text: "The Notebook", correct: false },
      { id: "c", text: "Inception", correct: true }
    ],
    correctFeedback: "Ein Traum in einem Traum... wie unsere Liebe!",
    feedbackImage: "/images/3-Antwort.jpeg"
  },
  {
    id: 4,
    question: "Was ist mein Lieblingsessen?",
    questionImage: "/images/4-Frage.jpeg",
    answers: [
      { id: "a", text: "Lasagne", correct: true },
      { id: "b", text: "Schnitzel", correct: false },
      { id: "c", text: "Curry", correct: false }
    ],
    correctFeedback: "Du kennst mich so gut!",
    feedbackImage: "/images/4-Antwort.jpeg"
  },
  {
    id: 5,
    question: "Welche Jahreszeit lieben wir am meisten zusammen?",
    questionImage: "/images/5-Frage.jpeg",
    answers: [
      { id: "a", text: "Frühling", correct: false },
      { id: "b", text: "Sommer", correct: false },
      { id: "c", text: "Herbst", correct: true }
    ],
    correctFeedback: "Die bunten Blätter, warmer Kakao und Kuschelzeit!",
    feedbackImage: "/images/5-Antwort.jpeg"
  },
  {
    id: 6,
    question: "Was machen wir am liebsten am Wochenende?",
    questionImage: "/images/6-Frage.jpeg",
    answers: [
      { id: "a", text: "Ausschlafen & Frühstücken", correct: true },
      { id: "b", text: "Wandern gehen", correct: false },
      { id: "c", text: "Shoppen", correct: false }
    ],
    correctFeedback: "Die beste Art, den Tag zu beginnen - zusammen!",
    feedbackImage: "/images/6-Antwort.jpeg"
  },
  {
    id: 7,
    question: "Was ist unser Lieblingslied?",
    questionImage: "/images/7-Frage.jpeg",
    answers: [
      { id: "a", text: "Perfect - Ed Sheeran", correct: false },
      { id: "b", text: "All of Me - John Legend", correct: true },
      { id: "c", text: "Thinking Out Loud", correct: false }
    ],
    correctFeedback: "All of me loves all of you...",
    feedbackImage: "/images/7-Antwort.jpeg"
  },
  {
    id: 8,
    question: "Welches Tier wäre ich, wenn ich eins wäre?",
    questionImage: "/images/8-Frage.jpeg",
    answers: [
      { id: "a", text: "Ein Bär", correct: false },
      { id: "b", text: "Ein Hund", correct: true },
      { id: "c", text: "Eine Katze", correct: false }
    ],
    correctFeedback: "Loyal, verspielt und immer an deiner Seite!",
    feedbackImage: "/images/8-Antwort.jpeg"
  },
  {
    id: 9,
    question: "Wohin würde ich am liebsten mit dir reisen?",
    questionImage: "/images/9-Frage.jpeg",
    answers: [
      { id: "a", text: "Paris", correct: false },
      { id: "b", text: "Edinburgh", correct: true },
      { id: "c", text: "Rom", correct: false }
    ],
    correctFeedback: "Rate mal wohin die Reise geht... 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    feedbackImage: "/images/9-Antwort.jpeg"
  },
  {
    id: 10,
    question: "Wohin würde ich am liebsten mit dir reisen?",
    questionImage: "/images/10-Frage.jpeg",
    answers: [
      { id: "a", text: "Paris", correct: false },
      { id: "b", text: "Edinburgh", correct: true },
      { id: "c", text: "Rom", correct: false }
    ],
    correctFeedback: "Rate mal wohin die Reise geht... 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    feedbackImage: "/images/10-Antwort.jpeg"
  },
  {
    id: 11,
    question: "Wann hatten wir diesen schönen Tag mit Miri und Sina?",
    questionImage: "/images/11-Frage.jpeg",
    answers: [
      { id: "a", text: "April", correct: true },
      { id: "b", text: "Mai", correct: false },
      { id: "c", text: "Juni", correct: false }
    ],
    correctFeedback: "Genau! Das war der Anfang von allem...",
    feedbackImage: "/images/11-Antwort.jpeg"
  },
  {
    id: 12,
    question: "Was war unser erstes gemeinsames Essen?",
    questionImage: "/images/12-Frage.jpeg",
    answers: [
      { id: "a", text: "Pizza", correct: true },
      { id: "b", text: "Sushi", correct: false },
      { id: "c", text: "Burger", correct: false }
    ],
    correctFeedback: "Mmh, lecker! Das war so ein schöner Abend.",
    feedbackImage: "/images/12-Antwort.jpeg"
  },
  {
    id: 13,
    question: "Welchen Film haben wir bei unserem ersten Filmabend geschaut?",
    questionImage: "/images/13-Frage.jpeg",
    answers: [
      { id: "a", text: "Titanic", correct: false },
      { id: "b", text: "The Notebook", correct: false },
      { id: "c", text: "Inception", correct: true }
    ],
    correctFeedback: "Ein Traum in einem Traum... wie unsere Liebe!",
    feedbackImage: "/images/13-Antwort.jpeg"
  },
  {
    id: 14,
    question: "Was ist mein Lieblingsessen?",
    questionImage: "/images/14-Frage.jpeg",
    answers: [
      { id: "a", text: "Lasagne", correct: true },
      { id: "b", text: "Schnitzel", correct: false },
      { id: "c", text: "Curry", correct: false }
    ],
    correctFeedback: "Du kennst mich so gut!",
    feedbackImage: "/images/14-Antwort.jpeg"
  },
  {
    id: 15,
    question: "Welche Jahreszeit lieben wir am meisten zusammen?",
    questionImage: "/images/15-Frage.jpeg",
    answers: [
      { id: "a", text: "Frühling", correct: false },
      { id: "b", text: "Sommer", correct: false },
      { id: "c", text: "Herbst", correct: true }
    ],
    correctFeedback: "Die bunten Blätter, warmer Kakao und Kuschelzeit!",
    feedbackImage: "/images/15-Antwort.jpeg"
  },
  {
    id: 16,
    question: "Was machen wir am liebsten am Wochenende?",
    questionImage: "/images/16-Frage.jpeg",
    answers: [
      { id: "a", text: "Ausschlafen & Frühstücken", correct: true },
      { id: "b", text: "Wandern gehen", correct: false },
      { id: "c", text: "Shoppen", correct: false }
    ],
    correctFeedback: "Die beste Art, den Tag zu beginnen - zusammen!",
    feedbackImage: "/images/16-Antwort.jpeg"
  },
  {
    id: 17,
    question: "Was ist unser Lieblingslied?",
    questionImage: "/images/17-Frage.jpeg",
    answers: [
      { id: "a", text: "Perfect - Ed Sheeran", correct: false },
      { id: "b", text: "All of Me - John Legend", correct: true },
      { id: "c", text: "Thinking Out Loud", correct: false }
    ],
    correctFeedback: "All of me loves all of you...",
    feedbackImage: "/images/17-Antwort.jpeg"
  },
  {
    id: 18,
    question: "Welches Tier wäre ich, wenn ich eins wäre?",
    questionImage: "/images/18-Frage.jpeg",
    answers: [
      { id: "a", text: "Ein Bär", correct: false },
      { id: "b", text: "Ein Hund", correct: true },
      { id: "c", text: "Eine Katze", correct: false }
    ],
    correctFeedback: "Loyal, verspielt und immer an deiner Seite!",
    feedbackImage: "/images/18-Antwort.jpeg"
  },
  {
    id: 19,
    question: "Wohin würde ich am liebsten mit dir reisen?",
    questionImage: "/images/19-Frage.jpeg",
    answers: [
      { id: "a", text: "Paris", correct: false },
      { id: "b", text: "Edinburgh", correct: true },
      { id: "c", text: "Rom", correct: false }
    ],
    correctFeedback: "Rate mal wohin die Reise geht... 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    feedbackImage: "/images/19-Antwort.jpeg"
  },
  {
    id: 20,
    question: "Wohin würde ich am liebsten mit dir reisen?",
    questionImage: "/images/20-Frage.jpeg",
    answers: [
      { id: "a", text: "Paris", correct: false },
      { id: "b", text: "Edinburgh", correct: true },
      { id: "c", text: "Rom", correct: false }
    ],
    correctFeedback: "Rate mal wohin die Reise geht... 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    feedbackImage: "/images/20-Antwort.jpeg"
  },
  {
    id: 21,
    question: "Wann hatten wir diesen schönen Tag mit Miri und Sina?",
    questionImage: "/images/21-Frage.jpeg",
    answers: [
      { id: "a", text: "April", correct: true },
      { id: "b", text: "Mai", correct: false },
      { id: "c", text: "Juni", correct: false }
    ],
    correctFeedback: "Genau! Das war der Anfang von allem...",
    feedbackImage: "/images/21-Antwort.jpeg"
  },
  {
    id: 22,
    question: "Was war unser erstes gemeinsames Essen?",
    questionImage: "/images/22-Frage.jpeg",
    answers: [
      { id: "a", text: "Pizza", correct: true },
      { id: "b", text: "Sushi", correct: false },
      { id: "c", text: "Burger", correct: false }
    ],
    correctFeedback: "Mmh, lecker! Das war so ein schöner Abend.",
    feedbackImage: "/images/22-Antwort.jpeg"
  },
  {
    id: 23,
    question: "Welchen Film haben wir bei unserem ersten Filmabend geschaut?",
    questionImage: "/images/23-Frage.jpeg",
    answers: [
      { id: "a", text: "Titanic", correct: false },
      { id: "b", text: "The Notebook", correct: false },
      { id: "c", text: "Inception", correct: true }
    ],
    correctFeedback: "Ein Traum in einem Traum... wie unsere Liebe!",
    feedbackImage: "/images/23-Antwort.jpeg"
  },
  {
    id: 24,
    question: "Was ist mein Lieblingsessen?",
    questionImage: "/images/24-Frage.jpeg",
    answers: [
      { id: "a", text: "Lasagne", correct: true },
      { id: "b", text: "Schnitzel", correct: false },
      { id: "c", text: "Curry", correct: false }
    ],
    correctFeedback: "Du kennst mich so gut!",
    feedbackImage: "/images/24-Antwort.jpeg"
  },
  {
    id: 25,
    question: "Welche Jahreszeit lieben wir am meisten zusammen?",
    questionImage: "/images/25-Frage.jpeg",
    answers: [
      { id: "a", text: "Frühling", correct: false },
      { id: "b", text: "Sommer", correct: false },
      { id: "c", text: "Herbst", correct: true }
    ],
    correctFeedback: "Die bunten Blätter, warmer Kakao und Kuschelzeit!",
    feedbackImage: "/images/25-Antwort.jpeg"
  },
  {
    id: 26,
    question: "Was machen wir am liebsten am Wochenende?",
    questionImage: "/images/26-Frage.jpeg",
    answers: [
      { id: "a", text: "Ausschlafen & Frühstücken", correct: true },
      { id: "b", text: "Wandern gehen", correct: false },
      { id: "c", text: "Shoppen", correct: false }
    ],
    correctFeedback: "Die beste Art, den Tag zu beginnen - zusammen!",
    feedbackImage: "/images/26-Antwort.jpeg"
  },
  {
    id: 27,
    question: "Was machen wir am liebsten am Wochenende?",
    questionImage: "/images/27-Frage.jpeg",
    answers: [
      { id: "a", text: "Ausschlafen & Frühstücken", correct: true },
      { id: "b", text: "Wandern gehen", correct: false },
      { id: "c", text: "Shoppen", correct: false }
    ],
    correctFeedback: "Die beste Art, den Tag zu beginnen - zusammen!",
    feedbackImage: "/images/27-Antwort.jpeg"
  },
  {
    id: 28,
    question: "Was machen wir am liebsten am Wochenende?",
    questionImage: "/images/28-Frage.jpeg",
    answers: [
      { id: "a", text: "Ausschlafen & Frühstücken", correct: true },
      { id: "b", text: "Wandern gehen", correct: false },
      { id: "c", text: "Shoppen", correct: false }
    ],
    correctFeedback: "Die beste Art, den Tag zu beginnen - zusammen!",
    feedbackImage: "/images/28-Antwort.jpeg"
  }
];

// Konfiguration für die App
export const appConfig = {
  // Name deiner Freundin (wird im Welcome Screen angezeigt)
  partnerName: "Mochi",

  // Titel der App
  appTitle: "Unser Jahrestag Quiz",

  // Untertitel
  appSubtitle: "Wie gut kennst du uns?",

  // Text für den Start-Button
  startButtonText: "Quiz starten",

  // Text nach dem Quiz
  revealTitle: "Überraschung!",
  revealSubtitle: "Wir fliegen nach Edinburgh!",
  revealMessage: "Pack deine Koffer, Baby! Ein unvergesslicher Trip wartet auf uns in Schottland!",

  // Das Bild das enthüllt wird (lege es in src/assets/images/ ab)
  // Kann Edinburgh sein oder ein Bild von euch beiden
  puzzleImage: "/edinburgh.jpg"
};
