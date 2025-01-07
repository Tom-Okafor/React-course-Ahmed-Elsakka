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

const SHUFFLED_INDEX = DOUBLED_IMAGES.reduce((acc) => {
  return pushRandomNumberIntoArray(DOUBLED_IMAGES, acc);
}, []);

export const SHUFFLED_IMAGES = SHUFFLED_INDEX.map(
  (eachShuffledIndex) => DOUBLED_IMAGES[eachShuffledIndex]
);

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
