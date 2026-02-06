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
    correctFeedback: "Ja, Mochi! Das war ein richtig schöner Tag...",
    feedbackImage: "/images/1-Antwort.jpeg"
  },
  {
    id: 2,
    question: "Wann hatten wir dieses süße Date?",
    questionImage: "/images/6-Frage.jpeg",
    answers: [
      { id: "a", text: "Januar", correct: false },
      { id: "b", text: "Februar", correct: false },
      { id: "c", text: "März", correct: true }
    ],
    correctFeedback: "Der Schal steht dir so gut!",
    feedbackImage: "/images/6-Antwort.jpeg"
  },
  {
    id: 3,
    question: "Wann hast du mir dieses wunderschöne Bild geschickt?",
    questionImage: "/images/3-Frage.jpeg",
    answers: [
      { id: "a", text: "Juni", correct: true },
      { id: "b", text: "Juli", correct: false },
      { id: "c", text: "August", correct: false }
    ],
    correctFeedback: "Das beste Hintegrundbild! Du bist so schön",
    feedbackImage: "/images/3-Antwort.jpeg"
  },
  {
    id: 4,
    question: "Welche romantischen Emojies hast du mir als Ausdruck deiner Liebe geschickt?",
    questionImage: "/images/4-Frage.jpeg",
    answers: [
      { id: "a", text: "🥰❤️😘", correct: false },
      { id: "b", text: "🫵🔪🔫", correct: true },
      { id: "c", text: "❤️❤️❤️", correct: false }
    ],
    correctFeedback: "richtige Romantikerin!",
    feedbackImage: "/images/4-Antwort.jpeg"
  },
  {
    id: 5,
    question: "Wann hatten wir diesen schönen Tag in Augsburg?",
    questionImage: "/images/5-Frage.jpeg",
    answers: [
      { id: "a", text: "März", correct: true },
      { id: "b", text: "April", correct: false },
      { id: "c", text: "Mai", correct: false }
    ],
    correctFeedback: "Mein erstes Mal in Augsburg!",
    feedbackImage: "/images/5-Antwort.jpeg"
  },
  {
    id: 6,
    question: "Wann hatten wir diesen unvergesslichen Mini-Urlaub?",
    questionImage: "/images/2-Frage.jpeg",
    answers: [
      { id: "a", text: "Mai", correct: true },
      { id: "b", text: "Juni", correct: false },
      { id: "c", text: "Juli", correct: false }
    ],
    correctFeedback: "Ich werde nie vegessen, wie wir Stöcke gesammelt haben...",
    feedbackImage: "/images/2-Antwort.jpeg"
  },
  {
    id: 7,
    question: "Warum willst du Kinder haben?",
    questionImage: "/images/7-Frage.jpeg",
    answers: [
      { id: "a", text: "Weil du Kinder liebst", correct: false },
      { id: "b", text: "Weil du Mama sein willst", correct: false },
      { id: "c", text: "Als Tarnung für deine peinlichen Hobbies", correct: true }
    ],
    correctFeedback: "So kenn ich mein Mochi...",
    feedbackImage: "/images/7-Antwort.jpeg"
  },
  {
    id: 8,
    question: "Wann ist dieses süße Bild und der Sticker dazu entstanden?",
    questionImage: "/images/8-Frage.jpeg",
    answers: [
      { id: "a", text: "März", correct: true },
      { id: "b", text: "April", correct: false },
      { id: "c", text: "Mai", correct: false }
    ],
    correctFeedback: "Ja, mein pomputa-Lehrling! Bist da richtig am bugs fixen!",
    feedbackImage: "/images/8-Antwort.jpeg"
  },
  {
    id: 9,
    question: "Warum bedrohst du mich hier? Was soll ich dir schicken?",
    questionImage: "/images/9-Frage.jpeg",
    answers: [
      { id: "a", text: "meine Bankdaten", correct: false },
      { id: "b", text: "ein Bild von mir", correct: false },
      { id: "c", text: "den Song Iliovasilema", correct: true }
    ],
    correctFeedback: "Richtig meine kleine Bedroherin!",
    feedbackImage: "/images/9-Antwort.jpeg"
  },
  {
    id: 10,
    question: "Was sagt man über Männer mit großer Nase?",
    questionImage: "/images/10-Frage.jpeg",
    answers: [
      { id: "a", text: "dass sie große Füße haben", correct: false },
      { id: "b", text: "dass sie seh schön sind", correct: false },
      { id: "c", text: "dass sie sehr schlau sind", correct: true }
    ],
    correctFeedback: "Vielleicht sagt man noch was anderes über sie 👀",
    feedbackImage: "/images/10-Antwort.jpeg"
  },
  {
    id: 11,
    question: "Wann habe ich dich in Mini-Golf fertig gemacht?",
    questionImage: "/images/11-Frage.jpeg",
    answers: [
      { id: "a", text: "Dezember", correct: false },
      { id: "b", text: "Januar", correct: false },
      { id: "c", text: "Februar", correct: true }
    ],
    correctFeedback: "Beim Reaktionsspiel hast du mich fertig gemacht...",
    feedbackImage: "/images/11-Antwort.jpeg"
  },
  {
    id: 12,
    question: "Wozu habe ich dich hier herausgefordert?",
    questionImage: "/images/12-Frage.jpeg",
    answers: [
      { id: "a", text: "Billard spielen", correct: false },
      { id: "b", text: "Backgammon spielen", correct: true },
      { id: "c", text: "ein Duell auf Leben und Tod", correct: false }
    ],
    correctFeedback: "Ich muss dich mal wieder fertig machen...",
    feedbackImage: "/images/12-Antwort.jpeg"
  },
  {
    id: 13,
    question: "Welcher Plan von dir geht hier auf?",
    questionImage: "/images/13-Frage.jpeg",
    answers: [
      { id: "a", text: "mit mir tanzen", correct: false },
      { id: "b", text: "dass ich ein Buch anfange zu lesen", correct: false },
      { id: "c", text: "Harry Potter mit mir schauen", correct: true }
    ],
    correctFeedback: "Auch wenn ich während der Filme etwas abgelenkt war...",
    feedbackImage: "/images/13-Antwort.jpeg"
  },
  {
    id: 14,
    question: "Warum beefen wir uns hier?",
    questionImage: "/images/14-Frage.jpeg",
    answers: [
      { id: "a", text: "weil ich Harry Potter schlecht nenne", correct: false },
      { id: "b", text: "weil ich dich alt nenne", correct: true },
      { id: "c", text: "weil ich Song of Achilles schlecht nenne", correct: false }
    ],
    correctFeedback: "Mir sind keine guten falschen Antworten eingefallen...",
    feedbackImage: "/images/14-Antwort.jpeg"
  },
  {
    id: 15,
    question: "Was dachte ich hast du mir in den Rucksack gesteckt?",
    questionImage: "/images/15-Frage.jpeg",
    answers: [
      { id: "a", text: "eine süße Nachricht", correct: false },
      { id: "b", text: "ein kleines Geschenk", correct: false },
      { id: "c", text: "eine Unterhose von dir", correct: true }
    ],
    correctFeedback: "Ein Mann darf doch träumen! Es war trotzdem sehr süß ❤️",
    feedbackImage: "/images/15-Antwort.jpeg"
  },
  {
    id: 16,
    question: "Was sage ich wo man bei alten Menschen die Hand küsst?",
    questionImage: "/images/16-Frage.jpeg",
    answers: [
      { id: "a", text: "Handfläche", correct: true },
      { id: "b", text: "Daumen", correct: false },
      { id: "c", text: "Handgelenk", correct: false }
    ],
    correctFeedback: "Ich fand das sehr witzig...",
    feedbackImage: "/images/16-Antwort.jpeg"
  },
  {
    id: 17,
    question: "Was nennt dich dein Horoskop?",
    questionImage: "/images/17-Frage.jpeg",
    answers: [
      { id: "a", text: "humorless, unkind, narrow-minded", correct: false },
      { id: "b", text: "intolerant, no fun, cold-hearted", correct: true },
      { id: "c", text: "mean, unsympathetic, dumb", correct: false }
    ],
    correctFeedback: "Du bist nichts davon ❤️",
    feedbackImage: "/images/17-Antwort.jpeg"
  },
  {
    id: 18,
    question: "Was war meine Empfehlung?",
    questionImage: "/images/18-Frage.jpeg",
    answers: [
      { id: "a", text: "Ein Lied von Usher", correct: false },
      { id: "b", text: "Ein Lied von Russ", correct: false },
      { id: "c", text: "Slumber Rain (Regengeräusche)", correct: true }
    ],
    correctFeedback: "Richtiger Banger!",
    feedbackImage: "/images/18-Antwort.jpeg"
  },
  {
    id: 27,
    question: "Sexträume mit wem?",
    questionImage: "/images/19-Frage.jpeg",
    answers: [

      { id: "a", text: "Dich mit Hagrids Gesicht", correct: false },
      { id: "b", text: "Hagrid mit deinem Gesicht", correct: true },
      { id: "c", text: "Hagrid", correct: false }
    ],
    correctFeedback: "Zum Glück spielt Hagrid in meinen Fantasien keine Rolle...",
    feedbackImage: "/images/19-Antwort.jpeg"
  },
  {
    id: 20,
    question: "Wann war der Todestag des Lebkuchenmanns?",
    questionImage: "/images/20-Frage.jpeg",
    answers: [
      { id: "a", text: "19.12.2024", correct: true },
      { id: "b", text: "26.12.2024", correct: false },
      { id: "c", text: "30.12.2024", correct: false }
    ],
    correctFeedback: "Wir werden ihn immer in Gedanken behalten...",
    feedbackImage: "/images/20-Antwort.jpeg"
  },
  {
    id: 21,
    question: "Was klang jetzt falsch? Was hast du geschrieben?",
    questionImage: "/images/21-Frage.jpeg",
    answers: [
      { id: "a", text: "ich will Sex mit dir", correct: false },
      { id: "b", text: "dann hast du ein schönes Bild wenn dir mal langweilig ist und du nicht weist was du machen sollst", correct: true },
      { id: "c", text: "heute Nacht gehts ab", correct: false }
    ],
    correctFeedback: "Es klang ganz richtig 😏",
    feedbackImage: "/images/21-Antwort.jpeg"
  },
  {
    id: 22,
    question: "Was hast du für mich gemacht?",
    questionImage: "/images/22-Frage.jpeg",
    answers: [
      { id: "a", text: "Pizza gebacken", correct: false },
      { id: "b", text: "mir ein naughty Bild geschickt", correct: false },
      { id: "c", text: "ein Profilbild mit mir", correct: true }
    ],
    correctFeedback: "So süß! Ich fress dich!",
    feedbackImage: "/images/22-Antwort.jpeg"
  },
  {
    id: 23,
    question: "Was stand unten auf der Karte?",
    questionImage: "/images/23-Frage.jpeg",
    answers: [
      { id: "a", text: "Ich bin im Gefängnis", correct: false },
      { id: "b", text: "Ich bin immer bei dir", correct: true },
      { id: "c", text: "Ich bin sehr schlau", correct: false }
    ],
    correctFeedback: "Und werde auch immer bei dir sein ❤️",
    feedbackImage: "/images/23-Antwort.jpeg"
  },
  {
    id: 24,
    question: "Was habe ich verstanden?",
    questionImage: "/images/24-Frage.jpeg",
    answers: [
      { id: "a", text: "Bauch statt Buch und dachte, dass du viel furzen musst", correct: true },
      { id: "b", text: "dass wir in der Nacht Sex haben werden", correct: false },
      { id: "c", text: "dass wir in der Nacht spicy Sex haben werden", correct: false }
    ],
    correctFeedback: "Ich hätte niemals nur mit einem Daumen hoch darauf reagiert 😂",
    feedbackImage: "/images/24-Antwort.jpeg"
  },
  {
    id: 25,
    question: "Was war dein erster (dokumentierter) Spitzname für mich?",
    questionImage: "/images/25-Frage.jpeg",
    answers: [
      { id: "a", text: "Mocombah", correct: false },
      { id: "b", text: "Pavlito", correct: false },
      { id: "c", text: "Arschiloch", correct: true }
    ],
    correctFeedback: "Nicht mein Lieblingsspitzname...",
    feedbackImage: "/images/25-Antwort.jpeg"
  },
  {
    id: 26,
    question: "Wo habe ich diese unfassbar hotten Bilder von dir geschossen?",
    questionImage: "/images/26-Frage.jpeg",
    answers: [
      { id: "a", text: "Hamburg", correct: true },
      { id: "b", text: "Tromsø", correct: false },
      { id: "c", text: "Italien", correct: false }
    ],
    correctFeedback: "Da fällt dir ja glatt die Sohle vom Schuh!",
    feedbackImage: "/images/26-Antwort.jpeg"
  },
  {
    id: 19,
    question: "Was habe ich geantwortet?",
    questionImage: "/images/27-Frage.jpeg",
    answers: [
      { id: "a", text: "süß", correct: false },
      { id: "b", text: "scharf", correct: false },
      { id: "c", text: "hot", correct: true }
    ],
    correctFeedback: "Ich will dich öfter in dem Outfit sehen 👀",
    feedbackImage: "/images/27-Antwort.jpeg"
  },
  {
    id: 28,
    question: "Was dachte ich hier? (gibt keine falsche Antwort!)",
    questionImage: "/images/28-Frage.jpeg",
    answers: [
      { id: "a", text: "Ich bin verliebt", correct: true },
      { id: "b", text: "das ist die Frau, die ich heiraten werde", correct: true },
      { id: "c", text: "wie kann man nur so schön sein", correct: true }
    ],
    correctFeedback: "Ich liebe dich über alles baby!",
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
