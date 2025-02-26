export default function Contact() {
  return (
    <section className="flex items-center flex-col gap-8 py-12 show">
      <h2 className="uppercase text-green-600 font-black text-3xl md:text-6xl font-serif tracking-widest py-4 px-8 about-h1">
        Contact Us
      </h2>
      <p className="text-zinc-600 text-lg md:text-2xl font-semibold font-serif max-w-[40ch] text-center show-text">
        Reach to us and get a swift response and/or feedback from our customer
        care representatives.
      </p>
      <form className="flex flex-col items-center *:border-2 *:rounded-lg w-[60vw] max-w-[500px] *:w-full gap-4 *:py-4 *:px-4 *:border-green-500 *:shadow-md show">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-800 hover:text-white duration-300 text-xl font-semibold font-mono tracking-widest text-green-950"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
