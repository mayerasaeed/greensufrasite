import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-mint/20 to-sage/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Start Your Journey Today</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="text-primary block">Meal Planning Experience?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of families who have already discovered the joy of stress-free, 
            healthy meal planning with GreenSufra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Schedule Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-mint p-6 rounded-2xl mb-4 inline-block">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="font-semibold mb-2">Start Fresh</h3>
              <p className="text-sm text-muted-foreground">Begin your healthy eating journey with personalized plans</p>
            </div>
            
            <div className="text-center">
              <div className="bg-sage p-6 rounded-2xl mb-4 inline-block">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="font-semibold mb-2">Save Time</h3>
              <p className="text-sm text-muted-foreground">Reduce meal planning time from hours to minutes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-lime p-6 rounded-2xl mb-4 inline-block">
                <span className="text-3xl">💚</span>
              </div>
              <h3 className="font-semibold mb-2">Feel Great</h3>
              <p className="text-sm text-muted-foreground">Enjoy nutritious meals that fuel your body and mind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;