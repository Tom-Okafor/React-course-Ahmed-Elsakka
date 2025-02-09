import { Link } from "react-router-dom";

export default function Home() {
  const paragraphStyles =
    "text-sm text-[#ffffffaa] md:text-lg max-w-prose [word-spacing:3px] tracking-wider leading-[1.5] backdrop-blur-[2px]";
  return (
    <main className="h-dvh bg-[linear-gradient(to_right_top,#00000055,#00000099),url(homeImage.jpeg)] bg-no-repeat bg-cover bg-center *:text-white flex items-center">
      <div className="flex flex-col gap-2.5 px-8">
        <h1 className="font-extrabold font-serif text-4xl md:text-6xl tracking-widest uppercase text-green-400">
          Home Supplies
        </h1>
        <h3 className="tracking-widest text-xl md:text-3xl max-w-[45ch]">
          Quality You Can Trust | Designs That Inspire | Unmatched Performance
        </h3>

        {/* <p className={paragraphStyles}>
          Blending innovation and craftsmanship to create the perfect home
          equipment for your living spaces. From state-of-the-art kitchen
          appliances to stylish and functional furniture, we offer everything
          you need to turn your house into a dream home.
        </p> */}

        <p className={paragraphStyles}>
          Experience the difference with our meticulously crafted products,
          designed to enhance your everyday life. Explore our collection and
          find the perfect pieces to complement your unique style and needs.
        </p>

        <div className="flex gap-4 *:border-2">
          <Link to="about">About us</Link>
          <Link to="products">Our Products</Link>
          <Link to="contact">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
