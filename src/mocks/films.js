const COUNT_FILMS = 8;

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomRating = () => {
  const firstNumber = getRandomNumber(0, 10);
  return `${firstNumber}.${firstNumber !== 10 && firstNumber !== 0 ? getRandomNumber(0, 10) : 0}`;
};

const getDescriptionRating = (rating) => {

  switch (true) {
    case rating < 3:
      return `Bad`;

    case rating >= 3 && rating < 5:
      return `Normal`;

    case rating >= 5 && rating < 8:
      return `Good`;

    case rating >= 8 && rating < 10:
      return `Very good`;

    case rating >= 10:
      return `Awesome`;
  }

  return `Unknown`;
};

const getRandomItem = (arr) => {
  return arr[getRandomNumber(0, arr.length - 1)];
};


const producers = [
  `Edward Janney`,
  `Sabra Jones`,
  `Tom Ruegger`,
  `Ron Senkowski`,
  `Kelly Leonard`,
  `Matthew Daniels`,
  `Olivia Luccardi`,
  `P. J. Wolfson`,
  `Yance Ford`,
  `Allen Estrin`,
  `Jenno Topping`,
];

const text = `Something`;

const films = [
  {
    title: `Fantastic Beasts`,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,

  },
  {
    title: `Macbeth`,
    src: `img/macbeth.jpg`,
  },
  {
    title: `Revenant`,
    src: `img/revenant.jpg`,
  },
  {
    title: `Johnny English`,
    src: `img/johnny-english.jpg`,
  },
  {
    title: `War of the Worlds`,
    src: `img/war-of-the-worlds.jpg`,
  },
  {
    title: `Seven Years in Tibet`,
    src: `img/seven-years-in-tibet.jpg`
  },
  {
    title: `Snatch`,
    src: `img/snatch.jpg`
  },
  {
    title: `Mindhunter`,
    src: `img/mindhunter.jpg`
  },
  {
    title: `Pulp Fiction`,
    src: `img/pulp-fiction.jpg`
  },
  {
    title: `What we do in the shadows`,
    src: `img/what-we-do-in-the-shadows.jpg`
  },
  {
    title: `Shutter Island`,
    src: `img/shutter-island.jpg`
  }
];

const actorsList = [
  `Robert Agnew`,
  `Jonathan Ahdout`,
  `Waris Ahluwalia`,
  `Ahmed Ahmed`,
  `Philip Ahn`,
  `Charles Aidman`,
  `Danny Aiello`,
  `Danny Aiello`,
  `Liam Aiken`,
  `Alan Aisenberg`,
  `Spottiswoode Aitken`,
  `Franklyn Ajaye`,
  `Ayad Akhtar`,
  `Gbenga Akinnagbe`,
  `Claude Akins`,
  `Marc Alaimo`,
  `Mark Alan`,
  `Matthew Alan`,
  `Rico Alaniz`,
  `Carlos Alazraqui`,
  `Luis Alberni`,
  `Devin Albert`,
  `Eddie Albert`,
];


const generateMock = () => {
  const ratingNumber = getRandomRating();
  const ratingString = getDescriptionRating(ratingNumber);
  const randomFilm = getRandomItem(films);

  return {
    title: randomFilm.title,
    src: randomFilm.src,
    description: text,
    rating: ratingNumber,
    descriptionRating: ratingString,
    quantityVotes: getRandomNumber(5, 300),
    Producer: getRandomItem(producers),
    listActors: [`1`, `2`, `3`]
  };
};

const createMock = (countFilms) => {
  return new Array(countFilms)
    .fill()
    .map(generateMock);
};

console.table(createMock(COUNT_FILMS));

export default createMock(COUNT_FILMS);
