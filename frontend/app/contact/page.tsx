import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact information and enquiry form.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Contact Us</h1>
      <p className="mt-4 text-neutral-400">
        Get in touch for property management, viewings, or general enquiries.
      </p>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-white">Office</h2>
          <p className="mt-2 text-neutral-400">
            123 Example Street<br />
            London, SW1A 1AA
          </p>
          <p className="mt-2">
            <a href="tel:08001234567" className="text-[#818cf8] hover:text-[#a5b4fc]">0800 123 4567</a>
          </p>
          <p className="mt-2">
            <a href="mailto:info@example.com" className="text-[#818cf8] hover:text-[#a5b4fc]">info@example.com</a>
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-neutral-900/50 p-6">
          <h2 className="text-lg font-semibold text-white">Send an enquiry</h2>
          <EnquiryForm variant="dark" />
        </div>
      </div>
    </div>
  );
}
