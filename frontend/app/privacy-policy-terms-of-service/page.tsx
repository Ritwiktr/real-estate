import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Service",
  description:
    "Combined Privacy Policy and Terms of Service for ASTA Property Management. This URL redirects to the current Privacy Policy page.",
};

export default function PrivacyPolicyTermsOfServiceRedirectPage() {
  redirect("/privacy");
}

