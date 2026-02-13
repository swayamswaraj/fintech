"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left Panel - Branding */}
      <div className="relative flex w-full flex-col justify-between bg-[#0B1221] p-10 text-white lg:w-2/5">
        <div className="z-10">
          <Link
            href="/"
            className="flex items-center gap-2 w-fit text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="z-10 my-12 lg:my-auto">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
            <span className="text-xl font-bold text-white">W</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Welcome to <br />
            WealthFlow
          </h1>
          <div className="mt-6 h-1 w-20 bg-amber-500 rounded-full" />
        </div>

        <div className="z-10 text-xs text-white/40">
          © {new Date().getFullYear()} WealthFlow. All rights reserved.
        </div>

        {/* Background Gradient Effect */}
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      {/* Right Panel - Form */}
      <div className="flex w-full items-center justify-center bg-white p-8 lg:w-3/5">
        <div className="w-full max-w-[400px] space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Hey there, great to see you
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Log in to access your dashboard.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) =>{ e.preventDefault(); handleLogin();}}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900">
                Email
              </label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                      className="flex h-12 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-900">
                  Password
                </label>
              </div>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                       required
                      className="flex h-12 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 pr-10"
                />
                <Link
                  href="#"
                  className="text-xs font-medium text-blue-600 hover:underline"
                >
                  Forgot password?
                </Link>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base"
            >
              Log In
            </Button>
          </form>

          <div className="flex flex-col gap-4 border-t border-slate-100 pt-8 text-center text-xs text-slate-500 sm:flex-row sm:justify-center">
            <Link href="#" className="hover:text-blue-600 hover:underline">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-600 hover:underline">
              WealthFlow Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
