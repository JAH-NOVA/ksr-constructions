 function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          <span className="text-yellow-500">KSR</span> CONSTRUCTIONS
        </h2>

        <p className="text-gray-300 mb-8">
          Building Dreams With Quality & Trust
        </p>

         <div className="grid md:grid-cols-3 gap-6 mb-10 text-center">
          <div>
            <h3 className="font-bold text-xl">📞 Phone</h3>
            <p>9550677417</p>
          </div>

          <div>
            <h3 className="font-bold text-xl">📧 Email</h3>
            <p>srinivasarao292923@gmail.com</p>
          </div>

          <div>
            <h3 className="font-bold text-xl">📍 Location</h3>
            <p>Vijayawada, Andhra Pradesh</p>
          </div>
        </div>

        <hr />

        <p className="text-center mt-6">
          © 2026 KSR Constructions. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;