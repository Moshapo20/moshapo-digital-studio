import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function ThankYou({ error }: { error?: boolean }) {
  if (error) {
    return (
      <div className="border border-red-300 bg-red-50 p-8">
        <p className="font-display text-lg font-bold text-black">Something went wrong.</p>
        <p className="mt-2 text-sm text-black/70">
          We couldn&apos;t submit your enquiry. Please message us directly on WhatsApp instead.
        </p>
        <WhatsAppButton className="mt-5" />
      </div>
    );
  }

  return (
    <div className="border border-gold bg-light-gray p-8">
      <p className="font-display text-lg font-bold text-black">Thank you.</p>
      <p className="mt-2 text-sm text-black/70">
        Your project enquiry has been received. We will review the details and get back to you
        as soon as possible.
      </p>
    </div>
  );
}
