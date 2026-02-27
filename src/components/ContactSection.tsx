import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="section-padding bg-background">
      <div className="container-roy">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Un projet ? ROY Immobilier vous répond. Toujours.
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Pas de répondeur, pas d'attente interminable. Une vraie équipe, disponible pour vous.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="bg-accent/15 rounded-full p-3">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Appel direct</h3>
                <a href="tel:+33100000000" className="font-body text-accent font-semibold text-lg hover:underline">01 00 00 00 00</a>
                <p className="font-body text-sm text-muted-foreground mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Lun-Sam • 9h-19h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="bg-green-500/15 rounded-full p-3">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">WhatsApp ROY</h3>
                <p className="font-body text-muted-foreground text-sm mb-2">Réponse rapide garantie</p>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-primary-foreground font-body">
                  <MessageCircle className="w-4 h-4" />
                  Écrire sur WhatsApp
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="bg-accent/15 rounded-full p-3">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:contact@royimmobilier.fr" className="font-body text-accent hover:underline">contact@royimmobilier.fr</a>
                <p className="font-body text-sm text-muted-foreground mt-1">Pour les projets détaillés</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="bg-accent/15 rounded-full p-3">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Notre agence</h3>
                <p className="font-body text-muted-foreground text-sm">12 avenue de la République, 69006 Lyon</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Formulaire de contact</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Prénom" className="bg-muted rounded-lg px-4 py-3 text-foreground text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                  <input type="tel" placeholder="Téléphone" className="bg-muted rounded-lg px-4 py-3 text-foreground text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <select className="w-full bg-muted rounded-lg px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent">
                  <option>Type de projet</option>
                  <option>Acheter</option>
                  <option>Vendre</option>
                  <option>Louer</option>
                  <option>Estimer</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Votre message..."
                  className="w-full bg-muted rounded-lg px-4 py-3 text-foreground text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
                <Button variant="champagne" className="w-full py-3" type="button">
                  Je veux être contacté par ROY Immobilier
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
