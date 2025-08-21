import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Reise Blog</h3>
            <p className="text-gray-300 text-sm">
              Share your travel experiences and discover amazing destinations around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/home" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog/create" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Create Blog
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm">
              Email: contact@reiseblog.com
            </p>
            <p className="text-gray-300 text-sm">
              Follow us on social media for travel tips and inspiration.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Reise Blog. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
