import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9q8qcbn",
        "template_4q6dmw7",
        form.current,
        "ySs0nHbOpUtGstDqT"
      )
      .then(
        () => {
          alert("Quote Request Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send request");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-slate-100"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-6">
          Get a Free Quote
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Contact KSR Constructions for residential,
          commercial, renovation, and turnkey construction
          services across Andhra Pradesh.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10 text-center">

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">📞 Phone</h3>
            <p>9550677417</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">📧 Email</h3>
            <p>srinivasarao292923@gmail.com</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">📍 Location</h3>
            <p>Vijayawada, Andhra Pradesh</p>
          </div>

        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-xl shadow-lg"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded mb-4"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border rounded mb-4"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded mb-4"
            required
          />

          <select
            name="service"
            className="w-full p-3 border rounded mb-4"
          >
            <option>Residential Construction</option>
            <option>Commercial Construction</option>
            <option>Renovation</option>
            <option>Interior Works</option>
          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your project..."
            className="w-full p-3 border rounded mb-4"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            Request Free Quote
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;