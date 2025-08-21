import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800 mt-10">
      <div className="container max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* <Link href="/" className="text-xl font-bold text-primary">
              Portfolio&trade;
            </Link> */}
            <Link href="/" className="text-2xl font-bold bg-gradient-to-l from-foreground to-primary bg-clip-text text-transparent opacity-95">
            Portfolio&trade;
          </Link>
          
            <p className="text-sm text-white/60 mt-2">
              {new Date().getFullYear()} Portfolio. All rights reserved Make By
              Eng.Mohamed Hassan Front-End Developer
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors 
          duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamedhassanfrontend/"
              target="_blank"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors 
          duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/mohamed.nedved.52/"
              target="_blank"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors 
          duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="/"
              target="_blank"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors 
          duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
