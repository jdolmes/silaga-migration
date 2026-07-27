import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--color-navy)] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05]">
            Find Your Pathway.
            <br />
            Then Walk It With Us.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Search your occupation, understand your work visa options, and partner
            with a MARA-registered agent who takes you from eligibility to grant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton className="btn-gold inline-block text-lg">
              Book a Consultation
            </CalendlyButton>
            <a
              href="https://skillindex.au"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light inline-block text-lg"
            >
              Check Your Eligibility
            </a>
          </div>
        </div>
      </section>

      {/* Audience Blocks */}
      <section className="py-10 md:py-16 bg-[var(--color-offwhite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Skilled Workers */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[var(--color-navy)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-[var(--color-navy)] mb-4">
                For Skilled Workers
              </h2>
              <p className="text-[var(--color-charcoal)] mb-6">
                Ready to bring your skills to Australia? We guide you through
                employer-sponsored and skilled migration pathways — from occupation
                eligibility to visa grant.
              </p>
              <Link
                href="/services"
                className="text-[var(--color-gold)] font-semibold hover:underline inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* For Employers */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[var(--color-navy)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-[var(--color-navy)] mb-4">
                For Employers
              </h2>
              <p className="text-[var(--color-charcoal)] mb-6">
                Sponsoring overseas talent? We handle nomination, labour market
                testing, compliance, and Department of Home Affairs correspondence —
                so your workforce plans stay on track.
              </p>
              <Link
                href="/services"
                className="text-[var(--color-gold)] font-semibold hover:underline inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SILAGA */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-12">
            Why Choose SILAGA
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Employer-Sponsored Specialists */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-offwhite)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] text-lg mb-2">
                Employer-Sponsored Specialists
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                Deep expertise in 482, 186, and 494 employer-sponsored visa pathways —
                from nomination to grant.
              </p>
            </div>

            {/* Compliance & Home Affairs Liaison */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-offwhite)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] text-lg mb-2">
                Compliance &amp; Home Affairs Liaison
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                We handle labour market testing, sponsorship obligations, and
                Department of Home Affairs correspondence — so your business stays
                compliant.
              </p>
            </div>

            {/* End-to-End Support */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-offwhite)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] text-lg mb-2">
                End-to-End Support
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                From occupation check to visa grant, we manage the full pathway — no
                handoffs, no guesswork.
              </p>
            </div>

            {/* Registered Migration Agent */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-offwhite)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] text-lg mb-2">
                Registered Migration Agent
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                Fully registered with MARA (MARN 2619271), ensuring every step is
                professional, compliant, and accountable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Occupation Tool Feature Section */}
      <section className="py-10 md:py-16 bg-[var(--color-offwhite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              {/* Free Resource Badge */}
              <div className="inline-flex items-center gap-2 bg-[var(--color-gold)] rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-semibold">Free Resource</span>
              </div>

              {/* Headline */}
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
                Not Sure If Your Occupation Qualifies?
              </h2>

              {/* Description */}
              <p className="text-[var(--color-charcoal)] text-lg mb-6 leading-relaxed">
                We built Australia&apos;s most comprehensive occupation search tool. Check visa eligibility across 3,261 occupations, covering employer sponsored, skilled migration, regional and more — instantly, for free.
              </p>

              {/* Feature Chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                  <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[var(--color-charcoal)] text-sm font-medium">3,261 Occupations</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                  <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[var(--color-charcoal)] text-sm font-medium">Multiple Visa Pathways</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                  <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[var(--color-charcoal)] text-sm font-medium">Free & Instant</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://skillindex.au"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 text-lg"
              >
                Search Occupations Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {/* Note */}
              <p className="text-gray-500 text-sm mt-4">
                Free to use. No sign up required.
              </p>
            </div>

            {/* Right Column - Mock Search Interface */}
            <div className="lg:pl-8">
              <div className="relative overflow-hidden bg-[var(--color-navy)] rounded-xl shadow-2xl p-6 max-w-md mx-auto lg:mx-0 lg:ml-auto">
                {/* Mock Search Bar */}
                <div className="bg-white rounded-lg flex items-center px-4 py-3 mb-4">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-gray-400 text-sm">Search your occupation...</span>
                </div>

                {/* Mock Results */}
                <div className="space-y-3">
                  {/* Result 1 */}
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="bg-[var(--color-gold)] text-white text-xs font-bold px-2 py-1 rounded">
                          261313
                        </span>
                        <span className="text-[var(--color-charcoal)] text-sm font-medium">Software Engineer</span>
                      </div>
                      <span className="bg-[#16a34a] text-white text-xs font-medium px-2 py-1 rounded">
                        Eligible
                      </span>
                    </div>
                  </div>

                  {/* Result 2 */}
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="bg-[var(--color-gold)] text-white text-xs font-bold px-2 py-1 rounded">
                          252311
                        </span>
                        <span className="text-[var(--color-charcoal)] text-sm font-medium">Registered Nurse</span>
                      </div>
                      <span className="bg-[#16a34a] text-white text-xs font-medium px-2 py-1 rounded">
                        Eligible
                      </span>
                    </div>
                  </div>

                  {/* Result 3 */}
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="bg-[var(--color-gold)] text-white text-xs font-bold px-2 py-1 rounded">
                          233211
                        </span>
                        <span className="text-[var(--color-charcoal)] text-sm font-medium">Civil Engineer</span>
                      </div>
                      <span className="bg-[#16a34a] text-white text-xs font-medium px-2 py-1 rounded">
                        Eligible
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-4 pt-4 border-t border-white border-opacity-10 flex items-center justify-between">
                  <span className="text-[#9ca3af] text-xs">3,261 occupations indexed</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-[#16a34a] rounded-full"></div>
                    <span className="text-[#9ca3af] text-xs">Live data</span>
                  </div>
                </div>

                {/* Progressive blur: signals more results below the visible 3 */}
                <ProgressiveBlur position="bottom" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--color-navy)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                Check Eligibility
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                Already used our free tool above? Great, you&apos;re one step closer.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--color-navy)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                Consultation
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                Book a session with a MARA-registered agent to map your pathway.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--color-navy)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                Application &amp; Compliance
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                We handle nomination, documentation, and Home Affairs correspondence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--color-navy)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                Visa Grant
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                Ongoing support through to approval and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 md:py-16 bg-[var(--color-navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Move Forward?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Book a consultation with a registered migration agent and take the next
            step in your work visa journey.
          </p>
          <CalendlyButton className="btn-gold inline-block text-lg">
            Book a Consultation
          </CalendlyButton>
        </div>
      </section>
    </>
  );
}
