import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Green Sufra</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Rooted in the UAE, Green Sufra was created to bring ease, barakah, and 
              sustainability into everyday kitchens. We help you plan meals, manage 
              groceries, reduce waste, and build better food habits — all in one intuitive platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                At Green Sufra, our mission is to simplify living while promoting mindful food 
                planning. Through smart tools, cultural relevance, and eco-conscious insights, we 
                help families reduce waste, eat with intention, and make grocery planning more 
                joyful and efficient.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Green Sufra began as a homegrown idea in Sharjah when our founder couldn't find 
                a simple friendly app to organize meals, groceries, and pantry needs. What 
                started as a simple planner soon grew into a complete food ecosystem — blending 
                faith, tech, and sustainability for the modern Muslim household.
              </p>
            </div>
          </div>

          <div className="text-center bg-card/50 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're a small but mighty team of food lovers, tech builders, and faith-driven 
              creatives from the UAE and beyond — on a mission to make meal planning 
              smarter and more sustainable.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;