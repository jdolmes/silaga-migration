import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                Silaga
              </span>
              <span className="font-[family-name:var(--font-inter)] text-xs text-gray-300 tracking-wide -mt-1">
                Migration Advisory
              </span>
            </div>
            <p className="text-gray-300 text-sm max-w-md">
              Professional migration advice for individuals, families and employers
              across all Australian visa pathways.
            </p>
            <div className="mt-4">
              <Image
                src="/marn-emblem.png"
                alt="MARN 2619271 - Registered Migration Agent"
                width={140}
                height={140}
                className="rounded"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[var(--color-gold)] text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[var(--color-gold)] text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[var(--color-gold)] text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[var(--color-gold)] text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="font-semibold text-white mb-4">Compliance</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.mara.gov.au/get-help-visa-subsite/FIles/consumer_guide_english.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--color-gold)] text-sm transition-colors"
                >
                  MARA Consumer Guide
                </a>
              </li>
              <li>
                <a
                  href="https://www.mara.gov.au/tools-for-agents-subsite/Files/code-of-conduct.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--color-gold)] text-sm transition-colors"
                >
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Silaga Migration Advisory. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            <a
              href="https://silagaco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-gold)] transition-colors"
            >
              silagaco.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
