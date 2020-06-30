
const COUNT_FILMS = 1;

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
  took a galley of type and scrambled it to make a type specimen book.`;

const films = [
  {
    title: `Fantastic Beasts`,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Kids & Family`
  },
  {
    title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
    genre: `Dramas`
  },
  {
    title: `Macbeth`,
    src: `img/macbeth.jpg`,
    genre: `Thrillers`
  },
  {
    title: `Revenant`,
    src: `img/revenant.jpg`,
    genre: `Thrillers`
  },
  {
    title: `Johnny English`,
    src: `img/johnny-english.jpg`,
    genre: `Kids & Family`
  },
  {
    title: `War of the Worlds`,
    src: `img/war-of-the-worlds.jpg`,
    genre: `Thrillers`
  },
  {
    title: `Seven Years in Tibet`,
    src: `img/seven-years-in-tibet.jpg`,
    genre: `Documentary`
  },
  {
    title: `Snatch`,
    src: `img/snatch.jpg`,
    genre: `Romance`
  },
  {
    title: `Mindhunter`,
    src: `img/mindhunter.jpg`,
    genre: `Horror`
  },
  {
    title: `Pulp Fiction`,
    src: `img/pulp-fiction.jpg`,
    genre: `Crime`
  },
  {
    title: `What we do in the shadows`,
    src: `img/what-we-do-in-the-shadows.jpg`,
    genre: `Sci-Fi`
  },
  {
    title: `Shutter Island`,
    src: `img/shutter-island.jpg`,
    genre: `Comedies`
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

const previews = [
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
];

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomRating = () => {
  const firstNumber = getRandomNumber(0, 10);
  return Number(`${firstNumber}.${firstNumber !== 10 && firstNumber !== 0 ? getRandomNumber(0, 9) : 0}`);
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

const getRandomArrWithUniqeItems = (arr) => {
  const copyArr = [...arr];
  const result = [];
  for (let i = 0; i < getRandomNumber(2, arr.length - 1); i++) {
    result.push(copyArr.splice(getRandomNumber(0, copyArr.length - 1), 1)[0]);
  }

  return result;
};


const generateMock = () => {
  const ratingNumber = getRandomRating();
  const ratingString = getDescriptionRating(ratingNumber);
  const randomFilm = getRandomItem(films);

  return {
    title: randomFilm.title,
    moviePoster: `https://picsum.photos/300/450`,
    bigPoster: `https://picsum.photos/1900/550`,
    smallCardImg: randomFilm.src,
    genre: randomFilm.genre,
    year: getRandomNumber(1995, 2017),
    description: text,
    preview: getRandomItem(previews),
    rating: ratingNumber,
    descriptionRating: ratingString,
    quantityVotes: getRandomNumber(5, 300),
    producer: getRandomItem(producers),
    listActors: getRandomArrWithUniqeItems(actorsList)
  };
};

const createMock = (countFilms) => {
  return new Array(countFilms)
    .fill()
    .map(generateMock);
};

export default createMock(COUNT_FILMS);

