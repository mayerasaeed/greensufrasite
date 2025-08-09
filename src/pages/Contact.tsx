import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">Email:</Label>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:mayera@greensufra.com"
                          className="hover:text-primary transition-colors underline"
                        >
                          mayera@greensufra.com
                        </a>
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8">
                <form
                  action="https://formspree.io/f/xgvzroyn"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Honeypot to reduce spam */}
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  {/* Optional subject line */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Contact Message - Green Sufra"
                  />

                  <div>
                    <Label htmlFor="name">
                      <span className="text-red-500 mr-1">*</span>Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="mt-2"
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">
                      <span className="text-red-500 mr-1">*</span>Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2"
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">
                      <span className="text-red-500 mr-1">*</span>Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      className="mt-2 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
