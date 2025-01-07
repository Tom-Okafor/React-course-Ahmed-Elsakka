import Card from "./Card";
import { SHUFFLED_IMAGES } from "../constants";
import "../styles/AllCards.css";
import { useState } from "react";

function AllCards() {
  const [cardStates, setCardStates] = useState({
    clickedCardIndex: [],
    matchedCards: [],
    image: null,
    haveTwoCardsBeenClicked: false,
    hasMatchBeenMade: false,
    matchesMade: 0,
  });

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

  const { clickedCardIndex, matchedCards } = cardStates;
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
            updateCardStates(index, image);
          }}
        />
      ))}
    </section>
  );
}

export default AllCards;
