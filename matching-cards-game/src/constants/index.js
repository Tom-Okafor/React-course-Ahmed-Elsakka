const IMAGES = [
  "/assets/cat.jpg",
  "/assets/dog.jpg",
  "/assets/donkey.jpg",
  "/assets/duck.jpg",
  "/assets/elephant.jpg",
  "/assets/horse.jpg",
  "/assets/lamb.jpg",
  "/assets/tiger.jpg",
];

const DOUBLED_IMAGES = [...IMAGES, ...IMAGES];

//shuffle images in DOUBLED_IMAGES array
function generateRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function pushRandomNumberIntoArray(parentArr, childArr) {
  let index = generateRandomIndex(parentArr);
  if (childArr.includes(index)) {
    pushRandomNumberIntoArray(parentArr, childArr);
  } else {
    childArr.push(index);
  }
  return childArr;
}

function shuffleIndex() {
  return DOUBLED_IMAGES.reduce((acc) => {
    return pushRandomNumberIntoArray(DOUBLED_IMAGES, acc);
  }, []);
}

export function shuffleImages() {
  return shuffleIndex().map(
    (eachShuffledIndex) => DOUBLED_IMAGES[eachShuffledIndex]
  );
}
const SHUFFLED_IMAGES = shuffleImages();

export const CREATE_SHUFFLED_IMAGE_COLLECTION = (level = "easy") => {
  let numOfImagesNeeded;
  switch (level) {
    case "easy":
      numOfImagesNeeded = 4;
      break;
    case "intermediate":
      numOfImagesNeeded = 6;
      break;
    case "hard":
      numOfImagesNeeded = 8;
      break;
  }
  const IMAGES_NEEDED = IMAGES.filter((_, index) => index < numOfImagesNeeded);
  const DOUBLED_IMAGES = [...IMAGES_NEEDED, ...IMAGES_NEEDED];

  function shuffleIndex() {
    return DOUBLED_IMAGES.reduce((acc) => {
      return pushRandomNumberIntoArray(DOUBLED_IMAGES, acc);
    }, []);
  }

  function shuffleImages() {
    return shuffleIndex().map(
      (eachShuffledIndex) => DOUBLED_IMAGES[eachShuffledIndex]
    );
  }
  const SHUFFLED_IMAGES = shuffleImages();
  return SHUFFLED_IMAGES;
};

export const initialCardState = {
  clickedCardIndex: [],
  matchedCards: [],
  image: null,
  haveTwoCardsBeenClicked: false,
  hasMatchBeenMade: false,
  matchesMade: 0,
  gameStarted: false,
  currentSeconds: 0,
  fastestSeconds: 0,
  level: "easy",
  totalMatchesNeeded: 4,
  SHUFFLED_IMAGES: CREATE_SHUFFLED_IMAGE_COLLECTION(),
  alert:
    "Click the start button and then click on the cards to flip them over and find the matching pairs.",
  failedMatch: [],
};

/*// check to see if all the cards are doubled
const checkShuffledCards = SHUFFLED_IMAGES.reduce(
  (initialValue, currentValue) => {
    SHUFFLED_IMAGES.filter((card) => card === currentValue).length !== 2 &&
      initialValue++;
    return initialValue;
  },
  0
);
console.log(checkShuffledCards);*/
