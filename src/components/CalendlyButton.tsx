"use client";

interface CalendlyButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function CalendlyButton({ className = "", children }: CalendlyButtonProps) {
  const openCalendly = () => {
    // @ts-expect-error Calendly is loaded via external script
    window.Calendly?.initPopupWidget({ url: 'https://calendly.com/silagaco/meeting' });
  };

  return (
    <button onClick={openCalendly} className={className}>
      {children}
    </button>
  );
}
