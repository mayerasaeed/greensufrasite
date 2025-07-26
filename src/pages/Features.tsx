import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ShoppingCart, Heart, Clock, Users, Sparkles, Utensils, Bell } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Utensils,
      title: "Halal Meal Planner",
      description: "Craft weekly meal plans with halal dietary filters, cultural inspirations, and nutrition insights tailored to your household."
    },
    {
      icon: ShoppingCart,
      title: "Smart Grocery List",
      description: "Auto-generate shopping lists from your meal plan and pantry status. Categorized, editable, and shareable with your family."
    },
    {
      icon: Heart,
      title: "Pantry & Essentials Tracker",
      description: "Digitize your pantry, get low-stock alerts, reduce waste, and always know what's in your kitchen."
    },
    {
      icon: Clock,
      title: "Eco & Budget Insights",
      description: "Visualize your food spending and waste patterns. Get eco-friendly nudges and halal savings suggestions."
    },
    {
      icon: Users,
      title: "Chef-Shared Recipes",
      description: "Discover halal-certified recipes from trusted home chefs. Bookmark, rate, and plan meals with ease."
    },
    
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Features</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Green Sufra empowers you to live smarter and halal — from planning meals to managing groceries and reducing waste. Here's how we help simplify your home life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;