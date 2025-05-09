"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-purple-700 p-8 md:p-12 lg:p-16 text-white shadow-xl"
        >
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-yellow-300" />
                <span className="text-yellow-300 font-medium">
                  Start Optimizing Today
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Land Your Dream Job Faster
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Join thousands of job seekers who have increased their interview
                chances by 3x with ReZoom. Our AI-powered platform tailors your
                resume to each job description, giving you the competitive edge
                you need.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-primary hover:bg-white/90 transition-colors group"
                >
                  <Link href="#resume-form">
                    Get Started for Free{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 transition-colors"
                >
                  <Link href="#how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[160px]">
                <span className="block text-4xl md:text-5xl font-bold mb-2">
                  10K+
                </span>
                <span className="opacity-80">Active Users</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[160px]">
                <span className="block text-4xl md:text-5xl font-bold mb-2">
                  85%
                </span>
                <span className="opacity-80">Interview Rate</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[160px]">
                <span className="block text-4xl md:text-5xl font-bold mb-2">
                  3X
                </span>
                <span className="opacity-80">More Calls</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[160px]">
                <span className="block text-4xl md:text-5xl font-bold mb-2">
                  4.9
                </span>
                <span className="opacity-80">User Rating</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
