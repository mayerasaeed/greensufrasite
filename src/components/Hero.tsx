import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-mint/30 to-sage/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Cook Smart. Live Halal.
                <span className="text-primary block">Shop Better.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Green Sufra helps you plan halal meals, manage groceries, and simplify daily life—
                all in one eco-conscious app.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Join the Waitlist
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Meals Planned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroFood} 
                alt="Fresh healthy ingredients for meal planning"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-lg border">
              <div className="text-sm font-medium text-card-foreground">Weekly Plan Ready!</div>
              <div className="text-xs text-muted-foreground">7 meals • 3 shopping lists</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-mint p-4 rounded-xl shadow-lg">
              <div className="text-sm font-medium text-mint-foreground">Calories Saved</div>
              <div className="text-2xl font-bold text-mint-foreground">1,200</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;