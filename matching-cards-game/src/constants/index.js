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

export const DOUBLED_IMAGES = [...IMAGES, ...IMAGES];

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

export function shuffleIndex() {
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
  SHUFFLED_IMAGES,
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
