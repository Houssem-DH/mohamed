// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/">
           Your Logo
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4 text-white">
          <Link href="/">
          Home
          </Link>
          <Link href="/about">
          About
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
