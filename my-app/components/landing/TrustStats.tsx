import { motion } from "framer-motion";

const stats = [
  { value: "$2B+", label: "Assets Managed" },
  { value: "50K+", label: "Active Investors" },
  { value: "4.9★", label: "Average Rating" },
  { value: "99.9%", label: "Uptime" },
];

const TrustStats = () => {
  return (
    <section className="bg-navy border-t border-white/5 py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-2 text-4xl font-bold text-amber-500 md:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
