import Card from "./Card";
import { SHUFFLED_IMAGES } from "../constants";
import "../styles/AllCards.css";

function AllCards() {
  return (
    <section className="card-box">
      {SHUFFLED_IMAGES.map((image, index) =>
        index === 1 || index === 10 ? (
          <Card
            key={index}
            imageSource={image}
            altText={`${image.slice(8, image.length - 4)} Card`}
            newClass="change-face"
          />
        ) : (
          <Card
            key={index}
            imageSource={image}
            altText={`${image.slice(8, image.length - 4)} Card`}
          />
        )
      )}
    </section>
  );
}

export default AllCards;
