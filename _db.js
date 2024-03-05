let games = [
  { id: "1", title: "Zelda,Tears of the Kingdom", platform: ["Switch"] },
  { id: "2", title: "Final Fantasy 7 Remake", platform: ["PS5", "Xbox"] },
  { id: "3", title: "Elden Ring", platform: ["PS5", "Xbox", "PC"] },
  { id: "4", title: "Mario Kart", platform: ["Switch"] },
  { id: "5", title: "Pokemon Scarlet", platform: ["PS5", "Xbox", "PC"] },
];

let authors = [
  { id: "1", name: "mario", verified: true },
  { id: "2", name: "yoshi", verified: false },
  { id: "3", name: "peach", verified: true },
];

let reviews = [
  {
    id: "1",
    rating: 5,
    content: "I love this game",
    authorId: "1",
    gameId: "1",
  },
  {
    id: "2",
    rating: 4,
    content: "I like this game",
    authorId: "2",
    gameId: "2",
  },
  {
    id: "3",
    rating: 3,
    content: "I don't like this game",
    authorId: "3",
    gameId: "3",
  },
  {
    id: "4",
    rating: 2,
    content: "I hate this game",
    authorId: "1",
    gameId: "4",
  },
  {
    id: "5",
    rating: 1,
    content: "I hate much more then this game",
    authorId: "2",
    gameId: "5",
  },
  {
    id: "6",
    rating: 5,
    content: "I hate so much this game",
    authorId: "3",
    gameId: "5",
  },
];

export default { games, authors, reviews };
