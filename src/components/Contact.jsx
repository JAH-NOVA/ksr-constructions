 function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-slate-100"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Get a Free Quote
        </h2>

        <form className="bg-white p-8 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded mb-4"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded mb-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded mb-4"
          />

          <select
            className="w-full p-3 border rounded mb-4"
          >
            <option>Residential Construction</option>
            <option>Commercial Construction</option>
            <option>Renovation</option>
            <option>Interior Works</option>
          </select>

          <textarea
            rows="5"
            placeholder="Tell us about your project..."
            className="w-full p-3 border rounded mb-4"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold"
          >
            Request Free Quote
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;