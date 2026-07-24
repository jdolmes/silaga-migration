import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SILAGA Migration",
  description: "Book a consultation or get in touch with SILAGA Migration for expert Australian work visa and employer sponsorship advice.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
