import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function WaitlistPage() {
  const [features, setFeatures] = useState<string[]>([]);

  const featureOptions = [
    "AI weekly meal plans",
    "Smart grocery list",
    "Pantry & waste tips",
    "Family matching",
    "Cook Today quick recipes",
    "Health score",
    "Eco tips",
  ];

  const toggleFeature = (val: string) => {
    setFeatures((prev) => {
      if (prev.includes(val)) return prev.filter((f) => f !== val);
      if (prev.length >= 3) return prev; // enforce max 3
      return [...prev, val];
    });
  };

  const RequiredLabel = ({ children }: { children: React.ReactNode }) => (
    <Label>
      <span className="text-red-500">*</span> {children}
    </Label>
  );

  return (
    <section className="min-h-screen bg-background px-4 py-10 flex justify-center">
      <div className="w-full max-w-2xl bg-card rounded-2xl shadow-lg border">
        {/* Header */}
        <div className="p-6 sm:p-8 sticky top-0 bg-card/95 backdrop-blur z-10 rounded-t-2xl border-b">
          <h1 className="text-3xl font-bold">Join the Waitlist</h1>
          <p className="text-muted-foreground mt-1">
            Be the first to know when Green Sufra launches.
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formspree.io/f/xnnzljpe"
          method="POST"
          className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto"
        >
          {/* Basic Info */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Basic Info</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <RequiredLabel>Full Name</RequiredLabel>
                <Input id="name" name="name" required />
              </div>
              <div>
                <RequiredLabel>Email</RequiredLabel>
                <Input id="email" name="email" type="email" required />
              </div>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div>
                <Label>City / Country (optional)</Label>
                <Input id="location" name="location" placeholder="Sharjah, UAE" />
              </div>
              <div>
                <Label>Family Size</Label>
                <select
                  id="familySize"
                  name="familySize"
                  className="w-full border border-input rounded-md h-10 px-3 bg-background"
                >
                  <option value="">Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3–4</option>
                  <option>5+</option>
                </select>
              </div>
            </div>
          </section>

          {/* Usage & Interest */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Usage & Interest</h2>

            {/* Would you use the app */}
            <div className="mb-4">
              <RequiredLabel>
                Would you use an app for meal plans, smart grocery lists & less waste?
              </RequiredLabel>
              <div className="mt-2 flex flex-wrap gap-4 text-sm">
                {["Yes", "Maybe", "No"].map((val) => (
                  <label key={val} className="inline-flex items-center gap-2">
                    <input type="radio" name="use_app" value={val} required /> {val}
                  </label>
                ))}
              </div>
            </div>

            {/* Preferred plan type */}
            <div className="mb-4">
              <RequiredLabel>Preferred meal plan type:</RequiredLabel>
              <div className="mt-2 flex flex-wrap gap-4 text-sm">
                {[
                  { v: "AI-personalized", l: "AI-personalized" },
                  { v: "Chef-curated", l: "Chef-curated" },
                  { v: "Both", l: "Both" },
                ].map((o) => (
                  <label key={o.v} className="inline-flex items-center gap-2">
                    <input type="radio" name="plan_type" value={o.v} required /> {o.l}
                  </label>
                ))}
              </div>
            </div>

            {/* Family support */}
            <div>
              <RequiredLabel>Whole-family preferences & diets support?</RequiredLabel>
              <div className="mt-2 flex flex-wrap gap-4 text-sm">
                {[
                  { v: "Yes", l: "Yes" },
                  { v: "Somewhat", l: "Somewhat" },
                  { v: "Not needed", l: "Not needed" },
                ].map((o) => (
                  <label key={o.v} className="inline-flex items-center gap-2">
                    <input type="radio" name="family_support" value={o.v} required /> {o.l}
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Pricing</h2>

            <div className="mb-4">
              <RequiredLabel>
                Pay AED 39/month for premium (AI, family accounts, tips, grocery delivery)?
              </RequiredLabel>
              <div className="mt-2 flex flex-wrap gap-4 text-sm">
                {["Yes", "Maybe", "No (free only)"].map((val) => (
                  <label key={val} className="inline-flex items-center gap-2">
                    <input type="radio" name="pay_39" value={val} required /> {val}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label>If no, max monthly fee:</Label>
              <div className="mt-2 flex flex-wrap gap-4 text-sm">
                {["10–19 AED", "20–29 AED", "30–39 AED", "None"].map((val) => (
                  <label key={val} className="inline-flex items-center gap-2">
                    <input type="radio" name="max_fee" value={val} /> {val}
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Top Features (Pick 3) */}
          <section>
            <div className="flex items-baseline justify-between">
              <h2 className="text-lg font-semibold mb-3">Top Features (Pick 3)</h2>
              <span className="text-xs text-muted-foreground">
                {features.length}/3 selected
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {featureOptions.map((label) => {
                const checked = features.includes(label);
                const disable = !checked && features.length >= 3;
                return (
                  <label
                    key={label}
                    className={`flex items-center gap-2 rounded-md border p-2 ${
                      disable ? "opacity-60" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="top_features"
                      value={label}
                      checked={checked}
                      onChange={() => toggleFeature(label)}
                      disabled={disable}
                    />
                    {label}
                  </label>
                );
              })}
            </div>
            <input type="hidden" name="top_features_summary" value={features.join(", ")} />
          </section>

          {/* Open Feedback */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Open Feedback</h2>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="biggest_challenge">
                  Biggest challenge in meal planning? (short)
                </Label>
                <Input id="biggest_challenge" name="biggest_challenge" />
              </div>
              <div>
                <Label htmlFor="wanted_features">Features you’d like? (short)</Label>
                <Input id="wanted_features" name="wanted_features" />
              </div>
              <div>
                <Label htmlFor="notes">Anything else?</Label>
                <Textarea id="notes" name="notes" />
              </div>
            </div>
          </section>

          {/* Anti-spam + subject */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="_subject" value="New Green Sufra Waitlist + Survey" />

          <div className="pt-2">
            <Button type="submit" variant="hero" className="w-full h-12 text-base">
              Submit & Join
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
