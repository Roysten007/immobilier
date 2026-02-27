import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "ROY Immobilier a vendu notre appartement en moins de 3 semaines. Professionnels, réactifs, humains. On recommande les yeux fermés.",
    author: "Sarah M.",
    detail: "cliente depuis 2019",
    rating: 5,
  },
  {
    text: "Pas de baratin, pas de fausse promesse. Juste des résultats. Merci à toute l'équipe ROY.",
    author: "Julien & Amina",
    detail: "acheteurs 2023",
    rating: 5,
  },
  {
    text: "17 ans de métier, ça se sent immédiatement. On s'est sentis entre de bonnes mains dès le premier rendez-vous.",
    author: "Christophe D.",
    detail: "investisseur",
    rating: 5,
  },
  {
    text: "Un accompagnement sur-mesure du début à la fin. ROY Immobilier, c'est la définition même du professionnalisme.",
    author: "Marie-Claire L.",
    detail: "vendeuse 2024",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="temoignages" ref={ref} className="section-padding bg-champagne-subtle">
      <div className="container-roy">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">Témoignages</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ils nous ont fait confiance
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Depuis 2007, ce sont leurs mots — pas les nôtres — qui racontent ROY Immobilier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-background rounded-2xl p-8 sm:p-12 shadow-xl border border-border relative">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-accent/30" />

            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-body text-lg sm:text-xl text-foreground/90 text-center leading-relaxed mb-8 italic"
            >
              "{t.text}"
            </motion.p>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <span className="font-display text-lg font-bold text-accent">
                  {t.author.charAt(0)}
                </span>
              </div>
              <p className="font-body font-semibold text-foreground">{t.author}</p>
              <p className="font-body text-sm text-muted-foreground">{t.detail}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-muted hover:bg-accent/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-accent w-6" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full bg-muted hover:bg-accent/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
