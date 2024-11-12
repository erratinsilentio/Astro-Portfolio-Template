import { useState } from "react";
import { Send, MessageSquare, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "../home/header.astro";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0c16] p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-purple-300">
          Contact Dashboard
        </h1>
        <div className="flex flex-col sm:flex-row gap-2">
          <Card className="w-full border-purple-500/20 bg-[#0c0c16]/90 backdrop-blur-sm">
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
          <Card className="w-full sm:w-2/5 border-purple-500/20 bg-[#0c0c16]/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-purple-300">Recent Messages</CardTitle>
              <CardDescription className="text-purple-300/60">
                Your latest interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  {
                    name: "Alice Johnson",
                    message: "Great work on the last project!",
                  },
                  { name: "Bob Smith", message: "Can we schedule a call?" },
                  {
                    name: "Charlie Brown",
                    message: "I have a new project idea.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <MessageSquare className="h-6 w-6 text-purple-400" />
                    <div>
                      <p className="text-purple-200 font-medium">{item.name}</p>
                      <p className="text-purple-300/60 text-sm">
                        {item.message}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="w-full text-purple-300 hover:text-purple-100 hover:bg-purple-500/20"
              >
                View All Messages <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
