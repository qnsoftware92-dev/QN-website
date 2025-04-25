export default function Contact() {
  return (
    <div className="bg-background">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-2xl font-bold md:text-4xl text-primary animate-slide-down mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-up">
            We'd love to hear from you! Whether you have a project in mind, need
            a tech partner, or just want to explore possibilities — our team is
            ready to help.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-primary transform hover:scale-105 transition-transform duration-300 animate-fade-in-left">
            <h2 className="text-xl font-semibold mb-4 text-primary">
              General Inquiries
            </h2>
            <p className="mb-2">
              <span className="font-medium">Email: </span>
              <a
                href="mailto:info@company.com"
                className="text-primary hover:text-blue-800 transition-colors duration-300"
              >
                info@company.com
              </a>
            </p>
            <p>
              <span className="font-medium">Phone: </span>
              <a
                href="tel:+84366756552"
                className="text-primary hover:text-blue-800 transition-colors duration-300"
              >
                +84 366 756 552
              </a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-primary transform hover:scale-105 transition-transform duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">
              Head Office
            </h2>
            <address className="not-italic">
              <p className="font-medium">Viet Nam Office</p>
              <p className="text-gray-600">
                16 Thanh Luong 3 Street,
                <br />
                District Cam Le, Danang City
              </p>
            </address>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-primary transform hover:scale-105 transition-transform duration-300 animate-fade-in-right">
            <h2 className="text-xl font-semibold mb-4 text-primary">
              Working Hours
            </h2>
            <div>
              <p className="font-medium">Monday - Friday</p>
              <p className="text-gray-600">9:00 AM - 6:00 PM (GMT+7)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
