import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-navy text-primary-foreground">
      {/* Diagonal accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-amber" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-amber-light" />
      </div>

      <div className="container relative z-10 grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-16 lg:py-32">
        {/* Left content */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-sm">
            <Star className="h-4 w-4 fill-amber text-amber" />
            <span>Rated 4.9/5 by 50,000+ investors</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Grow Your Wealth{" "}
            <span className="text-amber">with Confidence</span>
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
            Smart portfolio management, automated investing, and real-time analytics — all in one platform designed for modern investors.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-amber-dark"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              See Pricing
            </Button>
          </div>

          {/* Trust logos */}
          <div className="mt-12 flex items-center gap-6 border-t border-primary-foreground/10 pt-8">
            <span className="text-xs uppercase tracking-wider text-primary-foreground/40">
              Trusted by
            </span>
            {["Forbes", "TechCrunch", "Bloomberg", "WSJ"].map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-primary-foreground/30"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Right placeholder */}
        <div className="hidden items-center justify-center lg:flex">
          <div className="relative h-[420px] w-full max-w-md rounded-2xl border border-primary-foreground/10 bg-navy-light p-6">
            <div className="mb-4 text-sm text-primary-foreground/50">Portfolio Overview</div>
            <div className="mb-2 text-3xl font-bold">$247,832.50</div>
            <div className="mb-8 text-sm text-amber">+12.4% this month</div>
            {/* Mock chart bars */}
            <div className="flex items-end gap-3 h-48">
              {[40, 55, 45, 70, 60, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-amber/60"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
