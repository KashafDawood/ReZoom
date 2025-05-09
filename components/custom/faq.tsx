"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Sample FAQ data
const faqItems = [
  {
    question: "How does ReZoom optimize my resume?",
    answer:
      "ReZoom uses advanced AI to analyze your resume against the job description. It identifies missing keywords, suggests skill highlights, restructures content for better readability, and ensures your experience matches what employers are looking for. The result is a tailored resume that passes through ATS systems and appeals to hiring managers.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Absolutely. We take data privacy seriously. Your resume and job descriptions are encrypted and never shared with third parties. We only use your data to provide the optimization service and delete it after processing unless you create an account to save your documents.",
  },
  {
    question: "How long does the optimization process take?",
    answer:
      "The AI analysis and optimization typically takes less than 2 minutes. You'll receive your optimized resume ready for download immediately after processing is complete.",
  },
  {
    question: "Will my resume look different after optimization?",
    answer:
      "ReZoom maintains your resume's original format while enhancing the content. The optimization focuses on the wording, skill emphasis, and achievement highlighting rather than changing the visual layout significantly.",
  },
  {
    question: "Can I optimize my resume for multiple job applications?",
    answer:
      "Yes! We recommend optimizing your resume for each job application. With a premium account, you can save multiple versions of your resume optimized for different positions or industries.",
  },
  {
    question: "Do I need technical skills to use ReZoom?",
    answer:
      "Not at all. Our platform is designed to be user-friendly. Simply upload your resume and paste the job description, then let our AI do the work. The interface guides you through each step with clear instructions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Everything you need to know about our resume optimization service
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border rounded-lg overflow-hidden"
            >
              <button
                className={`flex justify-between items-center w-full p-4 text-left font-medium transition-colors ${
                  openIndex === index ? "bg-muted" : "hover:bg-muted/50"
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all ${
                  openIndex === index ? "max-h-96 p-4 pt-0" : "max-h-0"
                }`}
              >
                <p className="text-foreground/80 py-4">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70">
            Still have questions?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
