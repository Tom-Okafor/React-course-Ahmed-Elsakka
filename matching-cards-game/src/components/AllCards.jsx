import Card from "./Card";
import { SHUFFLED_IMAGES } from "../constants";

function AllCards() {
  return (
    <section className="card-box">
      {SHUFFLED_IMAGES.map((image, index) => (
        <Card
          key={index}
          imageSource={image}
          altText={`${image.slice(8, image.length - 4)} Card`}
        />
      ))}
    </section>
  );
}

export default AllCards;
