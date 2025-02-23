export default function About() {
  return (
    <section className="about-section space-y-4">
      <h1 className="uppercase text-green-600 font-black text-3xl md:text-8xl font-[yatra_one] tracking-widest py-4 px-8 about-h1">
        about us
      </h1>
      <img
        src="aboutImage.jpg"
        alt="household appliance image"
        className="object-cover w-full h-screen about-img flex mx-auto"
      />
      <div className="space-y-8 w-6/7 mx-auto  *:text-xl *:leading-[150%] *:tracking-[1.5px] *:max-w-prose ">
        <h1 className="uppercase text-green-400 font-black text-2xl md:text-5xl font-serif tracking-tighter py-4">
          about us
        </h1>
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

        <div className="mt-8">
          <h2 className="text-xl uppercase md:text-3xl font-serif font-black mb-4 text-green-500">
            why choose us?
          </h2>
          <ol className="space-y-8 list-decimal list-inside">
            <li>
              <strong className="capitalize">quality products:</strong>We source
              our appliances from renowned manufacturers, ensuring you get the
              highest quality products that stand the test of time.
            </li>
            <li>
              <strong className="capitalize">innovative solutions:</strong>Our
              products feature the latest technology to enhance your lifestyle,
              making your household chores simpler and more efficient.
            </li>
            <li>
              <strong className="capitalize">customer-centric approach:</strong>
              Your satisfaction is our top priority. Our dedicated customer
              support team is always ready to assist you with any queries or
              concerns.
            </li>
            <li>
              <strong className="capitalize">sophisticated style:</strong> We do
              not just offer a wide range and variety of household appliances,
              we also bring aesthetic bliss with us. Get rid of boring,
              commonplacd items and fill your home with jaw-dropping, yet highly
              functional gadgets.
            </li>
            <li>
              <strong className="capitalize">eco-friendly options:</strong> We
              are committed to sustainability and offer a range of eco-friendly
              appliances that help reduce your carbon footprint.
            </li>
          </ol>
        </div>

        <p>
          Join us in our mission to create a better, more comfortable living
          space for you and your loved ones. Discover the perfect blend of
          style, functionality, and innovation with [Your Company Name].
        </p>
      </div>
    </section>
  );
}
