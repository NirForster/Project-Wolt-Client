import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 w-full">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 ">
        {/* Logo and App Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Wolt</h2>
          <div className="flex flex-col space-y-4">
            <a href="#" className="flex items-center space-x-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1024px-Apple_logo_black.svg.png"
                alt="App Store"
                className="w-6"
              />
              <span>Download on the App Store</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Play_Store_badge_EN.svg/1024px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="w-6"
              />
              <span>Get it on Google Play</span>
            </a>
          </div>
        </div>

        {/* Partner with Wolt */}
        <div>
          <h3 className="font-bold mb-4">Partner with Wolt</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                For couriers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                For merchants
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                For affiliates
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                What we stand for
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sustainability
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Investors
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold mb-4">Useful links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Newsroom
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Speak up
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Promo codes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Road safety
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Developers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Product Return Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <div className="flex items-center space-x-4">
          <span>© Wolt 2014–2025</span>
          <a href="#" className="hover:underline">
            Accessibility Statement
          </a>
          <a href="#" className="hover:underline">
            User Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Statement
          </a>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          <span>Israel</span>
          <span>English</span>
          <span>🌙 Theme</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
