import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holiday Let Management",
  description:
    "Holiday let management for London and West Mersea properties, including licensing, guest experience, and compliance.",
};

export default function HolidayLettingsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Holiday Let Management</h1>
      <p className="mt-4 text-muted">
        Whether you're letting a luxury flat in East London or a beachside retreat in West Mersea,
        our holiday let management service delivers high occupancy, five-star guest reviews, and
        full regulatory compliance.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">What we offer</h2>
      <ul className="mt-3 list-inside list-disc space-y-2 text-muted">
        <li>Short-let licensing and registration support</li>
        <li>Listing creation for Airbnb, Booking.com, and Vrbo</li>
        <li>Dynamic pricing and revenue optimisation</li>
        <li>Professional cleaning, linen rotation, and guest check-ins</li>
        <li>Local regulation compliance, including fire and safety standards</li>
        <li>Real-time guest messaging and review management</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold text-white">Designed for exceptional stays</h2>
      <p className="mt-3 text-muted">
        We create luxury holiday experiences that protect your property, enhance your returns, and
        uphold your reputation — whether guests stay for a weekend or a season.
      </p>
    </div>
  );
}

