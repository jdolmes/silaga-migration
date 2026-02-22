"use client";

import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = () => {
    // @ts-expect-error Calendly is loaded via external script
    window.Calendly?.initPopupWidget({ url: 'https://calendly.com/silagaco/meeting' });
  };

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      <nav className="bg-[var(--color-offwhite)] border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col">
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--color-navy)]">
                Silaga
              </span>
              <span className="font-[family-name:var(--font-inter)] text-xs text-[var(--color-charcoal)] tracking-wide -mt-1">
                Migration Advisory
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-[var(--color-charcoal)] hover:text-[var(--color-navy)] font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[var(--color-charcoal)] hover:text-[var(--color-navy)] font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-[var(--color-charcoal)] hover:text-[var(--color-navy)] font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-[var(--color-charcoal)] hover:text-[var(--color-navy)] font-medium transition-colors"
              >
                Contact
              </Link>
              <button onClick={openCalendly} className="btn-gold">
                Book a Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[var(--color-navy)]"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-[var(--color-charcoal)] hover:text-[var(--color-navy)] font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-[var(--color-charcoal)] hover:text-[var(--color-navy)] font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-[var(--color-charcoal)] hover:text-[var(--color-navy)] font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-[var(--color-charcoal)] hover:text-[var(--color-navy)] font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openCalendly();
                  }}
                  className="btn-gold text-center"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
