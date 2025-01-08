import Card from "./Card";
import "../styles/AllCards.css";
import { SHUFFLED_INDEX, DOUBLED_IMAGES } from "../constants";
import { useContext, useEffect } from "react";
import { CardContext } from "./App";

function AllCards() {
  /*const [cardStates, setCardStates] = useState({
    clickedCardIndex: [],
    matchedCards: [],
    image: null,
    haveTwoCardsBeenClicked: false,
    hasMatchBeenMade: false,
    matchesMade: 0,
  });
  const {
    clickedCardIndex,
    matchedCards,
    hasMatchBeenMade,
    haveTwoCardsBeenClicked,
  } = cardStates;

  function updateCardStates(index, image) {
    setCardStates((prevCardStates) => {
      return {
        ...prevCardStates,
        clickedCardIndex: [...prevCardStates.clickedCardIndex, index],
        haveTwoCardsBeenClicked: prevCardStates.clickedCardIndex.length
          ? true
          : false,
        image: prevCardStates.image ? prevCardStates.image : image,
        matchesMade:
          prevCardStates.image === image
            ? prevCardStates.matchesMade++
            : prevCardStates.matchesMade,
        hasMatchBeenMade: prevCardStates.image === image ? true : false,
      };
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setCardStates((prevCardStates) => {
        return { ...prevCardStates, clickedCardIndex: [] };
      });
    }, 500);
    if (hasMatchBeenMade) {
      setCardStates((prevCardStates) => {
        return {
          ...prevCardStates,
          matchedCards: [
            ...prevCardStates.matchedCards,
            ...prevCardStates.clickedCardIndex,
          ],
        };
      });
    }
    setCardStates((prevCardStates) => {
      return {
        ...prevCardStates,
        image: null,
        haveTwoCardsBeenClicked: false,
        hasMatchBeenMade: false,
      };
    });
  }, [haveTwoCardsBeenClicked, hasMatchBeenMade]);
*/
  const { state, dispatch } = useContext(CardContext);
  const { clickedCardIndex, matchedCards, haveTwoCardsBeenClicked } = state;

  useEffect(() => {
    //change image
    //check if match has been made
    // add index to matched cards
    //clear clicked index
    if (haveTwoCardsBeenClicked) {
      dispatch({ type: "Two Cards Clicked" });
      setTimeout(() => {
        dispatch({ type: "Clear Clicked Card Index" });
      }, 500);
    }
  }, [haveTwoCardsBeenClicked, dispatch]);
  const SHUFFLED_IMAGES = SHUFFLED_INDEX.map(
    (eachShuffledIndex) => DOUBLED_IMAGES[eachShuffledIndex]
  );

  return (
    <section className="card-box">
      {SHUFFLED_IMAGES.map((image, index) => (
        <Card
          key={index}
          imageSource={image}
          altText={`${image.slice(8, image.length - 4)} Card`}
          newClass={
            clickedCardIndex.includes(index) || matchedCards.includes(index)
              ? "change-face"
              : ""
          }
          clickFunction={() => {
            dispatch({ type: "Card Click", payload: { image, index } });
          }}
        />
      ))}
    </section>
  );
}

export default AllCards;
