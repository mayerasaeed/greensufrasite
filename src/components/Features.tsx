import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ShoppingCart, Heart, Clock, Users, Sparkles } from "lucide-react";
import planningIllustration from "@/assets/planning-illustration.jpg";
import healthyBowl from "@/assets/healthy-bowl.jpg";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Halal Meal Planner",
      description: "Plan balanced meals for your family with halal-friendly filters."
    },
    {
      icon: ShoppingCart,
      title: "Smart Grocery List",
      description: "Auto-generate shopping lists from your weekly plans & pantry status."
    },
    {
      icon: Heart,
      title: "Pantry & Essentials Hub",
      description: "Track household supplies and reduce food waste."
    },
    {
      icon: Clock,
      title: "Eco & Budget Insights",
      description: "Monitor spending and get eco-friendly tips."
    },
    {
      icon: Users,
      title: "Chef-Shared Recipes",
      description: "Explore culturally inspired recipes from trusted home chefs."
    },
    {
      icon: Sparkles,
      title: "Recipe Discovery & Creation",
      description: "Find new recipes tailored to your taste, or easily add your own family favorites."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What You Can Do with Green Sufra</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Green Sufra empowers you to live smarter and halal — from planning meals to managing groceries and reducing waste. Here's how we help simplify your home life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Plan Once, Eat Well All Week</h3>
            <p className="text-lg text-muted-foreground">
              Say goodbye to the daily "What's for dinner?" stress. Our intelligent planning system considers your schedule, 
              preferences, and nutritional goals to create the perfect weekly meal plan.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Personalized meal recommendations</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Dietary restriction support</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Budget-conscious planning</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Leftover optimization</span>
              </li>
            </ul>
            <Button variant="soft" size="lg">
              Explore Features
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src={planningIllustration} 
                alt="Meal planning illustration"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <div className="bg-lime p-4 rounded-xl">
                <div className="text-sm font-medium text-lime-foreground">This Week</div>
                <div className="text-2xl font-bold text-lime-foreground">21 Meals</div>
                <div className="text-xs text-lime-foreground/80">All planned & ready</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-sage p-4 rounded-xl">
                <div className="text-sm font-medium text-sage-foreground">Grocery Budget</div>
                <div className="text-2xl font-bold text-sage-foreground">$127</div>
                <div className="text-xs text-sage-foreground/80">-23% vs last week</div>
              </div>
              <img 
                src={healthyBowl} 
                alt="Healthy food bowl"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;