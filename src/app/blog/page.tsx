import type { Metadata } from "next";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "Blog | SILAGA Migration",
  description: "Insights on Australian work visa pathways and employer sponsorship from SILAGA Migration.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--color-navy)] text-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold mb-6">
            Blog
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights on Australian work visa pathways and employer sponsorship.
          </p>
        </div>
      </section>

      {/* Featured + List Container (empty state) */}
      <section className="py-16 md:py-24 bg-[var(--color-offwhite)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow text-[var(--color-gold)] mb-4">Coming Soon</p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-[var(--color-navy)] mb-4">
            New Articles Coming Soon
          </h2>
          <p className="text-[var(--color-charcoal)] text-lg max-w-xl mx-auto">
            We&apos;re preparing insights on Australian work visa pathways and
            employer sponsorship. Check back here soon, or book a consultation to
            get answers today.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
            Ready to Move Forward?
          </h2>
          <p className="text-[var(--color-charcoal)] text-lg max-w-2xl mx-auto mb-8">
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
