import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-navy text-primary-foreground">
      {/* Diagonal accent background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-amber-500 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-amber-200 blur-3xl" />
      </div>

      <div className="container relative z-10 grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-16 lg:py-32">
        {/* Left content */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-sm">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
            <span className="font-medium">
              Rated 4.9/5 by 50,000+ investors
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Grow Your Wealth{" "}
            <span className="text-amber-500">with Confidence</span>
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-300 md:text-xl">
            Smart portfolio management, automated investing, and real-time
            analytics — all in one platform designed for modern investors.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* UPDATED: Link to Get Started Page */}
            <Link href="/get-started">
              <Button
                size="lg"
                className="bg-amber-500 text-navy hover:bg-amber-600 font-semibold h-12 px-8"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 h-12 px-8"
            >
              See Pricing
            </Button>
          </div>

          {/* Trust logos */}
          <div className="mt-12 flex items-center gap-6 border-t border-white/10 pt-8">
            <span className="text-xs uppercase tracking-wider text-slate-500">
              Trusted by
            </span>
            {["Forbes", "TechCrunch", "Bloomberg", "WSJ"].map((name) => (
              <span key={name} className="text-sm font-semibold text-slate-400">
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Right placeholder / Dashboard Mockup */}
        <div className="hidden items-center justify-center lg:flex">
          <div className="relative h-[450px] w-full max-w-md rounded-2xl border border-white/10 bg-[#162036] p-6 shadow-2xl">
            <div className="mb-4 text-sm text-slate-400">
              Portfolio Overview
            </div>
            <div className="mb-2 text-4xl font-bold text-white">
              $247,832.50
            </div>
            <div className="mb-8 flex items-center gap-2 text-sm text-emerald-400">
              <span>+12.4% this month</span>
            </div>
            {/* Mock chart bars */}
            <div className="flex items-end gap-3 h-56">
              {[40, 55, 45, 70, 60, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-amber-500/80 hover:bg-amber-500 transition-colors"
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
