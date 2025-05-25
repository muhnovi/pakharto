"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white pt-16">
          <div className="absolute right-4 top-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center space-y-8 text-center">
            <a
              href="#home"
              className="text-xl font-medium text-amber-600 hover:text-amber-700"
              onClick={toggleMenu}
            >
              Home
            </a>
            {/* <a href="#about" className="text-xl font-medium hover:text-amber-600" onClick={toggleMenu}>
              About
            </a> */}
            <a
              href="#menu"
              className="text-xl font-medium hover:text-amber-600"
              onClick={toggleMenu}
            >
              Menu
            </a>
            <a
              href="#testimonials"
              className="text-xl font-medium hover:text-amber-600"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-xl font-medium hover:text-amber-600"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button className="mt-4 bg-amber-600 hover:bg-amber-700">
              <a
                href="https://wa.me/+628112656584?text=Hello Pak. Harto! Saya mau mie ayam."
                target="_blank"
              >
                Order Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
