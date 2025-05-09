"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-4">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                <span className="animate-pulse mr-1">●</span> New in 2025
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block">Tailor Your Resume,</span>
              <span className="block mt-1 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Land Your Dream Job
              </span>
            </h1>

            <p className="text-xl text-foreground/80 max-w-xl">
              Our AI-powered platform optimizes your resume for specific job
              descriptions, increasing your interview chances by 3x. Stand out
              from the competition with a perfectly tailored resume.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Button size="lg" asChild className="group">
                <Link href="#resume-form">
                  Get Started{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#how-it-works">Learn How It Works</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">10,000+ users</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">85% interview rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">4.9/5 rating</span>
              </div>
            </div>
          </motion.div>

          {/* Hero image/illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] w-full rounded-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl overflow-hidden border">
              {/* Resume visual overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform w-[70%] h-[70%] bg-background/80 backdrop-blur-sm rounded-lg shadow-lg border p-5">
                <div className="space-y-2">
                  <div className="h-6 w-36 bg-primary/20 rounded-md" />
                  <div className="h-4 w-48 bg-muted rounded-md" />
                  <div className="h-4 w-32 bg-muted rounded-md" />
                  <div className="pt-2">
                    <div className="h-3 w-full bg-muted/50 rounded-md" />
                    <div className="h-3 w-full bg-muted/50 rounded-md mt-2" />
                    <div className="h-3 w-3/4 bg-muted/50 rounded-md mt-2" />
                  </div>
                  <div className="pt-3">
                    <div className="h-4 w-24 bg-primary/20 rounded-md" />
                    <div className="h-3 w-full bg-muted/50 rounded-md mt-2" />
                    <div className="h-3 w-full bg-muted/50 rounded-md mt-2" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-1/4 right-1/4 p-2 bg-white dark:bg-black rounded-lg shadow-lg border animate-bounce">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div
                className="absolute bottom-1/4 left-1/4 p-2 bg-white dark:bg-black rounded-lg shadow-lg border animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <BriefcaseBusiness className="h-5 w-5 text-primary" />
              </div>
              <div
                className="absolute top-2/3 right-1/3 p-2 bg-white dark:bg-black rounded-lg shadow-lg border animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
