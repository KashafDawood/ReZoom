"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, ArrowRight, Sparkles, Loader2 } from "lucide-react";

export default function ResumeForm() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      // Here you would typically handle the form submission to your backend
      alert(
        "This is a demo. In a real application, your resume would be processed and optimized."
      );
    }, 3000);
  };

  return (
    <section id="resume-form" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Optimize Your Resume Now
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Upload your resume and paste the job description to get a tailored
            resume in minutes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-background rounded-xl border shadow-sm max-w-4xl mx-auto overflow-hidden"
        >
          <div className="p-1">
            <Tabs defaultValue="upload" className="w-full">
              <div className="px-4 pt-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger
                    value="upload"
                    className="flex items-center gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Upload Resume</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="paste"
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Paste Resume</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="p-6">
                  <TabsContent value="upload" className="space-y-6 mt-0">
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="resume">Your Resume</Label>
                      <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors">
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={handleResumeChange}
                        />
                        <Label
                          htmlFor="resume"
                          className="cursor-pointer flex flex-col items-center gap-2"
                        >
                          <Upload className="h-8 w-8 text-muted-foreground" />
                          <span className="text-lg font-medium">
                            {resumeFile
                              ? resumeFile.name
                              : "Click to upload or drag and drop"}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            PDF, DOC, or DOCX (max. 5MB)
                          </span>
                        </Label>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="paste" className="space-y-6 mt-0">
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="resume-text">Your Resume Content</Label>
                      <textarea
                        id="resume-text"
                        className="flex min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Paste your resume content here..."
                      />
                    </div>
                  </TabsContent>

                  <div className="space-y-6 mt-6 border-t pt-6">
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="job-description">Job Description</Label>
                      <textarea
                        id="job-description"
                        className="flex min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Paste the job description here..."
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t p-6 bg-muted/30">
                  <div className="text-sm text-muted-foreground">
                    We respect your privacy. Your data is secure and never
                    shared.
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="gap-2"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        Optimize Resume
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Tabs>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground">
            By uploading your resume, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
