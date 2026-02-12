import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const stories = [
  {
    name: "Sarah Chen",
    company: "Apex Ventures",
    summary: "Grew her portfolio by 34% in the first year using WealthFlow's automated strategies.",
    role: "Founder & CEO",
  },
  {
    name: "Marcus Williams",
    company: "Blue Harbor Capital",
    summary: "Reduced tax liability by $120K through smart tax-loss harvesting features.",
    role: "Managing Director",
  },
  {
    name: "Elena Rodriguez",
    company: "Horizon Investments",
    summary: "Consolidated 5 brokerage accounts into one seamless dashboard.",
    role: "Portfolio Manager",
  },
  {
    name: "James Park",
    company: "NovaTech Fund",
    summary: "Automated 90% of his rebalancing workflow, saving 15+ hours per week.",
    role: "CTO",
  },
];

const CustomerStories = () => {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Real Impact for Our Customers
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            See how investors and firms use WealthFlow to grow, manage, and protect their assets.
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="mx-auto w-full max-w-5xl">
          <CarouselContent className="-ml-4">
            {stories.map((story, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full border-border bg-background">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-sm font-bold text-primary-foreground">
                        {story.company.charAt(0)}
                      </div>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        "{story.summary}"
                      </p>
                      <div className="border-t border-border pt-4">
                        <div className="font-semibold text-foreground">{story.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {story.role}, {story.company}
                        </div>
                      </div>
                      <a
                        href="#"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-amber-dark"
                      >
                        Read Story <ArrowRight className="h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12" />
          <CarouselNext className="-right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default CustomerStories;
