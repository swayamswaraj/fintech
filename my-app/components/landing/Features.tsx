import { BarChart3, Bot, PieChart, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: PieChart,
    title: "Portfolio Management",
    description:
      "Track and manage all your investments in one unified dashboard with real-time performance insights.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "AI-powered analytics that surface trends, risks, and opportunities across your portfolio.",
  },
  {
    icon: Bot,
    title: "Automated Investing",
    description:
      "Set your strategy and let our intelligent algorithms handle rebalancing, DCA, and allocation.",
  },
  {
    icon: ShieldCheck,
    title: "Tax Optimization",
    description:
      "Automated tax-loss harvesting and reporting to maximize your after-tax returns effortlessly.",
  },
];

const Features = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
            Everything You Need to Invest Smarter
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Powerful tools built for both individual investors and wealth
            management firms.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group h-full border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-navy">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
