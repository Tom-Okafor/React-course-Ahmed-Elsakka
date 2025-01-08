import Card from "./Card";
import "../styles/AllCards.css";
import { useContext, useEffect } from "react";
import { CardContext } from "./App";

function AllCards() {
  const { state, dispatch } = useContext(CardContext);
  const {
    clickedCardIndex,
    matchedCards,
    haveTwoCardsBeenClicked,
    SHUFFLED_IMAGES,
  } = state;

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
