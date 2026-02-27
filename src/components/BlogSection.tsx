import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "5 erreurs qui font baisser le prix de vente de votre bien",
    excerpt: "Des détails qui coûtent cher. Découvrez comment les éviter et maximiser la valeur de votre propriété.",
    date: "15 Jan 2026",
  },
  {
    title: "Investir en 2026 : ce que personne ne vous dit vraiment",
    excerpt: "Les tendances du marché, les zones à surveiller, les pièges à éviter — par les experts ROY.",
    date: "8 Jan 2026",
  },
  {
    title: "Comment ROY Immobilier vend en 21 jours en moyenne",
    excerpt: "Notre méthode en 5 étapes, rodée depuis 2007, pour des ventes rapides et au meilleur prix.",
    date: "2 Jan 2026",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-roy">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">Le savoir ROY</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            17 ans de terrain, partagés librement
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-6 border border-border group hover:shadow-lg transition-shadow duration-500 cursor-pointer"
            >
              <p className="text-xs font-body text-muted-foreground mb-3">{article.date}</p>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <span className="text-accent font-body text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Lire l'article <ArrowRight className="w-4 h-4" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
