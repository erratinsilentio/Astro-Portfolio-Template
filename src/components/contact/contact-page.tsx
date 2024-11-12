import { useState } from "react";
import { Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0c16] text-purple-300">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <Card className="w-full md:w-2/3 border-purple-500/20 bg-[#0c0c16]/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-purple-300">
                Let&apos;s Work Together
              </CardTitle>
              <CardDescription className="text-purple-300/60">
                Share your project idea or just say hello!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-purple-200">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="border-purple-500/20 bg-purple-950/20 text-purple-100 placeholder:text-purple-300/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-purple-200">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="your@email.com"
                    required
                    type="email"
                    className="border-purple-500/20 bg-purple-950/20 text-purple-100 placeholder:text-purple-300/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-purple-200">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    required
                    className="min-h-[120px] border-purple-500/20 bg-purple-950/20 text-purple-100 placeholder:text-purple-300/30"
                  />
                </div>
                <Button
                  className="w-full bg-purple-500/80 text-purple-50 hover:bg-purple-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="w-full md:w-1/3 space-y-6">
            <Card className="border-purple-500/20 bg-[#0c0c16]/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Email: contact@erratinsilentio.dev</p>
                <p>Location: Remote</p>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20 bg-[#0c0c16]/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300">
                  Connect with Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a href="#" className="text-purple-300 hover:text-purple-400">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-purple-300 hover:text-purple-400">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-purple-300 hover:text-purple-400">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t border-purple-500/20 bg-[#0c0c16]/90 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-purple-300/60">
          <p>&copy; 2023 erratinsilentio.dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
