import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, TrendingUp, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceAchat from "@/assets/service-achat.jpg";
import serviceVente from "@/assets/service-vente.jpg";
import serviceLocation from "@/assets/service-location.jpg";

const services = [
  {
    icon: Home,
    title: "ACHAT",
    description: "Trouvez le bien qui vous ressemble. On s'occupe du reste, de A à Z.",
    image: serviceAchat,
    cta: "Explorer les biens",
  },
  {
    icon: TrendingUp,
    title: "VENTE",
    description: "Vendez au bon prix, au bon moment, sans stress ni mauvaise surprise.",
    image: serviceVente,
    cta: "Estimer mon bien",
  },
  {
    icon: Key,
    title: "LOCATION",
    description: "Le bon locataire, la bonne propriété. On sécurise chaque étape pour vous.",
    image: serviceLocation,
    cta: "Voir les locations",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="section-padding bg-background">
      <div className="container-roy">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">Nos services</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trois engagements, une seule promesse
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Depuis 2007, ROY Immobilier accompagne chaque étape de vos projets avec exigence et humanité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="card-service group"
            >
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark-surface/30 group-hover:bg-dark-surface/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm rounded-full p-3">
                  <service.icon className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>
              <div className="p-6 bg-card rounded-b-xl border border-t-0 border-border">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body text-base mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="champagne" className="w-full">
                  {service.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
