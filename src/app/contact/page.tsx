"use client";

import Script from "next/script";
import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visaType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mykdnwyn", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          visaType: formData.visaType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", visaType: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Hero Section */}
      <section className="bg-[var(--color-navy)] text-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your migration journey? Book a consultation or reach out directly.
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="py-12 md:py-20 bg-[var(--color-offwhite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Column - Book a Consultation */}
            <div className="bg-[var(--color-navy)] rounded-xl p-8 md:p-12 flex flex-col justify-center text-center lg:text-left">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-white mb-4">
                Book a Consultation
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                Schedule a 1-hour consultation with Francis directly. Web conferencing details provided upon confirmation.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    // @ts-expect-error Calendly is loaded via external script
                    window.Calendly?.initPopupWidget({ url: 'https://calendly.com/silagaco/meeting' });
                  }}
                  className="btn-gold text-lg px-8 py-4"
                >
                  Choose a Time
                </button>
              </div>

              {/* Decorative element */}
              <div className="mt-12 pt-8 border-t border-white border-opacity-10">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-400 text-xs">Registered Migration Agent</p>
                    <p className="text-white text-sm font-medium">MARN: 2619271</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-[var(--color-navy)] mb-6">
                Send Us a Message
              </h2>

              {submitStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-2">Message Sent</h3>
                  <p className="text-[var(--color-charcoal)]">
                    Thank you for your message. We will be in touch within 1 business day.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-6 text-[var(--color-gold)] font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--color-charcoal)] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-shadow"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--color-charcoal)] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-shadow"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[var(--color-charcoal)] mb-2"
                    >
                      Phone <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-shadow"
                      placeholder="+61 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="visaType"
                      className="block text-sm font-medium text-[var(--color-charcoal)] mb-2"
                    >
                      Visa Type of Interest *
                    </label>
                    <select
                      id="visaType"
                      name="visaType"
                      required
                      value={formData.visaType}
                      onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-shadow bg-white"
                    >
                      <option value="">Select a visa type</option>
                      <option value="skilled-migration">Skilled Migration</option>
                      <option value="employer-sponsored">Employer Sponsored</option>
                      <option value="sponsorship-compliance">Sponsorship & Compliance</option>
                      <option value="appeals-reviews">Appeals & Reviews</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--color-charcoal)] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-shadow resize-none"
                      placeholder="Tell us about your situation..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800 text-sm">
                        Something went wrong. Please try again or contact us directly.
                      </p>
                    </div>
                  )}

                  <p className="text-center text-gray-500 text-xs pt-2">
                    Your information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
