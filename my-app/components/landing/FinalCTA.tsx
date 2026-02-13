import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="container text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Start Investing Today
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-slate-400">
          Join 50,000+ investors who trust WealthFlow to grow and protect their
          wealth. No minimums, no hidden fees.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* UPDATED: Link to Get Started */}
          <Link href="/get-started">
            <Button
              size="lg"
              className="bg-amber-500 text-navy hover:bg-amber-600 font-semibold h-12 px-8"
            >
              Create Free Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-white/10 h-12 px-8"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
