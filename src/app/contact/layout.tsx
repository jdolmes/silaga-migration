import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Silaga Migration Advisory",
  description: "Book a consultation or get in touch with Silaga Migration Advisory for expert Australian visa and migration advice.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
