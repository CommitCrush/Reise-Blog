import Link from "next/link";
import { getSessionUser } from "../../lib/auth";
import LogoutButton from "./logoutButton";

export default async function Navbar() {
  const user = await getSessionUser();

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand/Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Reise Blog
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/home" 
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            
            {user && (
              <>
                <Link 
                  href="/blog/create" 
                  className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Create Blog
                </Link>
                <Link 
                  href="/profile" 
                  className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </Link>
                <LogoutButton />
              </>
            )}
            
            {!user && (
              <Link 
                href="/auth" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}