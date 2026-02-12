import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "WealthFlow transformed how we manage our clients' portfolios. The automation alone saved us hundreds of hours.",
    name: "David Kim",
    title: "Senior Advisor",
    company: "Pinnacle Wealth",
  },
  {
    quote:
      "The analytics dashboard is incredible. I can see exactly where my money is growing and make informed decisions in seconds.",
    name: "Amanda Foster",
    title: "Individual Investor",
    company: "",
  },
  {
    quote:
      "Tax optimization features paid for the subscription 10x over. It's a no-brainer for any serious investor.",
    name: "Robert Nakamura",
    title: "CFO",
    company: "Sterling Group",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            What Our Investors Say
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="h-full border-border bg-background">
                <CardContent className="flex h-full flex-col p-6">
                  <p className="mb-6 flex-1 text-sm italic leading-relaxed text-muted-foreground">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.title}
                      {t.company && `, ${t.company}`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
