import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--color-navy)] text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Pathway to Australia,
            <br />
            Guided by Experts
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Silaga Migration Advisory provides personalised, professional migration
            advice for individuals, families and employers across all Australian visa
            pathways.
          </p>
          <CalendlyButton className="btn-gold inline-block text-lg">
            Book a Consultation
          </CalendlyButton>
        </div>
      </section>

      {/* Two-Path Split */}
      <section className="py-10 md:py-16 bg-[var(--color-offwhite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Individuals & Families */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[var(--color-navy)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[var(--color-navy)] mb-4">
                For Individuals & Families
              </h2>
              <p className="text-[var(--color-charcoal)] mb-6">
                Whether you&apos;re looking to work, study, or reunite with loved ones in
                Australia, we provide expert guidance through skilled, family, and
                student visa pathways.
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
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[var(--color-navy)] mb-4">
                For Employers
              </h2>
              <p className="text-[var(--color-charcoal)] mb-6">
                Need skilled workers from overseas? We help businesses navigate
                employer-sponsored visas, ensuring compliance and smooth processing for
                your workforce needs.
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

      {/* Why Silaga */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-12">
            Why Choose Silaga
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                Fully registered with MARA, ensuring professional and compliant advice.
              </p>
            </div>

            {/* Personalised Advice */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-offwhite)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] text-lg mb-2">
                Personalised Advice
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                Every case is unique. We tailor our approach to your specific circumstances.
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
                From initial assessment to visa grant, we&apos;re with you every step of the way.
              </p>
            </div>

            {/* Employer Sponsored Specialists */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-offwhite)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] text-lg mb-2">
                Employer Sponsored Specialists
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                Deep expertise in 482, 186, and 494 employer-sponsored visa pathways.
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
                <svg className="w-4 h-4 text-[var(--color-navy)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
                </svg>
                <span className="text-[var(--color-navy)] text-sm font-semibold">Free Resource</span>
              </div>

              {/* Headline */}
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
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
                href="https://migration-tool-eight.vercel.app/"
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
              <div className="bg-[var(--color-navy)] rounded-xl shadow-2xl p-6 max-w-md mx-auto lg:mx-0 lg:ml-auto">
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
                        <span className="bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold px-2 py-1 rounded">
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
                        <span className="bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold px-2 py-1 rounded">
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
                        <span className="bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold px-2 py-1 rounded">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Silaga */}
      <section className="py-10 md:py-16 bg-[var(--color-offwhite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-12">
            Why Trust Silaga
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* MARA Registered Agent */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-navy)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-navy)] text-lg mb-2">
                    MARA Registered Agent
                  </h3>
                  <p className="text-[var(--color-charcoal)] text-sm">
                    Fully registered with the Migration Agents Registration Authority (MARA). MARN 2619271.
                  </p>
                </div>
              </div>
            </div>

            {/* Qualified & Compliant */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-navy)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-navy)] text-lg mb-2">
                    Qualified & Compliant
                  </h3>
                  <p className="text-[var(--color-charcoal)] text-sm">
                    Bound by the MARA Code of Conduct, ensuring ethical, professional and transparent advice at all times.
                  </p>
                </div>
              </div>
            </div>

            {/* Built for This Industry */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-navy)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-navy)] text-lg mb-2">
                    Built for This Industry
                  </h3>
                  <p className="text-[var(--color-charcoal)] text-sm">
                    Creator of Australia&apos;s leading occupation search tool, used by thousands researching their visa eligibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Personalised Service */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-navy)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-navy)] text-lg mb-2">
                    Personalised Service
                  </h3>
                  <p className="text-[var(--color-charcoal)] text-sm">
                    No call centres. No handoffs. You work directly with your migration agent from first consultation to visa grant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 md:py-16 bg-[var(--color-navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Australian Journey?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Take the first step towards your Australian dream. Book a consultation with
            our expert migration team today.
          </p>
          <CalendlyButton className="btn-gold inline-block text-lg">
            Book a Consultation
          </CalendlyButton>
        </div>
      </section>
    </>
  );
}
