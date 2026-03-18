import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, Shield, Users } from "lucide-react";

const badges = [
  { icon: Shield, label: "Doctor Led" },
  { icon: Leaf, label: "Science Backed" },
  { icon: Users, label: "1000+ Transformations" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(270 40% 95%) 0%, hsl(270 30% 97%) 50%, hsl(0 0% 100%) 100%)" }}>
    {/* Soft radial glow */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, hsl(270 50% 90%), transparent 70%)" }} />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, hsl(270 50% 88%), transparent 70%)" }} />

    <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Transform Your Health,{" "}
            <br />
            <span className="text-green-fresh">the Plant-Based Way.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto font-body">
            Doctor-guided care powered by nutrition, science, and lifestyle. Track your transformation with real data, not guesswork.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            💜 Book Appointment
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
            🌱 Start Your Journey
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground text-sm shadow-sm"
            >
              <b.icon className="w-4 h-4 text-primary" />
              {b.label}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
