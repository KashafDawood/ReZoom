"use client";

import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  FileSearch,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const steps = [
  {
    icon: <Upload className="h-10 w-10" />,
    title: "Upload Your Resume",
    description: "Upload your existing resume in PDF or DOCX format.",
    delay: 0.1,
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: "Add Job Description",
    description: "Paste the job description you're applying for.",
    delay: 0.2,
  },
  {
    icon: <FileSearch className="h-10 w-10" />,
    title: "AI Analysis",
    description:
      "Our AI analyzes both documents to find optimization opportunities.",
    delay: 0.3,
  },
  {
    icon: <CheckCircle2 className="h-10 w-10" />,
    title: "Get Optimized Resume",
    description:
      "Download your tailored resume aligned perfectly with the job requirements.",
    delay: 0.4,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How ReZoom Works
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Our intelligent platform optimizes your resume in just 4 simple
            steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transform -translate-y-1/4" />
                <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-background border border-border shadow-sm text-primary mb-5">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-5 top-10 transform translate-x-1/2">
                  <ArrowRight className="h-6 w-6 text-primary/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-6 rounded-lg border bg-gradient-to-r from-primary/5 to-purple-500/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div>
            <h3 className="text-xl font-semibold">
              Ready to optimize your resume?
            </h3>
            <p className="text-foreground/70">
              Start getting more interviews now.
            </p>
          </div>
          <Link href="#resume-form">
            <Button variant={"outline"} className="w-full md:w-auto">
              Try It Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
