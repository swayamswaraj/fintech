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
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Everything You Need to Invest Smarter
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Powerful tools built for both individual investors and wealth management firms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group h-full border-border bg-background transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
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
