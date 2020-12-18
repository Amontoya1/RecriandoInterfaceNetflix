const listaFilmes = [
  "https://pt.wikipedia.org/wiki/The_Witcher",
  "https://en.wikipedia.org/wiki/Mandalorian",
  "https://pt.wikipedia.org/wiki/Star_Wars:_The_Rise_of_Skywalker",
  "https://es.wikipedia.org/wiki/30_monedas",
  "https://pt.wikipedia.org/wiki/The_Queen%27s_Gambit",
  "https://pt.wikipedia.org/wiki/O_Hobbit_(s%C3%A9rie_de_filmes)",
  "https://pt.wikipedia.org/wiki/His_Dark_Materials",
  "https://pt.wikipedia.org/wiki/House,_M.D.",
  "https://pt.wikipedia.org/wiki/Grey%27s_Anatomy",
  "https://pt.wikipedia.org/wiki/Criminal_Minds",
  "https://pt.wikipedia.org/wiki/Law_%26_Order",
  "https://digitalinnovation.one/"
];

function informacao(filme) {
  window.open(listaFilmes[filme]);
}