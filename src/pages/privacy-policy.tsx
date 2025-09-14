import React, { useState } from "react";

const LegalPage: React.FC = () => {
  const [tab, setTab] = useState<"privacy" | "terms">("privacy");
  const year = new Date().getFullYear();

  const cardStyle: React.CSSProperties = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 18,
    padding: 24,
    boxShadow: "0 6px 24px rgba(0,0,0,.04)",
  };

  const pillStyle: React.CSSProperties = {
    fontSize: ".85rem",
    color: "#6b7280",
    marginBottom: 8,
  };

  const li = (children: React.ReactNode) => <li style={{ marginBottom: 6 }}>{children}</li>;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#fafaf9", color: "#1f2937" }}>
      <header style={{ background: "linear-gradient(180deg,rgba(22,163,74,.08),transparent)", padding: "28px 0 8px", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "#16A34A", boxShadow: "0 4px 14px rgba(22,163,74,.25)" }} />
            <div>
              <h1 style={{ margin: 0, fontSize: "1.8rem" }}>Green Sufra – Legal</h1>
              <div style={{ color: "#6b7280" }}>Privacy Policy & Terms of Use</div>
            </div>
          </div>
          <div style={{ marginTop: 10, color: "#6b7280" }}>
            Last updated: <strong>14 September 2025</strong> · Timezone: Asia/Dubai (GST)
          </div>
          
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "18px 0" }}>
            <button
              onClick={() => setTab("privacy")}
              style={{
                appearance: "none",
                border: "1px solid #e5e7eb",
                background: tab === "privacy" ? "#16A34A" : "#fff",
                color: tab === "privacy" ? "#fff" : "#1f2937",
                padding: "10px 14px",
                borderRadius: 999,
                cursor: "pointer",
              }}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setTab("terms")}
              style={{
                appearance: "none",
                border: "1px solid #e5e7eb",
                background: tab === "terms" ? "#16A34A" : "#fff",
                color: tab === "terms" ? "#fff" : "#1f2937",
                padding: "10px 14px",
                borderRadius: 999,
                cursor: "pointer",
              }}
            >
              Terms of Use
            </button>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 980, margin: "40px auto", padding: "0 20px" }}>
        {tab === "privacy" && (
          <section style={cardStyle}>
            <div style={pillStyle}>Privacy Policy</div>

            <h2>Introduction</h2>
            <p>
              This Privacy Policy describes how <strong>Green Sufra</strong> (operated by <strong>Mayzalan FZE LLC</strong>) collects, uses, discloses, and protects personal data when you use our websites, mobile apps, and related services (the “Services”). “We”, “our”, and “us” refer to Mayzalan FZE LLC. “You” refers to the user of the Services.
            </p>
            <p style={{ color: "#6b7280" }}>
              <strong>Legal entities & contacts :</strong> Company: Mayzalan FZE LLC Registered Address: <em>Business Center,Sharjah Publishing City </em> · Data Protection Contact / DPO: <a href="mailto:mayera@greensufra.com">mayera@greensufra.com</a> · Phone: <em>[+971525881560]</em>
            </p>

            <h2>Scope & Roles</h2>
            <p>
              We act as a <em>data controller</em> when we determine the purposes and means of processing your personal data (e.g., account creation, billing, analytics). For certain features provided to business customers, we may act as a <em>data processor</em> on their instructions.
            </p>

            <h2>What We Collect</h2>
            <ul>
              {li(<><strong>Identifiers:</strong> name, email, optional phone number, account IDs.</>)}
              {li(<><strong>Usage & device data:</strong> IP address, device type, OS, app version, logs, crash/diagnostic data, performance metrics.</>)}
              {li(<><strong>Meal & preference data:</strong> dietary choices you provide (e.g., halal, allergies), saved recipes, grocery lists, favorites, family profiles, and in‑app feedback.</>)}
              {li(<><strong>Location & locale:</strong> city/country, timezone, and language settings (no precise geolocation unless you grant permission).</>)}
              {li(<><strong>Financial & transaction data:</strong> subscription tier, invoices, payment status; card details are processed by payment processors (we do not store full card numbers).</>)}
              {li(<><strong>Cookies & similar technologies:</strong> necessary, preference, analytics, and (where applicable) marketing cookies. See “Cookies & Analytics”.</>)}
            </ul>

            <h2>Sources of Data</h2>
            <ul>
              {li("Information you provide directly (registration forms, preferences, surveys, support requests).")}
              {li("Automatically collected from your device (logs, usage, diagnostics, analytics).")}
              {li("Third parties (authentication providers, app stores, analytics, payment processors, affiliate/retail partners).")}
            </ul>

            <h2>How We Use Data</h2>
            <ul>
              {li("Provide, personalize, and improve the Services (meal planning, grocery sync, recommendations).")}
              {li("Account management, authentication, fraud prevention, and security.")}
              {li("Payments, subscriptions, invoicing, and customer support.")}
              {li("Analytics, product research, and performance monitoring.")}
              {li("Marketing communications (you may opt out) and transactional/service notifications.")}
              {li("Compliance with laws and enforcement of our Terms.")}
            </ul>

            <h2>Legal Bases (where applicable)</h2>
            <ul>
              {li(<><strong>Consent</strong> (e.g., optional notifications, certain analytics/marketing cookies)).</>)}
              {li(<><strong>Contract</strong> (to deliver the Services you request)).</>)}
              {li(<><strong>Legitimate interests</strong> (e.g., product improvement, security), balanced against your rights).</>)}
              {li(<><strong>Legal obligations</strong> (e.g., tax, accounting, regulatory requirements)).</>)}
            </ul>

            <h2>Sharing & Disclosures</h2>
            <p>We may share personal data with:</p>
            <ul>
              {li(<><strong>Service providers:</strong> hosting, analytics, messaging, customer support, and payment vendors under contracts and confidentiality.</>)}
              {li(<><strong>Retail/affiliate partners:</strong> only as needed to fulfill requested features (e.g., referral tracking). We do not sell personal data.</>)}
              {li(<><strong>Legal & safety authorities:</strong> when required by law or necessary to protect rights, safety, and property.</>)}
              {li(<><strong>Corporate transactions:</strong> merger, acquisition, or asset sale subject to safeguards and reasonable notice.</>)}
            </ul>

            <h2>International Transfers</h2>
            <p>
              Your data may be processed in countries other than your own. Where required, we implement appropriate safeguards (e.g., contractual clauses or equivalent mechanisms) and conduct vendor due diligence.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your jurisdiction (including UAE PDPL and other applicable laws), you may have the right to access, correct, delete, restrict, or object to processing, and to data portability and consent withdrawal. You may also lodge a complaint with a supervisory authority.
            </p>
            <p>
              To exercise rights, contact: <a href="mailto:privacy@greensufra.com">privacy@greensufra.com</a>.
            </p>

            <h2>Retention</h2>
            <p>
              We retain personal data only as long as necessary for the purposes above, unless a longer period is required by law. We apply documented retention schedules and delete or anonymize data when it is no longer needed.
            </p>

            <h2>Security</h2>
            <p>
              We use administrative, technical, and physical safeguards including encryption in transit, access controls, and monitoring. No method is 100% secure; please use strong passwords and enable available security features.
            </p>

            <h2>Cookies & Analytics</h2>
            <ul>
              {li(<><strong>Necessary:</strong> login, session management, security.</>)}
              {li(<><strong>Preferences:</strong> language, theme.</>)}
              {li(<><strong>Analytics:</strong> product usage insights to improve features.</>)}
              {li(<><strong>Marketing (optional):</strong> campaigns and attribution; consent requested where required.</>)}
            </ul>
            <p>
              Manage preferences via your browser settings and our in‑app cookie banner (where available).
            </p>

            <h2>Children’s Privacy</h2>
            <p>
              Our Services are not directed to children under the age where parental consent is required in your jurisdiction. If you believe a child provided personal data without consent, contact us to delete it.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will be notified via the app/website or by email. The “Last updated” date above reflects the latest revision.
            </p>

            <h2>Contact</h2>
            <p>
              Email: <a href="mailto:mayera@greensufra.com">privacy@greensufra.com</a><br />
              Postal: Mayzalan FZE LLC, <em>[enter registered address]</em>
            </p>
          </section>
        )}

        {tab === "terms" && (
          <section style={cardStyle}>
            <div style={pillStyle}>Terms of Use</div>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using Green Sufra’s Services, you agree to be bound by these Terms of Use (the “Terms”) and our Privacy Policy. If you do not agree, do not use the Services.
            </p>

            <h2>Eligibility & Accounts</h2>
            <ul>
              {li("You must be legally capable to enter into these Terms in your jurisdiction.")}
              {li("You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.")}
              {li("Provide accurate information and keep it up to date.")}
            </ul>

            <h2>Services & Subscriptions</h2>
            <ul>
              {li("Some features require a paid subscription. Prices, tiers, and inclusions are shown at checkout and may change with prior notice.")}
              {li("Billing is handled by third‑party processors; taxes may apply. By subscribing, you authorize recurring charges until you cancel.")}
              {li("Trial periods (if any) convert to paid plans unless canceled before renewal.")}
            </ul>

            <h2>Affiliate Links & Retail Partners</h2>
            <p>
              We may display affiliate products or partner links. We may earn a commission if you make a purchase. This does not affect the price you pay and does not constitute an endorsement. Partners are responsible for their own products, stores, and policies.
            </p>

            <h2>Your Content</h2>
            <ul>
              {li(<>
                You retain ownership of content you submit (e.g., recipes, photos, reviews). You grant us a worldwide, non‑exclusive, royalty‑free license to host, display, and use that content solely to operate and improve the Services.
              </>)}
              {li("Do not upload content that is unlawful, infringing, offensive, harmful, or that violates privacy or IP rights.")}
              {li("We may remove content or suspend accounts that violate these Terms.")}
            </ul>

            <h2>Acceptable Use</h2>
            <ul>
              {li("No reverse engineering, scraping, or interfering with the Services.")}
              {li("No attempts to circumvent security controls or rate limits.")}
              {li("No use for unlawful purposes or to provide medical, nutritional, or legal claims without appropriate qualifications and approvals.")}
            </ul>

            <h2>Health & Nutrition Disclaimers</h2>
            <ul>
              {li(<>
                Green Sufra provides general meal planning and grocery management guidance for informational purposes only. It is <strong>not</strong> a substitute for professional medical or nutritional advice.
              </>)}
              {li("Always check ingredient labels for allergens. You are responsible for verifying suitability for your dietary needs (e.g., halal, allergies, pregnancy, medical conditions).")}
              {li("Nutritional values are estimates and may vary.")}
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              The Services—including logos, trademarks, text, graphics, software, and designs—are owned by or licensed to Mayzalan FZE LLC and protected by applicable laws. Except as expressly permitted, you may not copy, modify, or create derivative works from the Services.
            </p>

            <h2>Feedback</h2>
            <p>
              If you provide feedback or suggestions, you grant us a perpetual, irrevocable, royalty‑free license to use them without obligation.
            </p>

            <h2>Suspension & Termination</h2>
            <ul>
              {li("We may suspend or terminate access for violations of these Terms or for risk to the Services or users.")}
              {li("You may cancel your subscription at any time in your account settings; cancellations take effect at the end of the current billing period unless required otherwise by law.")}
            </ul>

            <h2>Disclaimers</h2>
            <p>
              THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON‑INFRINGEMENT.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MAYZALAN FZE LLC AND ITS AFFILIATES SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR DATA. 
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Mayzalan FZE LLC, its affiliates, and personnel from any claims, damages, liabilities, and expenses arising from your use of the Services or your breach of these Terms.
            </p>

            <h2>Governing Law & Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the United Arab Emirates. Unless otherwise required by law, disputes shall be submitted to the <em>courts of Dubai, UAE</em> (or arbitration via <em>[insert arbitration forum]</em>) with venue in Dubai. You consent to such jurisdiction.
            </p>

            <h2>Changes to the Terms</h2>
            <p>
              We may update these Terms from time to time. If we make material changes, we will provide notice (e.g., email or in‑app notice). Your continued use of the Services after changes take effect constitutes acceptance.
            </p>

            <h2>Contact</h2>
            <p>
              Legal inquiries: <a href="mailto:mayera@greensufra.com">legal@greensufra.com</a><br />
              Address: Mayzalan FZE LLC, <em></em>
            </p>

            <h2>Miscellaneous</h2>
            <ul>
              {li("If any provision is unenforceable, the remainder remains in effect.")}
              {li("These Terms constitute the entire agreement between you and us regarding the Services.")}
              {li("No waiver is effective unless in writing and signed by us.")}
              {li("You may not assign these Terms without our consent; we may assign as permitted by law.")}
            </ul>
          </section>
        )}
      </main>

      <footer style={{ margin: "36px auto 28px", color: "#6b7280", fontSize: ".9rem", textAlign: "center" }}>
        © {year} Mayzalan FZE LLC · Green Sufra · All rights reserved.
      </footer>
    </div>
  );
};

export default LegalPage;