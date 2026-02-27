import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark-surface/70" />

      {/* Content */}
      <div className="relative z-10 container-roy px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-champagne font-body text-sm sm:text-base tracking-[0.3em] uppercase mb-6">
            Depuis le 25 octobre 2007
          </p>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-dark-surface-foreground">
            Depuis 2007, nous transformons vos projets immobiliers en réalité.
          </h1>

          <p className="font-body text-base sm:text-lg md:text-xl text-dark-surface-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Plus de 17 ans d'expérience, des centaines de familles accompagnées, un seul engagement&nbsp;: <span className="text-champagne font-semibold">vous</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero-primary" size="lg" className="text-base px-8 py-6">
              Découvrir nos biens
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
              Estimation gratuite
            </Button>
          </div>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl border border-border/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <select className="bg-muted text-foreground rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent">
                <option>Type de bien</option>
                <option>Appartement</option>
                <option>Maison</option>
                <option>Villa</option>
                <option>Terrain</option>
              </select>
              <input
                type="text"
                placeholder="Localisation"
                className="bg-muted text-foreground rounded-lg px-4 py-3 text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <select className="bg-muted text-foreground rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent">
                <option>Budget max</option>
                <option>100 000 €</option>
                <option>200 000 €</option>
                <option>300 000 €</option>
                <option>500 000 €</option>
                <option>1 000 000 €+</option>
              </select>
              <select className="bg-muted text-foreground rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent">
                <option>Acheter</option>
                <option>Louer</option>
              </select>
              <Button variant="champagne" className="py-3 gap-2">
                <Search className="w-4 h-4" />
                Rechercher
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
