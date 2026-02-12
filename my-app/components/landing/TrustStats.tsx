import { motion } from "framer-motion";

const stats = [
  { value: "$2B+", label: "Assets Managed" },
  { value: "50K+", label: "Active Investors" },
  { value: "4.9★", label: "Average Rating" },
  { value: "99.9%", label: "Uptime" },
];

const partners = [
  "Fidelity",
  "Vanguard",
  "Schwab",
  "Interactive Brokers",
  "TD Ameritrade",
  "Plaid",
];

const TrustStats = () => {
  return (
    <section className="bg-navy text-primary-foreground py-20 md:py-28">
      <div className="container">
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-2 text-3xl font-bold text-amber md:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-12">
          <p className="mb-8 text-center text-xs uppercase tracking-wider text-primary-foreground/40">
            Integrates with your favorite platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-primary-foreground/30 transition-colors hover:text-primary-foreground/60"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
