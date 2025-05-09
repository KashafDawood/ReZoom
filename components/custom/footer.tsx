"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";

const currentYear = new Date().getFullYear();

// Footer link groups
const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "How it works", href: "#how-it-works" },
      { name: "Pricing", href: "#" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Resume Tips", href: "#" },
      { name: "Career Blog", href: "#" },
      { name: "Interview Guides", href: "#" },
      { name: "ATS Optimization", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Press", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  },
];

// Social links
const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand and newsletter */}
          <div className="col-span-1 lg:col-span-4 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <Link href="/" className="inline-block mb-4">
                  <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    ReZoom
                  </span>
                </Link>
                <p className="text-foreground/70 max-w-md mb-4">
                  AI-powered resume optimization to help you land your dream
                  job. Tailor your resume for each job description and stand out
                  from the competition.
                </p>
              </div>

              {/* Newsletter */}
              <div className="w-full md:max-w-md">
                <h3 className="font-medium mb-2">
                  Subscribe to our newsletter
                </h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <button className="h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-foreground/60 mt-2">
                  We'll never share your email. Unsubscribe anytime.
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-border my-8" />
          </div>

          {/* Links */}
          {footerLinks.map((group, i) => (
            <div key={i} className="col-span-1">
              <h3 className="font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2.5">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="w-full h-px bg-border" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          {/* Copyright */}
          <div className="text-sm text-foreground/60">
            © {currentYear} ReZoom. All rights reserved.
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}

            {/* Theme toggle */}
            <div className="ml-2 px-2 border-l border-border">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
