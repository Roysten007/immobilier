import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const steps = [
  { label: "Type de bien", key: "type" },
  { label: "Surface & Pièces", key: "surface" },
  { label: "Adresse", key: "address" },
  { label: "État général", key: "state" },
  { label: "Vos coordonnées", key: "contact" },
];

const EstimationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else setSubmitted(true);
  };

  return (
    <section id="estimation" ref={ref} className="section-padding bg-dark-section">
      <div className="container-roy">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-champagne font-body text-sm tracking-[0.25em] uppercase mb-3">Estimation gratuite</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-surface-foreground mb-4">
            Votre bien vaut combien ?
          </h2>
          <p className="text-dark-surface-foreground/70 font-body text-lg max-w-2xl mx-auto">
            La vérité en 2 minutes — offerte par ROY Immobilier. Sans engagement, sans pression.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {!submitted ? (
            <div className="bg-background rounded-2xl p-6 sm:p-10 shadow-2xl border border-border">
              {/* Stepper */}
              <div className="flex items-center justify-between mb-8">
                {steps.map((s, i) => (
                  <div key={s.key} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-body font-semibold transition-colors ${
                        i <= step
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`hidden sm:block w-8 lg:w-16 h-0.5 mx-1 ${i < step ? "bg-accent" : "bg-muted"}`} />
                    )}
                  </div>
                ))}
              </div>

              <p className="font-display text-lg font-semibold text-foreground mb-6">
                {steps[step].label}
              </p>

              {/* Step content */}
              <div className="mb-8">
                {step === 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {["Appartement", "Maison", "Villa", "Terrain"].map((t) => (
                      <button
                        key={t}
                        className="p-4 rounded-xl border border-border bg-muted hover:border-accent hover:bg-accent/10 transition-all text-foreground font-body text-sm font-medium"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
                {step === 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground font-body mb-1 block">Surface (m²)</label>
                      <input type="number" placeholder="85" className="w-full bg-muted rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground font-body mb-1 block">Nombre de pièces</label>
                      <input type="number" placeholder="4" className="w-full bg-muted rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <input type="text" placeholder="12 rue de la Paix, Paris" className="w-full bg-muted rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                )}
                {step === 3 && (
                  <div className="grid grid-cols-3 gap-3">
                    {["Excellent", "Bon", "À rénover"].map((s) => (
                      <button key={s} className="p-4 rounded-xl border border-border bg-muted hover:border-accent hover:bg-accent/10 transition-all text-foreground font-body text-sm font-medium">
                        {s}
                      </button>
                    ))}
                  </div>
                )}
                {step === 4 && (
                  <div className="space-y-4">
                    <input type="text" placeholder="Prénom" className="w-full bg-muted rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                    <input type="tel" placeholder="Téléphone" className="w-full bg-muted rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                    <input type="email" placeholder="Email" className="w-full bg-muted rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                {step > 0 && (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    Précédent
                  </Button>
                )}
                <Button variant="champagne" onClick={nextStep} className="ml-auto">
                  {step === steps.length - 1 ? "Je veux mon estimation ROY" : "Suivant"}
                </Button>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-background rounded-2xl p-10 shadow-2xl border border-border text-center"
            >
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Merci !</h3>
              <p className="text-muted-foreground font-body">
                Un expert ROY Immobilier vous contacte sous 24h. Pas un robot — une vraie personne.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EstimationSection;
