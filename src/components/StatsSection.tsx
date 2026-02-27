import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 17, prefix: "+", suffix: " ans", label: "d'expertise reconnue" },
  { value: 1200, prefix: "+", label: "biens vendus avec succès" },
  { value: 97, suffix: "%", label: "de clients satisfaits" },
  { value: 21, suffix: " jours", label: "délai moyen de vente" },
];

const AnimatedCounter = ({ item, inView }: { item: StatItem; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = item.value;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / end), 16);
    const increment = Math.max(1, Math.floor(end / (duration / stepTime)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, item.value]);

  return (
    <div className="stat-counter">
      <div className="stat-number text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
        {item.prefix}{count}{item.suffix}
      </div>
      <p className="text-dark-surface-foreground/70 font-body text-sm sm:text-base">{item.label}</p>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-dark-section section-padding">
      <div className="container-roy">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <AnimatedCounter item={stat} inView={isInView} />
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-dark-surface-foreground/50 text-sm font-body mt-10 italic"
        >
          Ces chiffres ne sont pas des promesses. Ce sont des faits. — Fondée le 25 octobre 2007
        </motion.p>
      </div>
    </section>
  );
};

export default StatsSection;
