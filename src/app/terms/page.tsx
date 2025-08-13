import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Ukiyo Habitat",
  description: "Review the terms and conditions for using Ukiyo Habitat services and website.",
};

export default function TermsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6">Terms of Service</h1>
      <p className="text-[#6b7280] mb-4">
        By accessing or using our website and services, you agree to the following terms and conditions.
      </p>
      <div className="space-y-4 text-[#6b7280] leading-relaxed">
        <p>
          - The content on this site is provided for general information and may change without notice.
        </p>
        <p>
          - Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
        </p>
        <p>
          - For questions, contact us at <a href="mailto:hello@ukiyohabitat.com" className="text-[#e7a77e] hover:underline">hello@ukiyohabitat.com</a>.
        </p>
      </div>
    </main>
  );
}