import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Partnerships = () => {
  const partnershipTypes = [
    {
      title: "Halal Brand Collaborations",
      description: "Partner with halal-certified food, lifestyle, and kitchenware brands to reach a mindful audience aligned with your values."
    },
    {
      title: "Recipe & Chef Spotlights",
      description: "Showcase your products in community-driven recipes or chef-curated content featured in the Green Sufra app."
    },
    {
      title: "In-App Integrations",
      description: "Integrate your grocery products, household items, or services directly into our shopping, pantry, or reminder modules."
    },
    {
      title: "Eco & Budget Initiatives",
      description: "Collaborate on green living and sustainable cooking campaigns with shared analytics and community reach."
    },
    {
      title: "Affiliate & Promotions",
      description: "Join our affiliate ecosystem. Feature in wishlist banners, weekly deals, and contextual nudges with revenue share."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Partner with Green Sufra</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Green Sufra connects halal-conscious families and home chefs with tools to cook, shop, and 
              live smarter. If your brand supports sustainable, healthy, or faith-aligned living — let's 
              collaborate and grow together.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {partnershipTypes.map((partnership, index) => (
              <Card key={index} className="border-0 shadow-md bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">{partnership.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {partnership.description}
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

export default Partnerships;