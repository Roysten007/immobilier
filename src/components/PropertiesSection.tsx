import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceAchat from "@/assets/service-achat.jpg";
import serviceVente from "@/assets/service-vente.jpg";
import serviceLocation from "@/assets/service-location.jpg";
import villaContemporaine from "@/assets/villa-contemporaine.png";
import loftIndustriel from "@/assets/loft-industriel.png";
import maisonVille from "@/assets/maison-ville.png";

const initialProperties = [
  {
    id: 1,
    image: serviceAchat,
    badge: "Exclusivité ROY",
    title: "Appartement lumineux — Cœur de ville",
    price: "285 000 €",
    surface: "92 m²",
    rooms: "4 pièces",
    city: "Lyon 6e",
  },
  {
    id: 2,
    image: serviceVente,
    badge: "Coup de cœur",
    title: "Maison familiale avec jardin",
    price: "425 000 €",
    surface: "145 m²",
    rooms: "6 pièces",
    city: "Villeurbanne",
  },
  {
    id: 3,
    image: serviceLocation,
    badge: "Nouveau",
    title: "Studio rénové — Idéal investissement",
    price: "135 000 €",
    surface: "32 m²",
    rooms: "2 pièces",
    city: "Lyon 3e",
  },
  {
    id: 4,
    image: villaContemporaine,
    badge: "Expertise ROY",
    title: "Villa Contemporaine — Prestations Haut de Gamme",
    price: "1 250 000 €",
    surface: "250 m²",
    rooms: "7 pièces",
    city: "Lyon 5e",
  },
  {
    id: 5,
    image: loftIndustriel,
    badge: "Exclusivité",
    title: "Loft Industriel — Quartier Bohème",
    price: "540 000 €",
    surface: "120 m²",
    rooms: "3 pièces",
    city: "Lyon 7e",
  },
  {
    id: 6,
    image: maisonVille,
    badge: "Charmant",
    title: "Maison de Ville — Calme & Authentique",
    price: "310 000 €",
    surface: "105 m²",
    rooms: "5 pièces",
    city: "Oullins",
  },
];

const PropertiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = initialProperties.filter(
    (prop) =>
      prop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="biens" ref={ref} className="section-padding bg-muted/50 overflow-hidden">
      <div className="container-roy">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">Nos biens</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Biens disponibles
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-8">
            Une sélection rigoureuse, à votre image. Chaque bien est vérifié, chaque visite est préparée.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-accent transition-colors">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Rechercher par ville, type de bien..."
              className="w-full bg-background border border-border rounded-full py-4 pl-12 pr-6 text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-4 flex items-center">
              <Filter className="w-5 h-5 text-muted-foreground/50" />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((prop, i) => (
                <motion.div
                  key={prop.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-shadow duration-500 flex flex-col h-full"
                >
                  <div className="relative h-60 overflow-hidden shrink-0">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-body font-semibold px-3 py-1 rounded-full shadow-md">
                      {prop.badge}
                    </span>
                    <button className="absolute top-4 right-4 p-2.5 bg-background/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-md group/heart">
                      <Heart className="w-4 h-4 text-foreground group-hover/heart:text-red-500 transition-colors" />
                    </button>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-accent transition-colors">{prop.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground font-body mb-6 mt-auto">
                      <span className="bg-muted px-2 py-1 rounded">{prop.surface}</span>
                      <span>•</span>
                      <span className="bg-muted px-2 py-1 rounded">{prop.rooms}</span>
                      <span>•</span>
                      <span className="text-foreground font-medium">{prop.city}</span>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground uppercase font-body tracking-wider">Prix net vendeur</span>
                        <span className="font-display text-2xl font-bold text-accent">{prop.price}</span>
                      </div>
                      <Button variant="champagne" size="sm" className="rounded-full px-6">Détails</Button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-muted-foreground font-body text-xl">Aucun bien ne correspond à votre recherche.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>Réinitialiser</Button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {filteredProperties.length > 0 && searchTerm === "" && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full px-10">
              Voir tous nos biens (24 au total)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesSection;

