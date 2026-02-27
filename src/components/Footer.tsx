import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-section border-t border-border/20">
      <div className="container-roy section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-dark-surface-foreground mb-4">
              ROY <span className="text-gradient-champagne">IMMOBILIER</span>
            </h3>
            <p className="font-body text-dark-surface-foreground/60 text-sm leading-relaxed">
              Depuis le 25 octobre 2007, votre projet est notre priorité. Plus de 17 ans d'expertise au service de vos ambitions immobilières.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-dark-surface-foreground tracking-wider uppercase mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {["Accueil", "Nos biens", "Services", "Estimation", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-dark-surface-foreground/60 text-sm hover:text-champagne transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold text-dark-surface-foreground tracking-wider uppercase mb-4">Services</h4>
            <ul className="space-y-2">
              {["Achat immobilier", "Vente immobilière", "Location", "Estimation gratuite", "Conseil investissement"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-dark-surface-foreground/60 text-sm hover:text-champagne transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold text-dark-surface-foreground tracking-wider uppercase mb-4">Suivez-nous</h4>
            <div className="flex gap-3 mb-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-dark-surface-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <Icon className="w-4 h-4 text-dark-surface-foreground/70" />
                </a>
              ))}
            </div>
            <p className="font-body text-dark-surface-foreground/50 text-xs">
              12 avenue de la République<br />69006 Lyon, France
            </p>
          </div>
        </div>

        <div className="border-t border-dark-surface-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-dark-surface-foreground/40 text-xs">
            © 2007–2026 ROY Immobilier — Tous droits réservés
          </p>
          <p className="font-body text-dark-surface-foreground/50 text-xs italic text-center">
            ROY Immobilier — Depuis le 25 octobre 2007, votre projet est notre priorité.
          </p>
          <div className="flex gap-4">
            <a href="#" className="font-body text-dark-surface-foreground/40 text-xs hover:text-champagne transition-colors">Mentions légales</a>
            <a href="#" className="font-body text-dark-surface-foreground/40 text-xs hover:text-champagne transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
