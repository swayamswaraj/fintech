import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="container text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
          Start Investing Today
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/60">
          Join 50,000+ investors who trust WealthFlow to grow and protect their wealth. No minimums, no hidden fees.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-amber-dark"
          >
            Create Free Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
