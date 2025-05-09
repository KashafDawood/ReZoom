"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "UX Designer at TechGiant",
    company: "TechGiant",
    quote:
      "I applied to 7 jobs with my ReZoom-optimized resume and got 5 interview calls. Before using ReZoom, I was barely getting any responses.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    stars: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Software Engineer",
    company: "InnovateTech",
    quote:
      "The AI recommendations helped me highlight skills I didn't know were important. Landed my dream job at a FAANG company after 3 weeks of using ReZoom.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    stars: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Manager",
    company: "GrowthMarketing",
    quote:
      "The keyword optimization feature is a game-changer. My resume now passes through all ATS systems and gets seen by actual recruiters.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    stars: 4,
  },
  {
    id: 4,
    name: "David Williams",
    position: "Financial Analyst",
    company: "Global Finance Corp",
    quote:
      "I was skeptical at first, but after using ReZoom, I received calls from companies I'd been trying to get into for years. Worth every penny!",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    stars: 5,
  },
  {
    id: 5,
    name: "Aisha Patel",
    position: "Project Manager",
    company: "Agile Solutions",
    quote:
      "The job-specific tailoring helped me transition industries. I went from healthcare to tech with a perfectly positioned resume.",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    stars: 5,
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their job
            search with ReZoom
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-xl border shadow-sm overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
              {/* Testimonial image */}
              <div className="md:col-span-1 bg-gradient-to-br from-primary/20 to-purple-500/20 p-8 flex items-center justify-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-lg">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Testimonial content */}
              <div className="md:col-span-2 p-8 flex flex-col justify-center">
                <div className="mb-6 text-primary">
                  <Quote className="h-10 w-10 opacity-20" />
                </div>
                <blockquote className="mb-6 text-xl md:text-2xl italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonials[currentTestimonial].stars ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-foreground/70">
                    {testimonials[currentTestimonial].position} at{" "}
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation arrows */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-background border shadow-sm hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-primary/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-background border shadow-sm hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
