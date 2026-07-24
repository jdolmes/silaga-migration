import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "About | SILAGA Migration",
  description: "Learn about SILAGA Migration and our commitment to providing MARA-registered migration advice for skilled workers and employers.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--color-navy)] text-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold mb-6">
            About SILAGA
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for professional migration advice and visa services
          </p>
        </div>
      </section>

      {/* Personal Bio Section */}
      <section className="py-10 md:py-16 bg-[var(--color-offwhite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/francis-photo.jpg"
                  alt="Francis Takuto Ichihara - Registered Migration Agent"
                  width={384}
                  height={480}
                  className="rounded-xl shadow-lg object-cover w-72 h-80 md:w-96 md:h-[480px]"
                  priority
                />
              </div>
            </div>

            {/* Bio Content */}
            <div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">
                Francis Takuto Ichihara
              </h2>
              <p className="text-[var(--color-gold)] font-semibold mb-6">
                Registered Migration Agent | MARN 2619271
              </p>
              <div className="space-y-4 text-[var(--color-charcoal)]">
                <p>
                  Over the past decade, I lived and worked across Southeast Asia, helping skilled professionals navigate pathways into the Japanese market. That experience gave me a front-row seat to something the world doesn&apos;t talk about enough — there is no shortage of talented, hardworking people who are ready to contribute, grow and build a life abroad. What holds them back is rarely capability. It&apos;s complexity, opacity and a lack of trustworthy guidance.
                </p>
                <p>
                  Watching that pattern repeat itself is what brought me to Australian migration. Australia is one of the most opportunity-rich destinations in the world for skilled professionals, yet the visa system remains deeply complex and often misunderstood. I founded Silaga Migration Advisory to change that — to be the kind of advisor I wished more people had access to. Transparent, ethical, and genuinely invested in your outcome.
                </p>
                <p>
                  I also built one of Australia&apos;s most comprehensive occupation search tools, used by thousands of people researching their visa eligibility. That depth of knowledge in Australia&apos;s occupation and visa framework is what I bring to every client engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Australian Migration */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
              Why I Focus on Australian Migration
            </h2>
            <div className="text-[var(--color-charcoal)] space-y-4">
              <p>
                Australia offers incredible opportunities for skilled workers and the businesses that need them. However, navigating the visa system can be complex and overwhelming without expert guidance.
              </p>
              <p>
                Too often, I&apos;ve seen capable people miss opportunities — not because they weren&apos;t qualified, but because they didn&apos;t have someone in their corner who truly understood the system. That&apos;s what drives my work: making sure talent isn&apos;t wasted due to bureaucratic confusion, and businesses aren&apos;t held back by compliance complexity.
              </p>
              <p>
                At SILAGA, I combine thorough knowledge of migration law with a client-focused approach to ensure every application — and every sponsorship — is given the attention and expertise it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARA Compliance Section */}
      <section className="py-10 md:py-16 bg-[var(--color-offwhite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[var(--color-navy)] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-[var(--color-navy)]">
                  MARA Registered
                </h2>
                <p className="text-[var(--color-charcoal)]">
                  Professional Standards & Compliance
                </p>
              </div>
            </div>

            <div className="space-y-4 text-[var(--color-charcoal)] mb-8">
              <p>
                Silaga Migration Advisory is a registered migration agent with the
                Office of the Migration Agents Registration Authority (OMARA). As a
                registered agent, I am bound by the Code of Conduct for registered
                migration agents and committed to providing ethical, professional
                migration services.
              </p>
              <p className="font-semibold text-[var(--color-navy)]">
                MARN: 2619271
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.mara.gov.au/get-help-visa-subsite/FIles/consumer_guide_english.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center"
              >
                MARA Consumer Guide
              </a>
              <a
                href="https://www.mara.gov.au/tools-for-agents-subsite/Files/code-of-conduct.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center"
              >
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-[var(--color-navy)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Discuss Your Migration Journey
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Book a consultation to explore your visa options and receive personalised
            advice tailored to your circumstances.
          </p>
          <CalendlyButton className="btn-gold inline-block text-lg">
            Book a Consultation
          </CalendlyButton>
        </div>
      </section>
    </>
  );
}
