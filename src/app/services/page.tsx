import type { Metadata } from "next";
import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "Services | Silaga Migration Advisory",
  description: "Explore our comprehensive Australian visa and migration services including skilled migration, employer sponsored visas, family visas, student visas, and more.",
};

const services = [
  {
    title: "Skilled Migration",
    subtitle: "Subclasses 189, 190, 491",
    description:
      "For skilled workers looking to migrate to Australia independently or through state nomination. We assess your eligibility, help with skills assessments, and guide you through the points-based system.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Employer Sponsored",
    subtitle: "Subclasses 482, 186, 494",
    description:
      "Comprehensive support for businesses sponsoring overseas workers and employees seeking employer-sponsored visas. We handle nominations, accreditations, and visa applications.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Family Visas",
    subtitle: "Partner, Parent & Child Visas",
    description:
      "Reunite with your loved ones in Australia. We assist with partner visas, parent visas, child visas, and other family stream applications with care and attention to detail.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Student Visas",
    subtitle: "Subclass 500",
    description:
      "Planning to study in Australia? We help international students navigate the student visa process, including Genuine Student requirements and course enrolment guidance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    title: "Visitor Visas",
    subtitle: "Tourism & Business Visits",
    description:
      "Whether for tourism, visiting family, or business purposes, we assist with visitor visa applications to ensure a smooth entry into Australia.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Appeals & Reviews",
    subtitle: "AAT & Ministerial Intervention",
    description:
      "If your visa application has been refused, we can assess your options for Administrative Appeals Tribunal (AAT) review or ministerial intervention requests.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--color-navy)] text-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive migration services tailored to your needs, from skilled
            migration to employer sponsorship and family reunification
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 md:py-16 bg-[var(--color-offwhite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[var(--color-offwhite)] rounded-full flex items-center justify-center mb-6 text-[var(--color-gold)]">
                  {service.icon}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--color-navy)] mb-1">
                  {service.title}
                </h3>
                <p className="text-[var(--color-gold)] text-sm font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-[var(--color-charcoal)] text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-navy)] text-center mb-12">
            How We Work
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--color-navy)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                Initial Consultation
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                We discuss your goals, assess your circumstances, and identify the best
                visa pathway for you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--color-navy)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                Strategy & Planning
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                We develop a tailored strategy and provide a clear roadmap for your
                visa application.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--color-navy)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                Application Preparation
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                We prepare and lodge your application, ensuring all documentation meets
                requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--color-navy)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                Ongoing Support
              </h3>
              <p className="text-[var(--color-charcoal)] text-sm">
                We manage communications with the Department and keep you informed
                until your visa is granted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Occupation Tool Feature Banner */}
      <section className="py-10 md:py-16 bg-[var(--color-navy)] relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-gold)] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Free Resource Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--color-gold)] rounded-full px-4 py-1.5 mb-6">
            <svg className="w-4 h-4 text-[var(--color-navy)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
            </svg>
            <span className="text-[var(--color-navy)] text-sm font-semibold">Free Resource</span>
          </div>

          {/* Title */}
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Occupation Eligibility Search Tool
          </h2>

          {/* Description */}
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed opacity-90">
            Not sure if your occupation qualifies for an Australian visa? Before booking a consultation, explore our free tool to check visa eligibility across thousands of Australian occupations — including employer sponsored, skilled migration and more.
          </p>

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

          {/* Subtle Note */}
          <p className="text-gray-400 text-sm mt-4">
            Free to use. No sign up required.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-[var(--color-offwhite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
            Ready to Explore Your Options?
          </h2>
          <p className="text-[var(--color-charcoal)] text-lg max-w-2xl mx-auto mb-8">
            Book a consultation to discuss your visa pathway and receive expert guidance
            tailored to your specific circumstances.
          </p>
          <CalendlyButton className="btn-gold inline-block text-lg">
            Book a Consultation
          </CalendlyButton>
        </div>
      </section>
    </>
  );
}
