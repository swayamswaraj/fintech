import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const stories = [
  {
    name: "Sarah Chen",
    company: "Apex Ventures",
    summary:
      "Grew her portfolio by 34% in the first year using WealthFlow's automated strategies.",
    role: "Founder & CEO",
  },
  {
    name: "Marcus Williams",
    company: "Blue Harbor Capital",
    summary:
      "Reduced tax liability by $120K through smart tax-loss harvesting features.",
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
    summary:
      "Automated 90% of his rebalancing workflow, saving 15+ hours per week.",
    role: "CTO",
  },
];

const CustomerStories = () => {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
            Real Impact for Our Customers
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            See how investors and firms use WealthFlow to grow, manage, and
            protect their assets.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto w-full max-w-6xl"
        >
          <CarouselContent className="-ml-6">
            {stories.map((story, i) => (
              <CarouselItem key={i} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <CardContent className="flex h-full flex-col p-8">
                      {/* Avatar / Initial Box */}
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-lg font-bold text-white">
                        {story.name.charAt(0)}
                      </div>

                      {/* Quote */}
                      <p className="mb-6 flex-1 text-base leading-relaxed text-slate-600">
                        "{story.summary}"
                      </p>

                      <div className="my-6 h-px w-full bg-slate-100" />

                      {/* Author Info */}
                      <div>
                        <div className="font-bold text-navy">{story.name}</div>
                        <div className="text-xs font-medium text-slate-500">
                          {story.role}, {story.company}
                        </div>
                      </div>

                      {/* Read Story Link */}
                      <a
                        href="#"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
                      >
                        Read Story <ArrowRight className="h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 bg-white hover:bg-slate-50 border-slate-200 md:-left-12" />
          <CarouselNext className="-right-4 bg-white hover:bg-slate-50 border-slate-200 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default CustomerStories;
