export default function About() {
  return (
    <section className="about-section space-y-8">
      <h1 className="uppercase text-center text-green-400 font-black text-2xl md:text-5xl font-serif tracking-tighter py-4">
        about us
      </h1>
      <img src="" alt="household appliance image" className="w-full" />

      <div className="space-y-4 w-6/7 mx-auto *:text-green-800 *:text-xl *:leading-[150%] *:tracking-[1.5px] *:max-w-prose ">
        <p className="">
          Blending innovation and craftsmanship to create the perfect home
          equipment for your living spaces. From state-of-the-art kitchen
          appliances to stylish and functional furniture, we offer everything
          you need to turn your house into a dream home.
        </p>
        <p className="">
          Experience the difference with our meticulously crafted products,
          designed to enhance your everyday life. Explore our collection and
          find the perfect pieces to complement your unique style and needs.
        </p>
      </div>
    </section>
  );
}
