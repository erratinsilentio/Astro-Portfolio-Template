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
import {
  EMAIL_ADDRESS,
  CONTACT_HEADER_TITLE,
  CONTACT_HEADER_LOGO,
  HOME_ADDRESS,
  PHONE_NUMBER,
  SOCIAL_MEDIA_LINKS,
} from "data";

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
    <div className="min-h-screen bg-transparent p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <h1 className="flex items-center justify-center gap-2 text-3xl font-bold text-purple-300 sm:justify-start">
          <span className="logo-slide-bounce-sm text-[40px] brightness-125">
            {CONTACT_HEADER_LOGO}
          </span>
          <a href="/" className="animate-fade-in">
            {CONTACT_HEADER_TITLE}
          </a>
        </h1>
        <div className="animate-fade-in flex flex-col gap-2 sm:flex-row">
          <Card className="w-full border-purple-500/20 bg-transparent backdrop-blur-sm">
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
          <Card className="w-full border-purple-500/20 bg-transparent backdrop-blur-sm sm:w-2/5">
            <CardHeader>
              <CardTitle className="text-purple-300">
                Contact Information
              </CardTitle>
              <CardDescription className="text-purple-300/60">
                For further inquiries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  {
                    name: "Email",
                    message: EMAIL_ADDRESS,
                  },
                  {
                    name: "Address",
                    message: HOME_ADDRESS,
                  },
                  {
                    name: "Phone Number",
                    message: PHONE_NUMBER,
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <MessageSquare className="h-6 w-6 text-purple-400" />
                    <div>
                      <p className="font-medium text-purple-200">{item.name}</p>
                      <p className="text-sm text-purple-300/60">
                        {item.message}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-1 pt-4">
              <CardTitle className="text-purple-300">
                Social Media Links
              </CardTitle>
              <CardDescription className="text-purple-300/60">
                For additional contact
              </CardDescription>
            </CardFooter>
            <section className="flex flex-row justify-evenly pt-2">
              {SOCIAL_MEDIA_LINKS.map(({ provider, link, icon }) => (
                <a
                  href={link}
                  className="flex h-16 w-16 items-center justify-center"
                  key={provider}
                >
                  <img
                    src={`/logos/${icon}`}
                    alt={provider}
                    className="w-14 transition-transform duration-200 hover:scale-125 hover:brightness-125"
                  />
                </a>
              ))}
            </section>
          </Card>
        </div>
        <Button
          variant={"default"}
          className="mt-4 flex h-8 w-full items-center justify-center border border-solid border-purple-600/[.345] bg-purple-900 px-4 font-thin text-zinc-100 transition-colors hover:border-pink-100/[0.250] hover:bg-[#1a1a1a] hover:text-white sm:w-[150px] sm:px-2 sm:text-base"
        >
          <a href="/" className="w-full sm:w-[150px]">
            Back To Home
          </a>
        </Button>
      </div>
    </div>
  );
}
