"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/mdaqgbgr";

const fieldClass =
  "w-full border border-black/15 bg-white px-4 py-3.5 font-body text-sm text-black focus:border-gold focus:outline-none";
const labelClass =
  "font-display mb-2 block text-xs font-bold uppercase tracking-wide text-black/65";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold bg-light-gray p-8">
        <p className="font-display text-lg font-bold text-black">Thank you.</p>
        <p className="mt-2 text-sm text-black/70">
          Your message has been received. We reply fast — usually within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor="business" className={labelClass}>
          Business / Brand Name
        </label>
        <input id="business" name="business" type="text" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="details" className={labelClass}>
          Message
        </label>
        <textarea id="details" name="details" required rows={5} className={fieldClass} />
      </div>
      <Button type="submit" variant="gold" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message →"}
      </Button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again, or message us directly on WhatsApp.
        </p>
      )}
    </form>
  );
}
