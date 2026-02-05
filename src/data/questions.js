// Quiz-Fragen für das Jahrestag-Quiz
// HIER KANNST DU DEINE EIGENEN FRAGEN EINTRAGEN!
// Jede Frage hat:
// - question: Die Frage
// - answers: 4 Antwortmöglichkeiten (eine muss correct: true haben)
// - correctFeedback: Text der bei richtiger Antwort angezeigt wird
// - feedbackGif: URL zu einem GIF (optional, von Giphy oder lokal)

export const questions = [
  {
    id: 1,
    question: "Wo haben wir uns zum ersten Mal getroffen?",
    answers: [
      { id: "a", text: "Im Café", correct: false },
      { id: "b", text: "Auf einer Party", correct: true },
      { id: "c", text: "Bei der Arbeit", correct: false },
      { id: "d", text: "Im Park", correct: false }
    ],
    correctFeedback: "Genau! Das war der Anfang von allem...",
    feedbackGif: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
  },
  {
    id: 2,
    question: "Was war unser erstes gemeinsames Essen?",
    answers: [
      { id: "a", text: "Pizza", correct: true },
      { id: "b", text: "Sushi", correct: false },
      { id: "c", text: "Burger", correct: false },
      { id: "d", text: "Pasta", correct: false }
    ],
    correctFeedback: "Mmh, lecker! Das war so ein schöner Abend.",
    feedbackGif: "https://media.giphy.com/media/4ayiIWaq2VULC/giphy.gif"
  },
  {
    id: 3,
    question: "Welchen Film haben wir bei unserem ersten Filmabend geschaut?",
    answers: [
      { id: "a", text: "Titanic", correct: false },
      { id: "b", text: "The Notebook", correct: false },
      { id: "c", text: "Inception", correct: true },
      { id: "d", text: "Avatar", correct: false }
    ],
    correctFeedback: "Ein Traum in einem Traum... wie unsere Liebe!",
    feedbackGif: "https://media.giphy.com/media/xT0GqssRweIhlz209i/giphy.gif"
  },
  {
    id: 4,
    question: "Was ist mein Lieblingsessen?",
    answers: [
      { id: "a", text: "Lasagne", correct: true },
      { id: "b", text: "Schnitzel", correct: false },
      { id: "c", text: "Curry", correct: false },
      { id: "d", text: "Ramen", correct: false }
    ],
    correctFeedback: "Du kennst mich so gut!",
    feedbackGif: "https://media.giphy.com/media/3o7TKU8RvQuomFfUUU/giphy.gif"
  },
  {
    id: 5,
    question: "Welche Jahreszeit lieben wir am meisten zusammen?",
    answers: [
      { id: "a", text: "Frühling", correct: false },
      { id: "b", text: "Sommer", correct: false },
      { id: "c", text: "Herbst", correct: true },
      { id: "d", text: "Winter", correct: false }
    ],
    correctFeedback: "Die bunten Blätter, warmer Kakao und Kuschelzeit!",
    feedbackGif: "https://media.giphy.com/media/l3q2zxUCPX4rmXbag/giphy.gif"
  },
  {
    id: 6,
    question: "Was machen wir am liebsten am Wochenende?",
    answers: [
      { id: "a", text: "Ausschlafen & Frühstücken", correct: true },
      { id: "b", text: "Wandern gehen", correct: false },
      { id: "c", text: "Shoppen", correct: false },
      { id: "d", text: "Sport machen", correct: false }
    ],
    correctFeedback: "Die beste Art, den Tag zu beginnen - zusammen!",
    feedbackGif: "https://media.giphy.com/media/xT9DPIBYf0pAviBLzO/giphy.gif"
  },
  {
    id: 7,
    question: "Was ist unser Lieblingslied?",
    answers: [
      { id: "a", text: "Perfect - Ed Sheeran", correct: false },
      { id: "b", text: "All of Me - John Legend", correct: true },
      { id: "c", text: "Thinking Out Loud", correct: false },
      { id: "d", text: "A Thousand Years", correct: false }
    ],
    correctFeedback: "All of me loves all of you...",
    feedbackGif: "https://media.giphy.com/media/l0HlPystfePnAI3G8/giphy.gif"
  },
  {
    id: 8,
    question: "Welches Tier wäre ich, wenn ich eins wäre?",
    answers: [
      { id: "a", text: "Ein Bär", correct: false },
      { id: "b", text: "Ein Hund", correct: true },
      { id: "c", text: "Eine Katze", correct: false },
      { id: "d", text: "Ein Pinguin", correct: false }
    ],
    correctFeedback: "Loyal, verspielt und immer an deiner Seite!",
    feedbackGif: "https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif"
  },
  {
    id: 9,
    question: "Wohin würde ich am liebsten mit dir reisen?",
    answers: [
      { id: "a", text: "Paris", correct: false },
      { id: "b", text: "Edinburgh", correct: true },
      { id: "c", text: "Rom", correct: false },
      { id: "d", text: "Barcelona", correct: false }
    ],
    correctFeedback: "Rate mal wohin die Reise geht... 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    feedbackGif: "https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif"
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
