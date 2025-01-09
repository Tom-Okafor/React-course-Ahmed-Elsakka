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
    hasMatchBeenMade,
    failedMatch,
  } = state;

  useEffect(() => {
    if (haveTwoCardsBeenClicked) {
      hasMatchBeenMade
        ? new Audio("assets/yay.mp3").play()
        : new Audio("assets/noo.mp3").play();
      dispatch({ type: "Two Cards Clicked" });
      setTimeout(() => {
        dispatch({ type: "Clear Clicked Card Index" });
        setTimeout(() => {
          dispatch({ type: "Clear Failed Match" });
        }, 1000);
      }, 1000);
    }
  }, [haveTwoCardsBeenClicked, hasMatchBeenMade, dispatch]);

  return (
    <section className="card-box">
      {SHUFFLED_IMAGES.map((image, index) => (
        <Card
          key={index}
          imageSource={image}
          altText={`${image.slice(8, image.length - 4)} Card`}
          newClass={
            clickedCardIndex.includes(index)
              ? "change-face"
              : matchedCards.includes(index)
              ? "change-face matched"
              : failedMatch.includes(index)
              ? "hide-face"
              : ""
          }
          style={
            failedMatch.includes(index)
              ? { border: "4px solid red", transition: "all 300ms ease" }
              : {}
          }
          sty
          clickFunction={() => {
            dispatch({ type: "Card Click", payload: { image, index } });
          }}
        />
      ))}
    </section>
  );
}

export default AllCards;
