import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container px-6 mx-auto">
        {/* Footer Content Section */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-semibold text-orange-500">Cultural India</span>
            </a>
            <p className="text-sm text-gray-600">
              Discover the rich and diverse cultures of India. From music, dance, and cuisine to traditions and festivals, we bring you the best of India's cultural heritage.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Explore", "About Us", "Contact Us"].map((text) => (
                <li key={text}>
                  <a
                    href={`/${text.toLowerCase()}`}
                    className="text-sm text-gray-700 hover:text-orange-500 transition duration-300"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-orange-500 transition duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition duration-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul>
              <li className="text-sm text-gray-600">Email: contact@culturalindia.com</li>
              <li className="text-sm text-gray-600">Phone: +91 123 456 7890</li>
              <li className="text-sm text-gray-600">Address: Cultural India, New Delhi, India</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Cultural India. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
