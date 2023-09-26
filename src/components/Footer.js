'use client';

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <Link legacyBehavior href="/">
            <a>
              <Image src='https://picsum.photos/64/64' alt="Nabhiyog Foundation" width={64} height={64} />
            </a>
          </Link>
          <div className="flex items-center">
          <p className="text-lg font-semibold">Follow us on social media</p>
            <a
              href="https://www.facebook.com/sonakshsaraswat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl mx-4 hover:text-gray-400"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/sonaksh_s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl mr-4 hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.twitter.com/sonakshsaraswat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <ul className="w-full md:w-auto mb-8 md:mb-0">
            <li className="mb-2">
              <Link legacyBehavior href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link legacyBehavior href="/events">
                <a>Events</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link legacyBehavior href="/next-steps">
                <a>Next Steps</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <div className="mb-8 md:mb-0">
            <p className="text-lg font-semibold mb-2">Location</p>
            <p>Lorem Ipsum, Coimbatore</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Centre Timings</p>
            <ul>
              <li className="mb-2">
                <p className="text-gray-400">Sundays at 10AM & 1PM</p>
              </li>
              <li>
                <p className="text-gray-400">Wednesdays at 7:30PM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;