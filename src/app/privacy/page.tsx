import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ukiyo Habitat",
  description: "Read the privacy policy of Ukiyo Habitat to understand how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-6">Privacy Policy</h1>
      <p className="text-[#6b7280] mb-4">
        We value your privacy. This page outlines how Ukiyo Habitat collects, uses, and safeguards your personal information.
      </p>
      <div className="space-y-4 text-[#6b7280] leading-relaxed">
        <p>
          - We only collect information necessary to provide our services and improve your experience.
        </p>
        <p>
          - We do not sell your personal data. We may share it with trusted service providers strictly to operate our services.
        </p>
        <p>
          - You can contact us at <a href="mailto:hello@ukiyohabitat.com" className="text-[#e7a77e] hover:underline">hello@ukiyohabitat.com</a> for any privacy-related questions.
        </p>
      </div>
    </main>
  );
}