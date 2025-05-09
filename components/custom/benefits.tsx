"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  BarChart,
  Award,
  Clock,
  Target,
  Zap,
  Bot,
  Shield,
} from "lucide-react";

const benefits = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Keyword Optimization",
    description:
      "Our AI identifies and incorporates job-specific keywords that get past ATS systems.",
    delay: 0.1,
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Skill Matching",
    description:
      "Automatically highlights your most relevant skills based on the job description.",
    delay: 0.2,
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Achievement Highlighting",
    description:
      "Emphasizes your accomplishments that best align with the position you're applying for.",
    delay: 0.3,
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Time-Saving",
    description:
      "Get a tailored resume in minutes, not hours. Apply to more jobs in less time.",
    delay: 0.4,
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "AI-Powered Analysis",
    description:
      "Our advanced AI understands job requirements and optimizes your resume accordingly.",
    delay: 0.5,
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Privacy Guaranteed",
    description: "Your data is encrypted and never shared with third parties.",
    delay: 0.6,
  },
];

export default function Benefits() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Features & Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Use ReZoom?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Our intelligent platform gives you the competitive edge in today's
            job market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
              className="bg-background p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-foreground/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">3x higher interview rate</span>
            </div>
            <div className="hidden sm:block h-1 w-1 rounded-full bg-foreground/30" />
            <div className="flex items-center gap-1">
              <LineChart className="h-5 w-5 text-green-500" />
              <span className="font-medium">85% success rate</span>
            </div>
            <div className="hidden sm:block h-1 w-1 rounded-full bg-foreground/30" />
            <div className="flex items-center gap-1">
              <Award className="h-5 w-5 text-blue-500" />
              <span className="font-medium">
                Trusted by 10,000+ professionals
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
