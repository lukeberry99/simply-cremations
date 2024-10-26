"use client";

import { APP_NAME } from "@/lib/consts";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between p-4 md:p-6">
        <div className="text-2xl font-bold">{APP_NAME}</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Prices
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-4">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <X />
          </button>
          <nav className="mt-12">
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-xl text-gray-600 hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl text-gray-600 hover:text-gray-900"
                >
                  Prices
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl text-gray-600 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
