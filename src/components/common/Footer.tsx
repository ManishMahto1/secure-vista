import Link from 'next/link';

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  

  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
            <div className="mb-3 sm:mb-0">
              © {new Date().getFullYear()} secure vista Pvt. Ltd.
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-900">Connect With Us:</span>
              <div className="flex space-x-3">
                {[
                  { icon: FaFacebookF, label: 'Facebook' },
                  { icon: FaTwitter, label: 'Twitter' },
                  { icon: FaYoutube, label: 'YouTube' },
                  { icon: FaInstagram, label: 'Instagram' },
                  { icon: FaLinkedinIn, label: 'LinkedIn' },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href="#"
                    aria-label={social.label}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;