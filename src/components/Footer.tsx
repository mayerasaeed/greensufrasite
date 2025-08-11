import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest text-forest-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold">GreenSufra</span>
            </div>
            <p className="text-forest-foreground/80 max-w-xs">
              Making healthy meal planning simple, sustainable, and enjoyable for everyone.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-forest-foreground/80">
              <li>
                <a href="/Features" className="hover:text-forest-foreground transition-colors">
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-forest-foreground/80">
              <li>
                <a href="/About" className="hover:text-forest-foreground transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-forest-foreground/80">
              <li>
                <a href="/contact" className="hover:text-forest-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-foreground/20 mt-12 pt-8 text-center">
          <p className="text-forest-foreground/60">
            © 2025 GreenSufra Powered By Mayzalan Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
