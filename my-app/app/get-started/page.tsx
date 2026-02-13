"use client";

import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const benefits = [
  "Automated portfolio rebalancing",
  "Tax-loss harvesting included",
  "Real-time analytics dashboard",
  "Expert human support 24/7",
  "Secure bank-level encryption",
];

export default function GetStartedPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    router.push("/dashboard");
  } catch (error: any) {
    alert(error.message);
  }
};

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left Panel - Value Prop */}
      <div className="relative flex w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] p-10 text-white lg:fixed lg:h-full lg:w-[450px] xl:w-[500px]">
        <div className="z-10">
          <Link
            href="/"
            className="flex items-center gap-2 w-fit text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="z-10 my-10 lg:my-auto">
          <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-md">
            <span className="font-bold">W</span>
          </div>

          <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
            One platform, endless possibilities
          </h1>
          <p className="mb-8 text-lg font-medium text-white/80">
            All your wealth management needs covered!
          </p>

          <ul className="space-y-5">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/30 text-white">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-purple-900/20 blur-3xl" />
      </div>

      {/* Right Panel - Dark Form */}
      <div className="flex w-full flex-1 flex-col bg-[#0f172a] p-6 lg:ml-[450px] xl:ml-[500px] lg:min-h-screen lg:justify-center lg:p-16">
        <div className="mx-auto w-full max-w-2xl">
          <div className="mb-10 space-y-2">
            <h2 className="text-3xl font-bold text-white">
              Get started commitment free
            </h2>
            <div className="text-sm text-slate-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-500 hover:text-blue-400 hover:underline"
              >
                Log in
              </Link>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSignup}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  First name
                </label>
                <input type="text" className="form-input" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Last name
                </label>
                <input type="text" className="form-input" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Company name
              </label>
              <input type="text" className="form-input" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Employees
                </label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="e.g. 10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Your role
                </label>
                <select className="form-input">
                  <option value="">Select role...</option>
                  <option value="owner">Owner / Founder</option>
                  <option value="finance">Finance Manager</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Work email
                </label>
                <input  type="email" placeholder="Email" className="form-input" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Password
                </label>
                <input type="password" placeholder="Password" className="form-input" onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 pt-2">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Investing internationally?
                </label>
                <div className="flex flex-col gap-3">
                  <label className="radio-tile">
                    <input
                      type="radio"
                      name="intl"
                      className="accent-blue-500"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="radio-tile">
                    <input
                      type="radio"
                      name="intl"
                      className="accent-blue-500"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Offering benefits?
                </label>
                <div className="flex flex-col gap-3">
                  <label className="radio-tile">
                    <input
                      type="radio"
                      name="benefits"
                      className="accent-blue-500"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="radio-tile">
                    <input
                      type="radio"
                      name="benefits"
                      className="accent-blue-500"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-4 h-14 w-full bg-blue-600 text-lg hover:bg-blue-700"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>

      <style jsx global>{`
        .form-input {
          display: flex;
          height: 3rem;
          width: 100%;
          border-radius: 0.375rem;
          border: 1px solid #334155;
          background-color: #1e293b;
          padding: 0.5rem 0.75rem;
          color: white;
          font-size: 0.875rem;
        }
        .form-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }
        .radio-tile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #334155;
          background-color: #1e293b;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
        }
        .radio-tile:hover {
          border-color: #475569;
          background-color: #26334d;
        }
      `}</style>
    </div>
  );
}
