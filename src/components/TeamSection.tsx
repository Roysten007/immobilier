import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
  {
    name: "Marc R.",
    role: "Fondateur & Directeur",
    description: "Depuis le 25 octobre 2007, il pilote ROY Immobilier avec la même conviction : l'immobilier, c'est avant tout une histoire de confiance.",
  },
  {
    name: "Nadia K.",
    role: "Spécialiste résidentiel",
    description: "Elle connaît chaque rue comme sa poche, et chaque client comme un proche.",
  },
  {
    name: "Sophie B.",
    role: "Conseillère en investissement",
    description: "Les chiffres, c'est son langage. La rentabilité de votre projet, c'est sa passion.",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="equipe" ref={ref} className="section-padding bg-muted/30">
      <div className="container-roy">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">Notre équipe</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            17 ans d'engagement, une équipe, une vision
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-3xl mx-auto text-center text-muted-foreground font-body text-lg leading-relaxed mb-16"
        >
          Tout a commencé le 25 octobre 2007. Pas avec un grand discours ni une promesse vague. Avec une conviction simple&nbsp;: l'immobilier, ça devrait être humain. Depuis ce premier jour, ROY Immobilier a accompagné des centaines de familles, d'investisseurs, de rêveurs concrets — en mettant toujours la même chose au centre&nbsp;: <span className="text-accent font-semibold">vous</span>.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="bg-background rounded-2xl p-8 border border-border shadow-lg text-center group hover:shadow-xl transition-shadow duration-500"
            >
              <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5">
                <span className="font-display text-2xl font-bold text-accent">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-accent font-body text-sm font-semibold mb-4">{member.role}</p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed italic">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
