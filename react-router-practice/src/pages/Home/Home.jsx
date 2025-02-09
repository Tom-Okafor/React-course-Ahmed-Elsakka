import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="h-dvh bg-[linear-gradient(to_right_top,#00000055,#00000099),url(homeImage.jpeg)] bg-no-repeat bg-cover bg-center *:text-white flex items-center">
      <div className="flex flex-col gap-2.5 p-2.5">
        <h1 className="bold font-serif text-4xl md:text-6xl tracking-widest uppercase">
          Home Supplies
        </h1>
        <h3>
          Quality You Can Trust | Designs That Inspire | Unmatched Performance
        </h3>

        <p>
          Blending innovation and craftsmanship to create the perfect home
          equipment for your living spaces. From state-of-the-art kitchen
          appliances to stylish and functional furniture, we offer everything
          you need to turn your house into a dream home.
        </p>

        <p>
          Experience the difference with our meticulously crafted products,
          designed to enhance your everyday life. Explore our collection and
          find the perfect pieces to complement your unique style and needs.
        </p>

        <div className="flex gap-4 *:border-2">
          <Link to="about">About us</Link>
          <Link to="contact">Contact Us</Link>
          <Link to="products">Our Products</Link>
        </div>
      </div>
    </main>
  );
}
