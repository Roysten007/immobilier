import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceAchat from "@/assets/service-achat.jpg";
import serviceVente from "@/assets/service-vente.jpg";
import serviceLocation from "@/assets/service-location.jpg";

const properties = [
  {
    image: serviceAchat,
    badge: "Exclusivité ROY",
    title: "Appartement lumineux — Cœur de ville",
    price: "285 000 €",
    surface: "92 m²",
    rooms: "4 pièces",
    city: "Lyon 6e",
  },
  {
    image: serviceVente,
    badge: "Coup de cœur",
    title: "Maison familiale avec jardin",
    price: "425 000 €",
    surface: "145 m²",
    rooms: "6 pièces",
    city: "Villeurbanne",
  },
  {
    image: serviceLocation,
    badge: "Nouveau",
    title: "Studio rénové — Idéal investissement",
    price: "135 000 €",
    surface: "32 m²",
    rooms: "2 pièces",
    city: "Lyon 3e",
  },
];

const PropertiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="biens" ref={ref} className="section-padding bg-muted/50">
      <div className="container-roy">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">Nos biens</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Biens disponibles
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Une sélection rigoureuse, à votre image. Chaque bien est vérifié, chaque visite est préparée.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                  {prop.badge}
                </span>
                <button className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
                  <Heart className="w-4 h-4 text-foreground" />
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{prop.title}</h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground font-body mb-4">
                  <span>{prop.surface}</span>
                  <span>•</span>
                  <span>{prop.rooms}</span>
                  <span>•</span>
                  <span>{prop.city}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-gradient-champagne">{prop.price}</span>
                  <Button variant="champagne" size="sm">Voir le bien</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Voir tous nos biens
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
