'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto flex flex-wrap justify-between items-center p-4 md:p-6">
        <div className="flex items-center">
          <Link legacyBehavior href="/">
            <a>
              <Image src='https://picsum.photos/500/198' alt="Traditional Health Center" width={64} height={64} />
            </a>
          </Link>
        </div>
        <button
          className="block md:hidden border border-white rounded px-2 py-1 ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-wrap items-center justify-end text-lg`}
        >
          <li className="mr-4">
            <Link legacyBehavior href="/about">
              <a className="hover:text-gray-400">About</a>
            </Link>
          </li>
          <li className="mr-4">
            <Link legacyBehavior href="/events">
              <a className="hover:text-gray-400">Events</a>
            </Link>
          </li>
          <li className="mr-4">
            <Link legacyBehavior href="/next-steps">
              <a className="hover:text-gray-400">Next Steps</a>
            </Link>
          </li>
          <li className="mr-4">
            <Link legacyBehavior href="/watch-live">
              <a className="hover:text-gray-400">Watch Live</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/contact">
              <a className="hover:text-gray-400">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
